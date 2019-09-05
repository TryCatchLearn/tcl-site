import React from "react"
import { Container, Row } from "react-bootstrap"
import PostItem from "./post-item"

const PostsListing = ({data}) => {
  return (
      <Container>
        <Row>
          {data.allWordpressPost.edges.map(post => (
            <PostItem key={post.node.id} post={post}/>
          ))}
        </Row>
      </Container>
  )
}

export default PostsListing
