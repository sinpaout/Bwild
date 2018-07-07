import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { getPost } from '../api/posts';

export default class PostPage extends Component {

  render() {
    const { post } = this.props;
    return (
      <Fragment>
        <Head>
          <title>This is the default title</title>
        </Head>
        <header>
          <nav>
          <Link href='/'><a>Home</a></Link> |
          <Link href='/about' prefetch><a>About</a></Link> |
          </nav>
        </header>
        <main>
          <h1>
            {post.title}
          </h1>
          <p>
            {post.body}
          </p>
        </main>
        <footer>
          footer
        </footer>
      </Fragment>
    )
  }
}

PostPage.getInitialProps = async ({ query }) => {
  const res = await getPost(query.id)
  const json = await res.json()
  return { post: json[0] }
}
