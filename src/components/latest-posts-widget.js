import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import IMG from "gatsby-image"

const LatestPostsWidget = () => {
  return (
    <StaticQuery query={graphql`
    query {
        allWordpressPost(
            sort:{
                fields:date
                order:DESC
            }
            limit: 3
        ) {
            edges {
                node {
                    id
                    title
                    date(formatString: "Do MMM YYYY")
                    slug
                    featured_media {
                        localFile {
                            childImageSharp {
                                sizes(maxWidth: 60, maxHeight: 60) {
                                    ...GatsbyImageSharpSizes
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`}
      render={data => (
        <div className="widget latest-posts">
          <header>
            <h3 className="h6">Latest Posts</h3>
          </header>
          <div className="blog-posts">
            {data.allWordpressPost.edges.map((post) => (
              <Link to={`/post/${post.node.slug}`} key={post.node.id}>
                <div className="item d-flex align-items-center">
                  {post.node.featured_media && post.node.featured_media.localFile &&
                  <div className="image">
                    <IMG
                      sizes={post.node.featured_media.localFile.childImageSharp.sizes}
                      alt={post.node.title}
                      style={{ width: 60, height: 60 }}
                    />
                  </div>}
                  <div className="title"><strong>{post.node.title}</strong>
                    <div className="d-flex align-items-center">
                      <div className="views"><i className="fa fa-clock-o"/>{post.node.date}</div>
                      <div className="comments"><i className="fa fa-comment"/>12</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    />

  )
}

export default LatestPostsWidget