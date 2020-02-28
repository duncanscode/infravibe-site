import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import logo from "../files/logo/10.png"

const Header = () => (
  <header className="bg-black">
    <div className="w-40 pt-6 mx-auto">
      <img src={logo} alt="Logo" />
    </div>

    <div className="pt-3 px-12">
      <ul className="flex justify-center text-center">
        <li className="flex-auto">
          <h1 className="text-gray-600 visited:text-red-600">
            <Link to="/" activeStyle={{ color: "white" }}>
              Home
            </Link>
          </h1>
        </li>
        <li className="flex-auto mx-2">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/music" activeStyle={{ color: "white" }}>
              Music
            </Link>
          </h1>
        </li>
        <li className="flex-auto mx-2">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/shows" activeStyle={{ color: "white" }}>
              Shows
            </Link>
          </h1>
        </li>
        <li className="flex-auto mx-2">
          <h1 className="text-gray-600 hover:text-gray-100">
            <Link to="/about" activeStyle={{ color: "white" }}>
              About
            </Link>
          </h1>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
