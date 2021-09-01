<template>
  <aside class="sidebar">
    sidebar
  </aside>
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
