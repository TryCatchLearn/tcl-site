import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import logo from '../images/tcl-logo-crop.png';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "CourseMenu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      <header className={"header"}>
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              <img src={logo} alt="logo" style={{maxHeight: 50}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link
                  as={Link}
                  to={`/blog`}
                >
                  Blog
                </Nav.Link>
                <NavDropdown title="Courses" id="basic-nav-dropdown">
                  {data.wordpressWpApiMenusMenusItems.items.map(item => (
                    <NavDropdown.Item as={Link} to={`/course/${item.object_slug}`} key={item.object_slug}>{item.title}</NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )}
  />
)

export default Header
