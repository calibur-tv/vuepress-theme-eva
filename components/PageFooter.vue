<template>
  <footer class="footer">
    <span>
      © {{ thisYear }}
    </span>
    <template v-if="author">
      &nbsp;<span>{{ author }}</span>
    </template>
  </footer>
</template>

<script>
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

export default {
  setup() {
    const theme = useThemeData()

    return {
      author: theme.value.author,
      thisYear: new Date().getFullYear()
    }
  }
}
</script>
