export interface HomepageRouteItem {
  label: string;
  to: string;
  icon?: string;
  external?: boolean;
}

export interface FooterLinkSection {
  title: string;
  links: HomepageRouteItem[];
}

export const headerNavigation: HomepageRouteItem[] = [
  { label: "Home", to: "/", icon: "ri:home-line" },
  { label: "Docs", to: "/docs", icon: "ri:book-open-line" },
  { label: "Blog", to: "/blog", icon: "ri:article-line" },
  { label: "GitHub", to: "https://github.com/microBioRust", icon: "ri:github-line", external: true },
];

export const footerSections: FooterLinkSection[] = [
  {
    title: "Project",
    links: [
      { label: "Documentation", to: "/docs" },
      { label: "Blog", to: "/blog" },
      { label: "Crate", to: "https://github.com/microBioRust/microBioRust", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", to: "https://github.com/microBioRust", external: true },
      { label: "Discord", to: "#", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "License", to: "https://github.com/microBioRust/microBioRust/blob/main/LICENSE", external: true },
    ],
  },
];

export const socialLinks: HomepageRouteItem[] = [
  { label: "GitHub", to: "https://github.com/microBioRust", icon: "ri:github-line", external: true },
  { label: "Discord", to: "#", icon: "ri:discord-line", external: true },
];

export function isExternalLink(item: HomepageRouteItem): boolean {
  return item.external === true || item.to.startsWith("http");
}