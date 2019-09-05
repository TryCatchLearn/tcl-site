import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IMG from "gatsby-image"
import { graphql, Link } from "gatsby"
import { Container, Row } from "react-bootstrap"
import Sidebar from "../components/sidebar"
import PrevNext from "../components/prev-next"

const BlogPostTemplate = ({ data, pageContext }) => {
  const {prev, next} = pageContext;
    return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <Container>
        <Row>
          <main className='post blog-post col-sm-8'>
            <Container>
              <div className="post-single">
                {data.wordpressPost.featured_media && data.wordpressPost.featured_media.localFile &&
                <div className="post-thumbnail">
                  <IMG
                    sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes}
                    alt={data.wordpressPost.title}
                  />
                </div>}
                <div className="post-details">
                  <div className="post-meta d-flex justify-content-between">
                    <div className="category">
                      {data.wordpressPost.categories && data.wordpressPost.categories.map((category) => (
                        <Link to={`/category/${category.name}`} key={category.id} href="#">{category.name}</Link>
                      ))}
                    </div>
                  </div>
                  <h1>{data.wordpressPost.title}</h1>
                  <div className="post-footer d-flex align-items-center flex-column flex-sm-row">
                    <Link to={`/author/neil`} className="author d-flex align-items-center flex-wrap">
                    <div className="avatar"><img src={data.wordpressPost.author.avatar_urls.wordpress_48} alt="..." className="img-fluid"/></div>
                    <div className="title"><span>{data.wordpressPost.author.name}</span></div>
                    </Link>
                    <div className="d-flex align-items-center flex-wrap">
                      <div className="date"><i className="fa fa-clock-o" /> {data.wordpressPost.date}</div>
                      <div className="views"><i className="fa fa-eye" /> 500</div>
                      <div className="comments meta-last"><i className="fa fa-comment" />12</div>
                    </div>
                  </div>
                  <div className="post-body" dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
                  <div className="post-tags">
                    {data.wordpressPost.tags && data.wordpressPost.tags.map((tag) => (
                      <Link to={`/tags/${tag.slug}`} key={tag.id} className="tag">{tag.name}</Link>
                    ))}
                  </div>
                  <PrevNext prev={prev && prev.node} next={next && next.node} />
                </div>
              </div>
            </Container>

          </main>
          <Sidebar />

        </Row>
      </Container>

    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
      allWordpressWpMedia {
          edges {
              node {
                  source_url 
                  localFile {
                      childImageSharp {
                          sizes {
                              src
                          }
                      }
                  }
              }
          }
      }
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      categories {
          id
          name
      }
      tags {
          id
          name
      }
      author {
        name
        avatar_urls {
            wordpress_48
        }
      }
      featured_media {
          localFile {
              childImageSharp {
                  sizes(maxWidth: 700, maxHeight: 525) {
                      ...GatsbyImageSharpSizes
                  }
              }
          }
      }
    }
  }
`
