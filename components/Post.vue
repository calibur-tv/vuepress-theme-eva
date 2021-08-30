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

<script>
import TimeAgo from './TimeAgo';
import { usePageData } from '@vuepress/client'

export default {
  components: {
    TimeAgo
  },
  setup() {
    const pageData = usePageData()

    return {
      pageData
    }
  }
}
</script>
