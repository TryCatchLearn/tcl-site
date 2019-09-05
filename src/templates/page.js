import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

const PageTemplate = ({data}) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPage.title}
        description={data.wordpressPage.excerpt}
      />
      <Container style={{marginTop: 40}}>
        <h1>{data.wordpressPage.title}</h1>
        <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
      </Container>

    </Layout>
  )
}

export default PageTemplate

export const query = graphql`
    query($id: Int!) {
        wordpressPage(wordpress_id: {eq: $id}) {
            title
            excerpt
            content
        }
    }
`