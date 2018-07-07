import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { getPosts } from '../api/posts';


export default class IndexPage extends Component {

  /**
   * renderPosts
   * 記事一覧取得
   */
  renderPosts() {
    if (this.props.posts) {
      const li = this.props.posts.map(post => {
        return (
          <li key={post.id}>
            <Link as={`/p/${post.id}`} href={`/post?id=${post.id}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </a>
            </Link>
          </li>
        )
      })
      return (
        <ul>
          {li}
        </ul>
      )
    }
    return null;
  }

  render() {
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

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}
