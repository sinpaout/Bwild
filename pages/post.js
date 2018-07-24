import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default class PostPage extends Component {
  render() {
    const { post } = this.props;
    return (
      <main>
        <Link href='/about' prefetch><a>About</a></Link> |
        <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }}></div>
      </main>
    )
  }
}

PostPage.getInitialProps = ({ query }) => {
  const pageJson = require(`../json/${query.path}`)

  return {
    post: pageJson
  }
}