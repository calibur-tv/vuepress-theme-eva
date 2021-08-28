import path from 'path'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: '{ do something }',
  description: 'Example for @calibur-tv/vuepress-theme-eva',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: '冰淤'
  },
})
