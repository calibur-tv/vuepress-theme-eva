<template>
  <div class="theme-container vuepress-theme-simple">
    <header class="header">
      <router-link
        to="/"
        :title="site.description"
        class="site-name"
      >
        {{ site.title }}
      </router-link>
      <div style="clear: both" />
      <nav-bar />
    </header>
    <home-page v-if="page.path === '/'" />
    <post-page v-else />
    <footer-bar />
  </div>
</template>

<script>
import { useSiteData, usePageData } from '@vuepress/client'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import HomePage from '../components/Home'
import PostPage from '../components/Post'
import FooterBar from '../components/FooterBar'
import NavBar from '../components/NavBar'

export default {
  components: {
    HomePage,
    PostPage,
    FooterBar,
    NavBar,
  },
  setup() {
    const site = useSiteData()
    const page = usePageData()
    const theme = useThemeData()
    console.log(site.value)
    console.log(page.value)
    console.log(theme.value)
    return {
      site,
      page,
      theme
    }
  }
};
</script>
