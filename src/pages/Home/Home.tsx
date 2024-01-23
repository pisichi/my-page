import './Home.scss'

import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import Devicon from 'components/Icons/Devicon'
import { NuxtjsOriginal } from 'devicons-react'

import React from 'react'

const Home: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <div className="">
      {/* Big Banner - First Row */}
      <div className="mb-4">
        <p className="text-2xl font-bold">Big Banner</p>
        {/* Your Big Banner Content Goes Here */}
        <div className="border border-gray-300 p-4">
          About Me Hi, I am Pisitchai
        </div>
      </div>

      {/* 1 Row */}
      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          About Me A bit about me I'm a self-taught web developer and Mobile App
          Developer with experience in designing new features from ideation to
          production, implementation of wireframes and design flows into high
          performance software applications. I take into consideration the user
          experience while writing reusable and efficient code. I passionately
          combine good design, technology, and innovation in all my projects,
          which I like to accompany from the first idea to release.Currently,
          I'm focused on the backend development.
          <NuxtjsOriginal size="80" />
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Technologies and Tools Using a combination of cutting-edge
          technologies and reliable open-source software I build user-focused,
          performant apps and websites for smartphones, tablets, and desktops.
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Back-end My main focus. I love algorithm & software design. RESTful &
          secure back-end with authorizations and database validations
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Front-end Responsive & animated layouts with performance optimization
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Best Practice Clean code, following style guides, naming conventions &
          pattern principles
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Self-Taught Survivor I've learnt to google, read error messages &
          understand documentations
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Team Buddy Github team workflow using feature branches & pull
          requests/code reviews. MVP & agile methodology for projects
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Learning & Sharing My purposes at heart. My best coding experiences
          are the ones I have with other people. I strongly believe in team
          synergie
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">Project</div>
      </div>
    </div>
  )
}

export default Home
