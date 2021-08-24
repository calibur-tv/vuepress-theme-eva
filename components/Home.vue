<template>
  <div class="list-view">
    <div
      v-if="list.length === 0"
      class="empty-list"
    >
      Ooops! Nothing here..🙈
    </div>
    <ol
      v-else
      class="list"
    >
      <li
        v-for="item of list"
        :key="item.key"
        class="list-item"
      >
        <router-link
          :to="item.path"
          class="item-title"
        >
          {{ item.title }}
        </router-link>
        <br>
        <time-ago
          :last-updated="item.frontmatter.date || item.lastUpdated"
          class="item-date"
        />
      </li>
    </ol>
  </div>
</template>

<script>
import TimeAgo from './TimeAgo'
import { computed } from 'vue'
import notes from '@temp/notes'

export default {
  components: {
    TimeAgo
  },
  setup() {
    const list = computed(() => notes)

    return {
      list
    }
  }
}
</script>
