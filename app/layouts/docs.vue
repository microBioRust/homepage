<script lang="ts" setup>
import RyderDefault from "@opeolluwa/ryder/layouts/RyderDefault.vue";
</script>

<template>
  <RyderDefault>
    <template #header>
      <HomepageHeader />
    </template>

    <main class="pt-17 lg:pt-18">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div class="md:grid md:grid-cols-[220px_1fr] md:gap-10">
          <aside class="hidden md:block sticky top-24 self-start border-r border-gray-800 pr-6">
            <DocsSidebar />
          </aside>
          <div class="min-w-0">
            <slot />
          </div>
        </div>
      </div>
    </main>

    <template #footer>
      <HomepageFooter />
    </template>
  </RyderDefault>
</template>
