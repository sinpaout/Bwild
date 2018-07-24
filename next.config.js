const SUMMARY_JSON = require('./json/summary.json')

module.exports = {
  exportPathMap: function () {
    const pathMap = SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap).map((path) => {
      const { base, souceBase } = SUMMARY_JSON.fileMap[path];
      return {
        [`p/${souceBase}`] : { page: '/post', query: { path: [`${base}`] } }
      }
    })
    return {
      '/': { page: '/' },
      'about': { page: 'about' },
      ...pathMap
    }
  },
  module: {
    loaders: [
      { test: /\.json$/, loaders: ['json-loader',  'yaml-frontmatter-loader']},
      {
        test: /\.md$/,
        use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
    ]
  }
}