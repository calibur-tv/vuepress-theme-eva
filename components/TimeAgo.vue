<template>
  <time
    :datetime="formatDate(lastUpdated)"
    :title="formatDate(lastUpdated)"
    pubdate="pubdate"
  >
    {{ timeago(lastUpdated) }}
  </time>
</template>

<script setup lang="ts">
import { format } from 'timeago.js'

defineProps({
  lastUpdated: {
    type: [ String, Date, Number ],
    default: ''
  },
})

const formatDate = date => {
  return new Date(date).toLocaleString()
}

const timeago = (str, lang?: string) => {
  if (!str) {
    return format()
  }

  const locale = (lang === 'zh-CN') ? 'zh_CN': 'en_US'

  return format(new Date(str), locale)
}
</script>
