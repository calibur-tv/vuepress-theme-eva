<template>
  <div class="content article-list">
    <div
      v-if="list.length === 0"
      class="empty-list"
    >
      Ooops! Nothing here..🙈
    </div>
    <template v-else>
      <article
        v-for="item of list"
        :key="item.key"
        class="article article-type-post"
      >
        <div class="article-header">
          <h1>
            <router-link
              :to="item.path"
              class="article-title"
              v-text="item.title"
            />
          </h1>
        </div>
        <p class="article-meta">
          <time-ago
            :last-updated="item.frontmatter.date || item.lastUpdated"
            class="article-date"
          />
        </p>
      </article>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import notes from '@temp/notes'
import TimeAgo from '../components/TimeAgo.vue'

const list = computed(() => notes)
</script>
