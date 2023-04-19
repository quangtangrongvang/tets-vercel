import Link from 'next/link'
import React from 'react';

// @ts-ignore
import {getLatestPosts} from './api/getLastedPost';

export async function getStaticProps() {
  const latestPosts = await getLatestPosts();
  return {
    props: {latestPosts},
  };
}
// @ts-ignore
export default function Home({latestPosts: {edges}}) {

    // @ts-ignore
  let col =  edges.map((post) => (
      <div
          className="col-4"
          key={post.node.id}
      >
          <div>
              <Link href={post.node.slug}>
                  <img
                      className="img-fluid"
                      src={post.node.featuredImage?.node.sourceUrl}
                      alt={post.node.title}
                  />
              </Link>
                <p>{post.node.slug}</p>
              <div>
                  <div className="fw-bold">
                      {post.node.title}
                  </div>
                  <div
                      dangerouslySetInnerHTML={{__html: post.node.excerpt}}
                  />
              </div>
          </div>
      </div>
  ))
    return (
        <div className="container">
            <div className="row gx-5 gy-5">
                {col}
            </div>
        </div>
    )

}

