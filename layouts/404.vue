<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="siteData.description"
        class="site-name"
      >
        {{ siteData.title }}
      </router-link>
      <div style="clear: both" />
    </header>
    <div class="layout-404">
      <h1>404</h1>
      <p>Seems nothing here.</p>
      <router-link to="/">
        Back to home.
      </router-link>
    </div>
  </div>
</template>

<script>
import { useSiteData } from '@vuepress/client'

export default {
  setup() {
    const siteData = useSiteData()
  
    return {
      siteData,
    }
  }
};
</script>
