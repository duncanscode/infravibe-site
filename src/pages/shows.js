import React from "react"
import Layout from "../components/layout.js"
import Show from "../components/show.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const shows = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <h1> there should be an image here</h1>
      <Img fixed={data.image.childImageSharp.fixed} />
      <div className="pl-5 pt-10">Latest Release</div>
      <Show />
    </Layout>
  )
}

export default shows

export const query = graphql`
  query MyQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image {
                childImageSharp {
                  fixed(height: 500, width: 500) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
