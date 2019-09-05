import React from "react"
import LatestPostsWidget from "./latest-posts-widget"
import CategoriesWidget from "./categories-widget"
import TagsWidget from "./tags-widget"

const Sidebar = () => {
  return (
    <aside className='col-lg-4'>
      <LatestPostsWidget />
      <CategoriesWidget/>
      <TagsWidget/>
    </aside>
  )
}

export default Sidebar
