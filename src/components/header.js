import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Header = () => (
  <header className="bg-black">
    <div className="w-40 pt-6 mx-auto">
      <Logo />
    </div>

    <div className="pt-3 px-12">
      <ul className="flex justify-center text-center">
        <li className="flex-auto">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/">Home</Link>
          </h1>
        </li>
        <li className="flex-auto mx-2">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/music">Music</Link>
          </h1>
        </li>
        <li className="flex-auto mx-2">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/about">About</Link>
          </h1>
        </li>
      </ul>
    </div>
  </header>
)

export default Header

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "10.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
