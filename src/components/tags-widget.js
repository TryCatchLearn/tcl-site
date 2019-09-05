import React from "react"
import {StaticQuery, Link, graphql} from "gatsby";

const TagsWidget = () => {
  return (
    <StaticQuery
      query={graphql`
          query {
            allWordpressTag {
              edges {
                node {
                    slug
                    name
                }
              }
            }
          }
      `}
      render={data => {
        console.log(data)
        return (
          <div className="widget tags">
            <header>
              <h3 className="h6">Tags</h3>
            </header>
            <ul className="list-inline">
              {data && data.allWordpressTag && data.allWordpressTag.edges && data.allWordpressTag.edges.map((tag) => (
                <li key={tag.node.slug} className="list-inline-item">
                  <Link to={`/tags/${tag.node.slug}`} className="tag">{tag.node.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )
      } }
    />
  )
}

export default TagsWidget
