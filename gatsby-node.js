const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions;
  const BlogPostTemplate = path.resolve('./src/templates/blog-post.js');
  const PageTemplate = path.resolve('./src/templates/page.js');
  const TagsTemplate = path.resolve('./src/templates/tags-template.js');
  const CategoriesTemplate = path.resolve('./src/templates/category-template.js');
  const CoursePageTemplate = path.resolve('./src/templates/course-page-template.js');

  return graphql(`
    {
      allWordpressPost(sort:{order:DESC, fields:date}limit:1000) {
        edges {
          node {
            slug
            wordpress_id
            date
            title
          }
        }
      }
      allWordpressPage(filter:{acf:{is_course:{eq:true}}}) {
        edges {
          node {
            acf {
              is_course
              course_id
              link_with_coupon
            }
            slug
            wordpress_id
          }
        }
      }
      allWordpressTag {
        edges {
          node {
            slug
            name
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // All tags


    const BlogPosts = result.data.allWordpressPost.edges;
    BlogPosts.forEach((post, index) => {
      createPage({
        path: `/post/${post.node.slug}`,
        component: BlogPostTemplate,
        context: {
          id: post.node.wordpress_id,
          slug: post.node.slug,
          prev: index === 0 ? null : BlogPosts[index - 1],
          next: index === result.length - 1 ? null : BlogPosts[index + 1]
        }
      })
    })

    const CoursePages = result.data.allWordpressPage.edges;
    CoursePages.forEach(page => {
      createPage({
        path: `/course/${page.node.slug}`,
        component: CoursePageTemplate,
        context: {
          id: page.node.wordpress_id,
          course_id: page.node.acf.course_id,
          link_with_coupon: page.node.acf.link_with_coupon
        }
      })
    })

    const Tags = result.data.allWordpressTag.edges;
    Tags.forEach(tag => {
      createPage({
        path: `/tags/${tag.node.slug}`,
        component: TagsTemplate,
        context: {
          tag: tag.node.name
        }
      })
    })

    const Categories = result.data.allWordpressCategory.edges;
    Categories.forEach(category => {
      createPage({
        path: `/category/${category.node.slug}`,
        component: CategoriesTemplate,
        context: {
          category: category.node.name
        }
      })
    })

    const Pages = result.data.allWordpressPage.edges;
    Pages.forEach(page => {
      createPage({
        path: `/${page.node.slug}`,
        component: PageTemplate,
        context: {
          id: page.node.wordpress_id
        }
      })
    })
  })
}
