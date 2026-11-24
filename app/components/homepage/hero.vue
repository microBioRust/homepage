<template>
  <section class="relative overflow-hidden bg-gray-950 min-h-[70vh] flex items-center justify-center">
    <div
      class="absolute inset-0 bg-[url(/dna-6.jpg)] bg-cover bg-center opacity-25 pointer-events-none"
    />

    <div class="relative z-10 px-8 sm:px-12 lg:px-16 py-20 text-center max-w-3xl mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-duration="800"
        class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
      >
        Accelerating Microbial Genomics Research
      </h1>

      <p
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
        class="mt-6 text-sm lg:text-base text-gray-400 leading-relaxed max-w-lg mx-auto"
      >
        A blazing-fast, open-source bioinformatics toolkit built in Rust — with
        Python bindings for seamless interop and functions optimised for data
        exploration.
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="400"
        class="mt-8 flex flex-wrap items-center justify-center gap-4"
      >
        <NuxtLink
          to="/docs"
          class="inline-flex items-center px-6 py-3 text-sm font-medium bg-white text-gray-950 rounded-lg hover:bg-gray-200 transition-colors duration-200"
        >
          Explore Docs
        </NuxtLink>
        <NuxtLink
          to="/docs"
          class="inline-flex items-center px-6 py-3 text-sm font-medium text-white border border-white rounded-lg hover:bg-white hover:text-gray-950 transition-colors duration-200"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
