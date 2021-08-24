const { path } = require('@vuepress/utils')

const theme = (config) => {
  return {
    name: 'vuepress-theme-simple',
    layouts: path.resolve(__dirname, 'layouts'),
    clientAppEnhanceFiles: path.resolve(__dirname, './client/clientAppEnhance.ts'),
    plugins: [
      [
        '@vuepress/theme-data',
        {
          themeData: config
        }
      ],
      [
        '@vuepress/shiki',
        {
          theme: 'dark-plus'
        }
      ]
    ],
    onPrepared: async(app) => {
      const notes = app.pages
        .map(_ => {
          const data = _.data
          delete data.headers
          return data
        })
        .filter(item => item.path !== '/' && item.path !== '/404.html')
        .sort((a, b) => {
          return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
        })

      await app.writeTemp('notes.js', `export default ${JSON.stringify(notes)}`)
    }
  }
}

module.exports = theme