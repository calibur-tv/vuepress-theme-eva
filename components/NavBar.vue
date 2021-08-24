<template>
  <div
    v-if="navbar"
    class="navbar"
  >
    <a
      v-for="(url, name) in navbar"
      :key="name"
      :href="url"
      target="_blank"
      class="navbar-item"
      rel="noopener noreferrer"
    >{{ name }}</a>
  </div>
</template>

<script>
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

export default {
  setup() {
    const theme = useThemeData()

    return {
      navbar: theme.value?.navbar
    }
  }
}
</script>
