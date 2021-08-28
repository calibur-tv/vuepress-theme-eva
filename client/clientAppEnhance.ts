import { defineClientAppEnhance } from '@vuepress/client'
import CodeGroup from './components/CodeGroup'
import CodeGroupItem from './components/CodeGroupItem.vue'

import './styles/index.scss'

export default defineClientAppEnhance(({ app, router }) => {
    app.component('CodeGroup', CodeGroup)
    app.component('CodeGroupItem', CodeGroupItem)
})