import React from "react"
import LatestPostsWidgetFooter from "./latest-posts-widget-footer"

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="logo">
              <h6 className="text-white">TryCatchLearn</h6>
            </div>
            <div className="contact-details">
              <ul className="social-menu">
                <li className="list-inline-item"><a href="https://web.facebook.com/trycatchlearning"><i className="fa fa-facebook"/></a></li>
                <li className="list-inline-item"><a href="https://www.youtube.com/channel/UC9xNkqQ5IVylX1Sf-yWFgOQ"><i className="fa fa-youtube"/></a></li>
                <li className="list-inline-item"><a href="https://twitter.com/try_catch_learn"><i className="fa fa-twitter"/></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
              <LatestPostsWidgetFooter/>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2019. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-right">
              <p>Created by Neil Cummings
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
