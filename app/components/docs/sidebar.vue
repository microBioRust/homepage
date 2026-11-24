<script setup lang="ts">
const route = useRoute()

const links = [
  { label: 'Getting Started', to: '/docs' },
  { label: 'Installation', to: '/docs/installation' },
  { label: 'Usage', to: '/docs/usage' },
  { label: 'Formats & Parsing', to: '/docs/formats_and_parsing' },
  { label: 'Python Bindings', to: '/docs/microbiorust-py' },
  { label: 'Windows Install', to: '/docs/windows_install' },
]

function isActive(to: string) {
  return route.path === to
}
</script>

<template>
  <nav class="space-y-1">
    <p class="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Documentation</p>
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="block px-3 py-2 rounded-lg text-sm transition-colors duration-150"
      :class="isActive(link.to)
        ? 'bg-white text-gray-950 font-medium'
        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>
