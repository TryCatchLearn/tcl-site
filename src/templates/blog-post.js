import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IMG from "gatsby-image"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <h1>{data.wordpressPost.title}</h1>
      <p>
        Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
      </p>
      <IMG
        sizes={data.wordpressPost.acf.feat_image.localFile.childImageSharp.sizes}
        alt={data.wordpressPost.title}
        style={{ maxHeight: 450 }}
      />
      <div
        style={{ marginTop: 20 }}
        dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
      />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
      acf {
        feat_image {
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
`
