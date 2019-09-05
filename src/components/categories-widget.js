import React from "react"
import {StaticQuery, graphql, Link} from "gatsby";

const CategoriesWidget = () => {
  return (
    <StaticQuery
      query={graphql`
            query {
              allWordpressCategory {
                edges {
                  node {
                    count
                    name
                    slug
                  }
                }
              }
            }  
        `}
      render={data => (
        <div className="widget categories">
          <header>
            <h3 className="h6">Categories</h3>
          </header>
          {data && data.allWordpressCategory && data.allWordpressCategory.edges.map((category) => (
            <div key={category.node.slug} className="item d-flex justify-content-between"><Link to={`/category/${category.node.slug}`}>{category.node.name}</Link><span>{category.node.count}</span></div>
          ))}
        </div>
      )}
    />

  )
}

export default CategoriesWidget
