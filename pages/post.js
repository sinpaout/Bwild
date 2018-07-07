import Head from 'next/head'
import Link from 'next/link'
import React, { Component, Fragment } from 'react'
import fs from 'fs'
import frontMatter from 'front-matter'
const md = require('markdown-it')({ html: true })
  .use(require('markdown-it-highlightjs'))

export default class PostPage extends Component {
  render () {

    return (
      <Fragment>
        <Head>
          <title>{this.props.title}</title>
          {/* <link rel="stylesheet" type="text/css" href="/static/css/paraiso-light.css" media="screen" /> */}
          {/* <link rel="stylesheet" type="text/css" href="/static/css/katex.min.css" media="screen" /> */}
        </Head>
        <header>
          <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about' prefetch><a>About</a></Link> |
          </nav>
        </header>
        <main>
          <div dangerouslySetInnerHTML={{__html: md.render(this.props.bodytxt)}} />
        </main>
        <footer>
          footer
        </footer>
      </Fragment>
    )
  }
}

PostPage.getInitialProps = async ({ query: { fname } }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fname, 'utf-8', (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content)
      }
    })
  }).then((content) => {
    const meta = frontMatter(content)
    // const body = md.render(meta.body)

    return {
      title: meta.attributes.title,
      bodytxt: meta.body
    }
  })
}