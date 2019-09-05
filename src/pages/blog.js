import React from "react"
import { graphql } from "gatsby"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../css/style.default.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import PostsListing from "../components/posts-listing"
import Sidebar from "../components/sidebar"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <Container>
      <Row>
        <main className='posts-listing col-lg-8'>
          <PostsListing data={data} />
        </main>
        <Sidebar/>
      </Row>
    </Container>
  </Layout>
)

export default BlogPage

export const query = graphql`
    query {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug
                    author {
                        name
                    }
                    date(formatString: "MMMM DD, YYYY")
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
        }
    }
`