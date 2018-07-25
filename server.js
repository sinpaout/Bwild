const { parse } = require('url')
const match = require('micro-route/match')
const next = require('next')

const dev = process.env.NODE_NEV != 'production'

const app = next({ dev });
const handle = app.getRequestHandler()

const isPost = req => match(req, '/post')

async function main (req, res) {
  const parsedUrl = parse(req.url, true)
  const { query } = parsedUrl

  if (isPost(req)) {
    return app.render(req, res, '/post', query)
  }

  return handle(req, res, parsedUrl)
}

async function setup(handler) {
  await app.prepare()
  return handler
}

module.exports = setup(main)
