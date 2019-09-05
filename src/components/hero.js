import React, {Fragment} from "react"
import hero from '../images/tcl-bg.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <Fragment>
      <section
          style={{backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center center'}}
               className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hero
