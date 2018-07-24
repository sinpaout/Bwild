const SUMMARY_JSON = require('./json/summary.json')

module.exports = {
  exportPathMap: function () {
    let pathMap = {}
    SUMMARY_JSON.fileMap && Object.keys(SUMMARY_JSON.fileMap).forEach((path) => {
      const { base, sourceBase } = SUMMARY_JSON.fileMap[path];
      pathMap[`/p/${sourceBase}`] = { page: '/post', query: { path: base } }
    })
   
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...pathMap
    }
  }
}
