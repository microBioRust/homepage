<script lang="ts" setup>
definePageMeta({ layout: 'blog' })

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div class="prose prose-invert prose-gray max-w-none" v-if="page">
    <ContentRenderer :value="page" />
  </div>
</template>
