import React from "react"
import { graphql, Link } from "gatsby"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../css/style.default.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import IMG from "gatsby-image"

const IndexPage = ({data}) => {
    console.log(data);
    return (
      <Layout>
          <SEO title="Home" />
          <Hero/>
          <section id="intro" style={{paddingBottom: 10}}>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">

                          <p className="text-big">Dedicated to provide <strong>high quality, practical</strong> software development training courses with a strong focus on
                              <strong> learning by doing</strong>. This is not a place that offers hundreds of training courses, but that is due to a focus on <strong> quality over quantity</strong></p>
                          <p className="text-big">Courses available:</p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="featured-posts no-padding-top">
              <div className="container">
                  {data.allWordpressPage.edges.map((page) => (
                    <Link to={`/course/${page.node.slug}`} key={page.node.slug}>
                        <div className="row d-flex align-items-stretch">
                            <div className="text col-lg-7">
                                <div className="text-inner d-flex align-items-center" style={{paddingTop: 5}}>
                                    <div className="content">
                                        <header className="post-header">
                                                <div className="category">
                                                  {page.node.acf.course_categories.map((category, i) => (
                                                    <span key={i} style={{marginRight: 10}}>{category} </span>
                                                  ))}

                                                </div>
                                                <h2 className="h4">{page.node.title}</h2>
                                        </header>
                                        <div dangerouslySetInnerHTML={{__html: page.node.excerpt}}/>
                                        <footer className="post-footer d-flex align-items-center">
                                            <span className="author d-flex align-items-center flex-wrap">
                                                <div className="avatar"><img src={page.node.author.avatar_urls.wordpress_48} alt="..." className="img-fluid"/></div>
                                                <div className="title"><span>Instructor: Neil Cummings</span></div>
                                            </span>
                                        </footer>
                                    </div>
                                </div>
                            </div>
                            <div className="image col-lg-5" style={{minHeight: '344px'}}>
                                <IMG
                                  sizes={page.node.featured_media.localFile.childImageSharp.fluid}
                                  alt={page.node.title}
                                />
                            </div>
                        </div>
                    </Link>

                  ))}
              </div>

          </section>
      </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query {
        allWordpressPage(filter: {acf: {is_course: {eq: true}}}) {
            edges {
                node {
                    acf {
                        is_course
                        course_categories
                    }
                    slug
                    title
                    excerpt
                    author {
                        avatar_urls {
                            wordpress_48
                        }
                        name
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
        }
    }
`