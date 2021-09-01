const { path } = require('@vuepress/utils')
const fetch = require('node-fetch')

const theme = (config) => {
  return {
    name: '@calibur/vuepress-theme-eva',
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
      ],
      [
        '@vuepress/nprogress',
        config.nprogress !== false
      ],
      [
        '@vuepress/palette',
        { preset: 'sass' }
      ],
      [
        '@vuepress/git',
        config.git !== false
      ],
      [
        '@vuepress/medium-zoom',
        {
          selector: '.post-view > img, .post-view :not(a) > img',
          zoomOptions: {
            background: '#BADA55'
          },
          delay: 400
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
          return b.git.createdTime - a.git.createdTime
        })

      const author = await fetch('https://api.github.com/users/falstack').then(user => user.json())

      await app.writeTemp('author.js', `export default ${JSON.stringify(author)}`)
      await app.writeTemp('notes.js', `export default ${JSON.stringify(notes)}`)
    }
  }
}

module.exports = theme