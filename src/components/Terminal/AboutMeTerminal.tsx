// AboutMeTerminal.js

import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

const AboutMeTerminal = () => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true)
    }, 2000)

    return () => clearTimeout(delay)
  }, [])

  return (
    <div className="bg-black p-8 font-mono text-white">
      <div className={`mb-4 border border-green-500 p-4`}>
        <span className="text-green-500">pisichiRoot@personal-website:~$ </span>
        <span className="text-white">
          {!showContent && <TypeAnimation sequence={['cat about_me.txt']} />}
          {showContent && 'cat about_me.txt'}
        </span>
        <br />
        {showContent && (
          <>
            <span className="pl-8">Hey there! I'm Pisitchai</span>
            <br />
            <span className="text-green-500">
              pisichiRoot@personal-website:~$
            </span>
            <span className="text-white">
              <TypeAnimation sequence={['']} />{' '}
            </span>
          </>
        )}
      </div>

      <div className="text-center">
        <p className="text-gray-500">
          pisichiRoot's Personal Website &copy; 2024
        </p>
      </div>
    </div>
  )
}

export default AboutMeTerminal
