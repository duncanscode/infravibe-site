import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className={"mx-auto max-w-xs"}></div>
    <ul className={"flex justify-center flex-wrap p-5"}>
      <li class="mr-6">
        <h1 class="text-red-500 hover:text-blue-800">
          <Link to="/">Home</Link>
        </h1>
      </li>
      <li class="mr-6">
        <h1 class="text-red-500 hover:text-blue-800">
          <Link to="/about">Music</Link>
        </h1>
      </li>
      <li class="mr-6">
        <h1 class="text-red-500 hover:text-blue-800">
          <Link to="/about">Social</Link>
        </h1>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
