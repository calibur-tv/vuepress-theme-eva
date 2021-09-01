<template>
  <page-header />
  <page-sidebar />
  <page-content />
  <page-footer />
</template>

<script>
import { useSiteData, usePageData } from '@vuepress/client'
import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
import PageHeader from '../components/PageHeader.vue'
import PageSidebar from '../components/PageAside.vue'
import PageContent from '../components/PageContent.vue'
import PageFooter from '../components/PageFooter'

export default {
  components: {
    PageHeader,
    PageSidebar,
    PageContent,
    PageFooter
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
