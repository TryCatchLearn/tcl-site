import React from "react"
import {Link} from 'gatsby';

const PrevNext = (props) => {
  const {prev, next} = props;
  return (
    <div className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row">
      {prev &&
      <Link to={`/post/${prev.slug}`} className="prev-post text-left d-flex align-items-center">
      <div className="icon prev"><i className="fa fa-angle-left" /></div>
      <div className="text"><strong className="text-primary">Previous Post </strong>
        <h6>{prev.title}</h6>
      </div>
      </Link>}
      {next &&
      <Link to={`/post/${next.slug}`} className="next-post text-right d-flex align-items-center justify-content-end">
      <div className="text">
        <strong className="text-primary">Next Post </strong>
        <h6>{next.title}</h6>
      </div>
      <div className="icon next"><i className="fa fa-angle-right"/></div>
      </Link>}
    </div>
  )
}

export default PrevNext
