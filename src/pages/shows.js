import React from "react"
import Layout from "../components/layout.js"
import Show from "../components/show.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const shows = props => {
  return (
    <Layout>
      test
      <h1> there should be an image here</h1>
      test
      <div className="pl-5 pt-10">Latest Release</div>
      <Show />
    </Layout>
  )
}

export default shows
