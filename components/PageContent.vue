<template>
  <main class="main">
    <home-page v-if="page.path === '/'" />
    <post-page v-else />
  </main>
</template>

<script setup lang="ts">
import { usePageData } from '@vuepress/client'
import HomePage from '../pages/Home.vue'
import PostPage from '../pages/Post.vue'

const page = usePageData()
</script>
