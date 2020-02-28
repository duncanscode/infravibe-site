import React from "react"
import fb from "../files/icons/fb.png"
import twtr from "../files/icons/twitter.png"
import insta from "../files/icons/insta.png"
import youtube from "../files/icons/youtube.png"

const Footer = () => (
  <footer>
    <div className="flex justify-center py-4">
      <a href="https://www.facebook.com/InfraVibe">
        <img className="h-8 mr-4" src={fb} alt="Facebook" />
      </a>
      <a href="https://twitter.com/InfravibeMusic">
        <img className="h-8 mr-6" src={twtr} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/infravibe">
        <img className="h-8 mr-6" src={insta} alt="Instagram" />
      </a>
      <a href="https://www.youtube.com/channel/UCyRPWyfDdVijJn_yoQzpMvg">
        <img className="h-8 mr-6" src={youtube} alt="Youtube" />
      </a>
    </div>
  </footer>
)

export default Footer
