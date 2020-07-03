const path = require("path")
const { create } = require("domain")

// do some research here:

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "StrapiProjects") {
    const slug = node.slug

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

// For using Markdown:

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === "MarkdownRemark") {
//     const slug = path.basename(node.fileAbsolutePath, ".md")

//     createNodeField({
//       node,
//       name: "slug",
//       value: slug,
//     })
//   }
// }

// do some research here:

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // get path to template
  const projectTemplate = path.resolve("./src/templates/project.js")

  // get markdown data

  // For using Markdown:

  // const res = await graphql(`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const res = await graphql(`
    query {
      allStrapiProjects {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // create new pages

  res.data.allStrapiProjects.edges.forEach(edge => {
    return createPage({
      component: projectTemplate,
      path: `/project/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // res.data.allMarkdownRemark.edges.forEach(edge => {
  //   return createPage({
  //     component: projectTemplate,
  //     path: `/project/${edge.node.fields.slug}`,
  //     context: {
  //       slug: edge.node.fields.slug,
  //     },
  //   })
  // })
}
