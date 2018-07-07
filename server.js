const { createServer } = require('http')
const next = require('next')
const { parse } = require('url')
const pathMatch = require('path-match')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const route = pathMatch()
const match = route('/post/:name')
const files = fs.readdirSync('./static/posts').reverse()
const posts = files.map( el => `./static/posts/` + el)
const postNames = files.map( el => el.slice(4, -3))

app.prepare()
.then(() => {
  createServer((req, res) => {
    const { pathname } = parse(req.url)
    const params = match(pathname)
  
    if (route('/post')(pathname)) {
      app.render(req, res, '/index')
      return
    }

    if (params === false) {
      handle(req, res)
      return          
    }

    const postIndex = postNames.indexOf(params.name)
    
    if (postIndex === -1 ) {
      app.render(req, res, '/404')
      return
    }

    const fname = posts[postIndex]
    app.render(req, res, '/post', { fname })
  })

  .listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
