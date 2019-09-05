import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import IMG from "gatsby-image"

const LatestPostsWidgetFooter = () => {
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
        <div className="latest-posts">
            {data.allWordpressPost.edges.map((post) => (
              <Link to={`/post/${post.node.slug}`} key={post.node.id}>
                <div className="post d-flex align-items-center">
                  {post.node.featured_media && post.node.featured_media.localFile &&
                  <div className="image" style={{ width: 50, padding: 4, border: '2px solid #333', marginRight: 10}}>
                    <IMG
                      sizes={post.node.featured_media.localFile.childImageSharp.sizes}
                      alt={post.node.title}
                    />
                  </div>}
                  <div className="title"><strong>{post.node.title}</strong>
                    <div className="d-flex align-items-center">
                      <span className="date last-meta">{post.node.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    />

  )
}

export default LatestPostsWidgetFooter