import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import SUMMARY_JSON from '../json/summary.json'

export default class IndexPage extends Component {
  /**
   * renderPosts
   * 記事一覧
   */
  render() {
    if (this.props.posts) {
      const li = this.props.posts.map((post) => {            
        return (
          <li key={post.title}>
            <Link as={`/p/${post.sourceBase}`} href={`/post?path=${post.base}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                  <p>{post.preview}</p>
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
}
IndexPage.getInitialProps = () => {
  const json = Object.keys(SUMMARY_JSON.fileMap).map((path) => {
    const { title, date, preview, dir, base, sourceBase } = SUMMARY_JSON.fileMap[path];
     return { title, date, preview, dir, base, sourceBase }
   })

  return {
    posts: json
  }
}
