import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  // For using Markdown:
  //
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           id
  //           frontmatter {
  //             title
  //           }
  //           html
  //           excerpt
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    {
      allStrapiProjects {
        edges {
          node {
            name
            description
            slug
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="intro-box">
        <p>
          Hey, I'm Niko and I love creating things for a living. I've created as
          a digital marketer, art director, brand strategist, copywriter, and
          sushi apprentice. Now I'm creating as a front-end developer. If you
          want to collab, hit me up.
        </p>
      </div>

      {/* <div className="about-box">
        <div className="box">
          <p className="text">&#9758; NIKOLA SALIM</p>
          <br />
          <br />
          <div>
            <p className="sub-text">Jr. Front-End Developer</p>
            <br />
            <p className="sub-text">Brazilian / German</p>
            <br />
            <p className="sub-text">Based in Amsterdam</p> <br />
          </div>

          <br />
          <div className="text">
            <a
              className="link"
              href="mailto:nikolasalim@gmail.com"
              target="_blank"
            >
              &#8594;EMAIL
            </a>
            <br />
            <a
              className="link"
              href="https://www.linkedin.com/in/nikolasalim/"
              target="_blank"
            >
              &#8594;LINKEDIN
            </a>
            <br />
            <a
              className="link"
              href="https://github.com/nikolasalim"
              target="_blank"
            >
              &#8594;GITHUB
            </a>
            <br />
            <a
              className="link"
              href="https://www.codecademy.com/profiles/nikolasalim"
              target="_blank"
            >
              &#8594;CODECADEMY
            </a>
          </div>
        </div>

        <div className="box-divider">
          <div className="divider"></div>
        </div>
        <div className="box">
          <div className="skill-set">
            <div className="skill-box">
              <p className="tech-text">TECH&#8594;</p>
              <div className="tech-item">
                <p className="tech-subtext">HTML &#38; CSS</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Javascript</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">React</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Redux</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Node.js</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">REST APIs</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">PostgreSQL</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Docker</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Sequelize</p>
              </div>
              <div className="tech-item">
                <p className="tech-subtext">Git &#38; Github</p>
              </div>
            </div>
            <div className="skill-box">
              <p className="design-text">DESIGN&#8594;</p>
              <div className="design-item">
                <p className="design-subtext">Photoshop</p>
              </div>
              <div className="design-item">
                <p className="design-subtext">Illustrator</p>
              </div>
              <div className="design-item">
                <p className="design-subtext">InDesign</p>
              </div>
            </div>
            <div className="skill-box">
              <p className="lang-text">LANG&#8594;</p>
              <div className="lang-item">
                <p className="lang-subext">English</p>
              </div>
              <div className="lang-item">
                <p className="lang-subext">Portuguese</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="projects-box">
        <ul>
          {data.allStrapiProjects.edges.map(project => (
            <li key={project.node.id}>
              <Link to={`project/${project.node.slug}`}>
                {project.node.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* // For using Markdown: <ul>
          {data.allMarkdownRemark.edges.map(project => (
            <li key={project.node.id}>
              <Link to={`project/${project.node.fields.slug}`}>
                {project.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul> */}
      </div>
    </Layout>
  )
}

export default IndexPage
