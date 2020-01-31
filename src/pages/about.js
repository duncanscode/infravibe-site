import React from "react"
import Layout from "../components/layout.js"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const AboutPage = props => (
  <Layout>
    <div className="m-8 py-2">
      <Img fluid={props.data.temp.childImageSharp.fluid} />
      Infravibe is a Canadian electronic Music Producer/DJ born and raised in
      Kelowna, BC. Expect everything from chill vibes all the way up to quality
      headbanging dubstep, neuro, and halftime. His mixes are jam packed with
      the most futuristic and current sounds that aim to push boundaries and
      expand your mind in the electronic scene.
    </div>
  </Layout>
)

export default AboutPage

export const myQuery = graphql`
  query {
    temp: file(relativePath: { eq: "temp.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
