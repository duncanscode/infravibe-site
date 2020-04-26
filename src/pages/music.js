import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout.js"
import Img from "gatsby-image"

const Music = ({ data }) => {
  const { edges } = data.allFile

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-10">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <h1 class="text-center text-2xl text-black bg-white font-bold px-4">
                Latest Releases
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div class="max-w-xs md:max-w-md  lg:max-w-lg mx-auto px-4">
          {edges.slice(0, 3).map(edge => {
            const { frontmatter } = edge.node.childMarkdownRemark
            return (
              <div class="pb-6">
                <a href={frontmatter.link}>
                  <Img fluid={frontmatter.art.childImageSharp.fluid} />
                </a>
                <div class="flex items-center justify-between text-white pb-3 font-bold">
                  {frontmatter.title}
                  <a href={frontmatter.link}>
                    <div class="ml-auto italic font-hairline text-sm">
                      LISTEN
                    </div>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MusicQuery {
    allFile(filter: { relativeDirectory: { eq: "music" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              link
              art {
                childImageSharp {
                  fluid(maxHeight: 500) {
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

export default Music
