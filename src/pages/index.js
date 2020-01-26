import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <div className="bg-yellow-600 my-10">
      <div className="bg-red-600 my-10">
        <button className="bg-transparent border-2 border-white font-mono text-sm hover:bg-gray-200 hover:text-black">
          SYNTHETIC AMBIENCE EP OUT NOW
        </button>
      </div>
      <div className="max-h-md">
        <Img fluid={props.data.album.childImageSharp.fluid} />
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const myQuery = graphql`
  query {
    album: file(relativePath: { eq: "5.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
