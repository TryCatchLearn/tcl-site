import React from "react"
import Layout from "../components/layout"
import PostItem from "../components/post-item"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import Sidebar from "../components/sidebar"

const CategoryTemplate = (props) => {
  const posts = props.data.allWordpressPost.edges
  const {category} = props.pageContext;
  return (
    <Layout>
      <SEO title="Blog" />
      <Container>
        <Row>
          <main className='posts-listing col-lg-8'>
            <h3>{`Available posts in ${category}`}</h3>
            <Container>
              <Row>
                {posts.map((post) => (
                  <PostItem key={post.node.id} post={post}/>
                ))}
              </Row>
            </Container>
          </main>
          <Sidebar/>
        </Row>
      </Container>
    </Layout>
  )
}

export default CategoryTemplate

export const query = graphql`

    query CategoryQuery($category: String!) {
        allWordpressPost(
            limit: 1000
            sort: { fields: date, order: DESC }
            filter: {  categories: { elemMatch: {name: {eq: $category}}}}
        ) {
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