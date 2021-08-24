<template>
  <time
    :datetime="formatDate(lastUpdated)"
    :title="formatDate(lastUpdated)"
    pubdate="pubdate"
  >
    {{ timeago(lastUpdated) }}
  </time>
</template>

<script>
import { format } from 'timeago.js'

export default {
  props: {
    lastUpdated: {
      type: [ String, Date, Number ],
      default: ''
    },
  },
  setup() {
    const formatDate = date => {
      return new Date(date).toLocaleString()
    }

    const timeago = (str, lang) => {
      if (!str) {
        return format()
      }

      const locale = (lang === 'zh-CN') ? 'zh_CN': 'en_US'

      return format(new Date(str), locale)
    }

    return {
      timeago,
      formatDate
    }
  }
}
</script>
