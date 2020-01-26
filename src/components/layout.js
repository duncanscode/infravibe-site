/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "typeface-orbitron"
import fb from "../images/icons/fb.png"
import twtr from "../images/icons/twitter.png"
import insta from "../images/icons/insta.png"
import youtube from "../images/icons/youtube.png"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <footer>
          <div className="flex justify-center pb-4">
            <img className="h-8 mr-4" src={fb} alt="Facebook" />
            <img className="h-8 mr-6" src={twtr} alt="Twitter" />
            <img className="h-8 mr-6" src={insta} alt="Instagram" />
            <img className="h-8 mr-6" src={youtube} alt="Instagram" />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
