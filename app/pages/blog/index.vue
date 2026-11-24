<script lang="ts" setup>
definePageMeta({ layout: 'blog' })

const { data: posts } = await useAsyncData('blog-list', () => {
  return queryCollection('blog').all()
})
</script>

<template>
  <div class="py-10">
    <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2">Blog</h1>
    <p class="text-gray-400 mb-10">Updates, tutorials, and insights from the microBioRust project.</p>

    <div v-if="posts?.length" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="post in posts"
        :key="post.path"
        :to="post.path"
        class="group block rounded-xl border border-gray-800 bg-gray-900 p-6 hover:border-gray-600 transition-colors duration-200"
      >
        <h2 class="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
          {{ post.title || 'Untitled' }}
        </h2>
        <p v-if="post.description" class="mt-2 text-sm text-gray-400 line-clamp-3">
          {{ post.description }}
        </p>
        <span class="mt-4 inline-flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
          Read more &rarr;
        </span>
      </NuxtLink>
    </div>

    <p v-else class="text-gray-500">No posts yet. Check back soon.</p>
  </div>
</template>
