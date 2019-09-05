import React from "react"
import { Col } from "react-bootstrap"
import {Link} from 'gatsby';
import Img from "gatsby-image"

const PostItem = ({post}) => {
  return (
    <Col xl={6} className='post'>
        <div className='post-thumbnail'>
          {post.node.featured_media && post.node.featured_media.localFile &&
          <Img
            sizes={post.node.featured_media.localFile.childImageSharp.sizes}
            alt={post.node.title}
            // style={{ width: "25%", marginRight: 20 }}
            className='img-fluid'
          />}
        </div>
        <div className='post-details'>
          <div className="post-meta d-flex justify-content-between">
            <div className="date meta-last">{post.node.date}</div>
            <div className="category"><Link to={`/category/${post.node.category}`} href="#">{post.node.category}</Link></div>
          </div>
          <Link to={`/post/${post.node.slug}`}>
            <h3 className="h4">{post.node.title}</h3>
          </Link>
          <div className='text-muted' dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          <footer className="post-footer d-flex align-items-center">
            <Link to={`/author/name`} className="author d-flex align-items-center flex-wrap">
            <div className="avatar">
              <img src="https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/avatar-3.jpg" alt="..." className="img-fluid" />
            </div>
            <div className="title"><span>{post.node.author.name}</span></div>
          </Link>
            <div className="date"><i className="fa fa-clock-o" /> 2 months ago</div>
            <div className="comments meta-last"><i className="fa fa-comment" />12</div>
          </footer>
        </div>
    </Col>
  )
}

export default PostItem
