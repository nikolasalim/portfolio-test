import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//       }
//       html
//     }
//   }
// `

export const queryTest = graphql`
  query($slug: String!) {
    strapiProjects(slug: { eq: $slug }) {
      name
      description
    }
  }
`

function Project(props) {
  return (
    <div>
      <Layout>
        {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div> */}
        <h1>{props.data.strapiProjects.name}</h1>
        <div>{props.data.strapiProjects.description}</div>
      </Layout>
    </div>
  )
}

export default Project
