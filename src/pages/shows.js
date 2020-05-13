import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const Shows = ({ data }) => {
  //const { edges } = data.allFile

  return (
    <Layout>
      <div>
        <div className="container mx-auto px-4 py-10">
          <div class="flex flex-col">
            <div class="flex justify-center">
              <h1 class="text-center text-2xl text-black bg-white font-bold px-4">
                Upcoming Shows
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div class="max-w-xs md:max-w-md  lg:max-w-lg mx-auto px-4"></div>
      </div>
    </Layout>
  )
}

export default Shows
