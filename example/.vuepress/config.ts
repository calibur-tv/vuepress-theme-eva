import path from 'path'
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'Example Site',
  description: 'Example for vuepress-theme-simple',
  theme: path.resolve(__dirname, '../../'),
  themeConfig: {
    author: 'viko16'
  },
})
