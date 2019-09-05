import React from "react"
import IMG from "gatsby-image"

const styles = {
  border: '3px solid black',
  padding: '10px'
}

const CoursePageSidebar = ({data}) => {
  console.log(data);
  return (
    <div className="post" style={styles}>
          {data.wordpressPage.featured_media && data.wordpressPage.featured_media.localFile &&
            <IMG
              sizes={data.wordpressPage.featured_media.localFile.childImageSharp.fluid}
              alt={data.wordpressPage.title}
            />}
      <div className="post-details">
        <br/>
        <a href={data.wordpressPage.acf.link_with_coupon} target='_blank' className='btn btn-block btn-info'>Buy this course on Udemy for $9.99</a>
        <a href={data.wordpressPage.acf.demo_site_url} target='_blank' className='btn btn-block btn-warning'>View demo of project site</a>
      </div>
    </div>
  )
}

export default CoursePageSidebar


