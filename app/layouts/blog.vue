<script lang="ts" setup>
import RyderDefault from "@opeolluwa/ryder/layouts/RyderDefault.vue";
</script>

<template>
  <RyderDefault>
    <template #header>
      <HomepageHeader />
    </template>

    <main class="pt-17 lg:pt-18">
      <div class="mx-auto max-w-4xl px-6 lg:px-8 py-10">
        <slot />
      </div>
    </main>

    <template #footer>
      <HomepageFooter />
    </template>
  </RyderDefault>
</template>
