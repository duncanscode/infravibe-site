import React from "react"
import Layout from "../components/layout.js"

export default () => (
  <Layout>
    <div className="container mx-auto px-4 py-10">
      <div class="flex flex-col">
        <div class="flex justify-center">
          <h1 class="text-center text-2xl text-black bg-white font-bold px-4">
            Latest Releases
          </h1>
        </div>

        <div class="flex flex-col text-gray-700 bg-gray-400 px-4 py-2 m-2">
          <p class="text-white pb-3">Up To Snow Good Mix</p>
          <iframe
            title="Up To Snow Good"
            width="90%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733708690&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
        <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
      </div>
    </div>
  </Layout>
)
