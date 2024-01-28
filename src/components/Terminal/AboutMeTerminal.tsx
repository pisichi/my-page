// AboutMeTerminal.js

import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useDarkMode } from '@/context/DarkModeContext'
import './AboutMeTerminal.scss'

const AboutMeTerminal = () => {
  const [showContent, setShowContent] = useState(false)
  const { isDark } = useDarkMode()

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true)
    }, 2500)

    return () => clearTimeout(delay)
  }, [])

  return (
    <div
      className={`rounded-lg p-8 font-mono ${
        isDark ? 'bg-black text-white' : 'bg-gray-100 text-black'
      } `}
    >
      <div
        className={`mb-4 border border-green-500 p-4 ${
          isDark ? 'border-green-500' : 'border-green-600'
        }`}
      >
        <span className={`${isDark ? 'text-green-500' : 'text-green-700'}`}>
          pisichi@personal-website
        </span>
        :
        <span className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}>
          ~
        </span>
        #
        <span className={`${isDark ? 'text-white' : 'text-black'}`}>
          {!showContent && (
            <TypeAnimation speed={1} sequence={[' cat about_me.txt']} />
          )}
          {showContent && ' cat about_me.txt'}
        </span>
        <br />
        {showContent && (
          <>
            <span className={`pl-8`}>
              Hey there! I'm <span className="highlight z-10">Pisitchai</span>
            </span>
            <br />
            <span className={`${isDark ? 'text-green-500' : 'text-green-700'}`}>
              pisichi@personal-website
            </span>
            :
            <span className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}>
              ~
            </span>
            #
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>
              {/* <TypeAnimation sequence={['']} /> */}
            </span>
          </>
        )}
      </div>

      <div className={`text-center`}>
        <p className={`text-gray-500`}>
          pisichi's Personal Website &copy; 2024
        </p>
      </div>
    </div>
  )
}

export default AboutMeTerminal
