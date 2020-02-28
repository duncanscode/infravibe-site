import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const IndexPage = props => (
  <Layout>
    <div className="mx-8 py-2">
      <div className="flex items-center mx-2 my-4 p-1">
        <button className="bg-transparent border-2 border-white font-hairline text-sm hover:bg-gray-200 hover:text-black hover:font-normal mx-auto py-4 w-64">
          SYNTHETIC AMBIENCE EP OUT NOW
        </button>
      </div>

      <div className="mx-auto">
        <a href="https://smarturl.it/SyntheticAmbienceEP">
          <Img fluid={props.data.album.childImageSharp.fluid} />
        </a>
      </div>

      <h1 className="text-center my-8">
        Unique, futuristic sound design that is bass driven with high energy and
        infectious vibes.
      </h1>
    </div>
  </Layout>
)

export default IndexPage

export const myQuery = graphql`
  query {
    album: file(relativePath: { eq: "5.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
