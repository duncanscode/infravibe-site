import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AboutPage = props => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-10">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <h1 class="text-center text-2xl text-black bg-white font-bold px-4">
                {data.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-10 py-4">
        <div class="max-w-xs sm:max-w-sm md:max-w-md  lg:max-w-3xl mx-auto px-4">
          <Img fluid={data.aboutimage.childImageSharp.fluid} />
        </div>
        <div className="text-left">{data.description}</div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query aboutQuery {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "about" } }
    ) {
      edges {
        node {
          absolutePath
          childMarkdownRemark {
            frontmatter {
              title
              description
              aboutimage {
                childImageSharp {
                  fluid(maxHeight: 1000) {
                    ...GatsbyImageSharpFluid
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
