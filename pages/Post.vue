<template>
  <section class="post-view">
    <div class="post-head">
      <h1 class="post-title">
        {{ pageData.title }}
      </h1>
      <time-ago
        :last-updated="pageData.git.updatedTime"
        class="post-date"
      />
    </div>
    <Content />
  </section>
</template>

<script lang="ts" setup>
import TimeAgo from '../components/TimeAgo.vue'
import { usePageData } from '@vuepress/client'

const pageData = usePageData()
</script>
