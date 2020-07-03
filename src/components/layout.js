import React from "react"
import PropTypes from "prop-types"
import "../styles/index.scss"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = props => {
  const dataFetched = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header /> */}
      <div>
        <main>{props.children}</main>
        <footer>Footer</footer>
        {/* test: {dataFetched.site.siteMetadata.title}  */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
