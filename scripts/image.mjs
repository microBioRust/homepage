/**
 * optimize-images.mjs
 * Recursively scans `public/` for image files (jpg, jpeg, png, webp, avif)
 * and optimizes them in-place using sharp. Images wider than --max-width are
 * resized; all images are compressed with format-specific settings. An image
 * is only overwritten when the optimized result is smaller than the original.
 *
 * Usage:
 *   node scripts/image.mjs
 *   node scripts/images.mjs --max-width=1200 --quality=80
 *
 * Defaults:
 *   --max-width  1600   Maximum width in pixels (images wider are resized)
 *   --quality     78    Compression quality (format-specific)
 *
 * Files under 50 KB are skipped. Hidden directories, hidden files, and
 * favicon.ico are also ignored.
 *
 * Run via npm:
 *   npm run optimize:images
 */

import { readdir, stat } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = join(ROOT, "public");

const args = process.argv.slice(2);
const MAX_WIDTH = Number(
  args.find((a) => a.startsWith("--max-width="))?.split("=")[1] ?? 1600,
);
const QUALITY = Number(
  args.find((a) => a.startsWith("--quality="))?.split("=")[1] ?? 78,
);
const MIN_SIZE_BYTES = 50 * 1024;

const PHOTO_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const SKIP_NAMES = new Set([".DS_Store", "favicon.ico"]);

let optimized = 0;
let skipped = 0;
let savedBytes = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".") || SKIP_NAMES.has(entry.name)) continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (PHOTO_EXT.has(extname(entry.name).toLowerCase())) {
      await optimize(full);
    }
  }
}

async function optimize(file) {
  const { size } = await stat(file);
  if (size < MIN_SIZE_BYTES) {
    skipped++;
    return;
  }

  const ext = extname(file).toLowerCase();
  let pipeline = sharp(file, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  if (!meta.width) return;

  if (meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: QUALITY,
      mozjpeg: true,
      progressive: true,
    });
  } else if (ext === ".png") {
    pipeline = pipeline.png({
      palette: true,
      quality: QUALITY,
      compressionLevel: 9,
      adaptiveFiltering: true,
      colours: 256,
    });
  } else if (ext === ".webp") {
    pipeline = pipeline.webp({ quality: QUALITY });
  } else if (ext === ".avif") {
    pipeline = pipeline.avif({ quality: QUALITY });
  }

  await pipeline.toFile(file + ".tmp");
  const tmpSize = (await stat(file + ".tmp")).size;
  const before = size;
  const after = tmpSize;

  if (after >= before) {
    await import("node:fs/promises").then((fs) => fs.rm(file + ".tmp"));
    skipped++;
    return;
  }

  await import("node:fs/promises").then((fs) => fs.rename(file + ".tmp", file));
  optimized++;
  savedBytes += before - after;
  console.log(
    `${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB  ${file.replace(ROOT + "/", "")}`,
  );
}

await walk(PUBLIC_DIR);
console.log(
  `\nDone: ${optimized} optimized, ${skipped} skipped, ${(savedBytes / 1024 / 1024).toFixed(2)}MB saved.`,
);
