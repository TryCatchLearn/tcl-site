import React from "react"
import Layout from "../components/layout"
import PostItem from "../components/post-item"
import {graphql} from 'gatsby'
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import Sidebar from "../components/sidebar"

const TagsTemplate = (props) => {
  const posts = props.data.allWordpressPost.edges
  const {tag} = props.pageContext;
  return (
    <Layout>
        <SEO title="Blog" />
        <Container>
            <Row>
                <main className='posts-listing col-lg-8'>
                    <h3>{`Available posts in ${tag}`}</h3>
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

export default TagsTemplate

export const query = graphql`

    query TagsQuery($tag: String!) {
        allWordpressPost(
            limit: 1000
            sort: { fields: date, order: DESC }
            filter: {  tags: { elemMatch: {name: {eq: $tag}}}}
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