import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row } from "react-bootstrap"
import { graphql } from "gatsby"
import LatestPostsWidget from "../components/latest-posts-widget"
import CoursePageSidebar from "../components/course-page-sidebar"

const CoursePageTemplate = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <SEO
        title={data.wordpressPage.title}
        description={data.wordpressPage.excerpt}
      />
      <section
        style={{backgroundColor: '#505763'}}
        className="hero">
        <div className="container" style={{padding: '80px 20px'}}>
          <div className="row">
            <div className="col-lg-6">
              <h1>{data.wordpressPage.title}</h1>
            </div>
          </div>
        </div>
      </section>
      <Container style={{marginTop: 40}}>
        <Row>
          <div className='col-lg-8'>
            <h1>{data.wordpressPage.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.wordpressPage.content}} />
          </div>
          <div className='col-lg-4'>
            <CoursePageSidebar data={data}/>
          </div>
        </Row>

      </Container>

    </Layout>
  )
}

export default CoursePageTemplate

export const query = graphql`
    query($id: Int!) {
        wordpressPage(wordpress_id: {eq: $id}) {
            title
            excerpt
            content
            acf {
                course_id
                demo_site_url
                link_with_coupon
            }
            featured_media {
                localFile {
                    childImageSharp {
                        fluid(maxWidth: 500, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`