import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import frontMatter from 'front-matter'
import { getPosts } from '../api/posts'

export default class IndexPage extends Component {
  /**
   * renderPosts
   * 記事一覧取得
   */
  renderPosts() {
    const li = this.props.linkParams.map((el, i) => {
      return (
        <li key={el.name} className='post-list'>
          <Link href={'/post?name='+el.name} as={'/post/'+el.name}>
            <a>
              <p className='post-title'>{el.title}</p>
              <p className='post-date'>{el.date}</p>
            </a>
          </Link>
        </li>
      )
    })
    return (
      <ul className='posts'>
        {li}
      </ul>
    )
  }

  render () {
    const posts = this.renderPosts();
    return (
      <Fragment>
        <Head>
          <title>This is the default title</title>
        </Head>
        <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about' prefetch><a>About</a></Link> |
        </nav>
        <main>
          {posts}
        </main>
        <footer>
          footer
        </footer>
      </Fragment>
    )
  }
}

IndexPage.getInitialProps = async () => {
  return getPosts('./static/posts/')
    .then((posts) => {
      
      const linkParams = posts.nameList.map((postName, i) => {
        const content = fs.readFileSync(posts.pathList[i], 'utf-8')
        const meta = frontMatter(content)
        return {
          name: postName,
          title: meta.attributes.title,
          date: meta.attributes.date,
        }
      })
      return {
        linkParams
      }
    })
}