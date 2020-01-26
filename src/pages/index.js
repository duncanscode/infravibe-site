import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <div className="mx-8 py-2">
      <div className="mx-2 my-4 p-1">
        <button className="bg-transparent border-2 border-white font-mono text-sm hover:bg-gray-200 hover:text-black mx-10 py-2">
          SYNTHETIC AMBIENCE EP OUT NOW
        </button>
      </div>

      <div className="max-h-full">
        <a href="https://smarturl.it/SyntheticAmbienceEP">
          <Img fluid={props.data.album.childImageSharp.fluid} />
        </a>
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
