// AboutMeTerminal.js

import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { useDarkMode } from '@/context/DarkModeContext'
import './AboutMeTerminal.scss'

interface TerminalPromptProps {
  isDark: boolean
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({ isDark }) => (
  <>
    <span className={`${isDark ? 'text-green-500' : 'text-green-700'}`}>
      <span className="sm:hidden">pis@site</span>
      <span className="hidden sm:inline">pisichi@personal-site</span>
    </span>
    :<span className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}>~</span>#
  </>
)

const AboutMeTerminal = () => {
  const { isDark } = useDarkMode()

  const [showFirstCommand, setFirstCommand] = useState(false)
  const [showFirstResult, setShowFirstResult] = useState(false)
  const [showSecondCommand, setShowSecondCommand] = useState(false)
  const [showSecondResult, setShowSecondResult] = useState(false)
  const gridTemplate =
    'grid-cols-[120px,20px,60px,60px,60px,120px,auto] text-sm'

  const initialDelay = 300

  useEffect(() => {
    const initDelay = setTimeout(() => {
      setFirstCommand(true)
    }, initialDelay)

    const firstDelay = setTimeout(() => {
      setShowFirstResult(true)
    }, initialDelay + 300)

    const secondDelay = setTimeout(() => {
      setShowSecondCommand(true)
    }, initialDelay + 500)

    // const thirdDelay = setTimeout(() => {
    //   setShowSecondResult(true)
    // }, 6500)

    return () => {
      clearTimeout(initDelay)
      clearTimeout(firstDelay)
      clearTimeout(secondDelay)
      // clearTimeout(thirdDelay)
    }
  }, [])

  return (
    <div
      className={`rounded-lg p-8 font-mono ${
        isDark ? 'bg-black text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Terminal Output Container */}
      <div
        className={`mb-4 overflow-hidden border border-green-500 p-4 md:w-[80vw] md:max-w-[800px] ${
          isDark ? 'border-green-500' : 'border-green-600'
        }`}
      >
        {/* Terminal Prompt Line */}
        <TerminalPrompt isDark={isDark} />

        {/* Initial Command Animation */}
        {!showFirstCommand && <TypeAnimation speed={1} sequence={[' ']} />}
        {showFirstCommand && (
          <span className={`${isDark ? 'text-white' : 'text-black'}`}>
            {!showFirstResult && <TypeAnimation speed={1} sequence={[' ls']} />}
            {showFirstResult && ' ls'}
          </span>
        )}

        <br />

        {/* ls Command Output */}
        {showFirstResult && (
          <>
            <div className={`hidden text-gray-500 md:grid lg:grid`}>
              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">Total 5</span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">drwxr-xr-x</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">4096</span>
                <span className="pr-2">Jan 28 12:34</span>
                <span
                  className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}
                >
                  Home
                </span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">drwxr-xr-x</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">4096</span>
                <span className="pr-2">Jan 28 12:35</span>
                <span
                  className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}
                >
                  Skill
                </span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">drwxr-xr-x</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">4096</span>
                <span className="pr-2">Jan 28 12:35</span>
                <span
                  className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}
                >
                  History
                </span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">drwxr-xr-x</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">4096</span>
                <span className="pr-2">Jan 28 12:36</span>
                <span
                  className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}
                >
                  Achievement
                </span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">drwxr-xr-x</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">4096</span>
                <span className="pr-2">Jan 28 12:37</span>
                <span
                  className={`${isDark ? 'text-blue-600' : 'text-blue-700'}`}
                >
                  Project
                </span>
              </div>

              <div className={`grid items-center ${gridTemplate}`}>
                <span className="pr-2">-rw-r--r--</span>
                <span className="pr-2">1</span>
                <span className="pr-2">root</span>
                <span className="pr-2">root</span>
                <span className="pr-2 text-right">512</span>
                <span className="pr-2">Jan 28 12:38</span>
                <span
                  className={`${isDark ? 'text-green-500' : 'text-green-700'}`}
                >
                  cv.md
                </span>
              </div>
            </div>
            <div
              className={`${
                isDark ? 'text-blue-500' : 'text-blue-700'
              } md:hidden lg:hidden grid grid-cols-3 gap-4`}
            >
              <div>Home</div>
              <div>History</div>
              <div>Achievement</div>
              <div>Project</div>
              <div
                className={`${isDark ? 'text-green-500' : 'text-green-700'}`}
              >
                cv.md
              </div>
            </div>
            <br />

            {/* Terminal Prompt Line */}
            <TerminalPrompt isDark={isDark} />

            {/* cat Command Animation */}
            <span className={`${isDark ? 'text-white' : 'text-black'}`}>
              {!showSecondCommand && (
                <TypeAnimation speed={1} sequence={[' ']} />
              )}

              {!showSecondResult && showSecondCommand && (
                <TypeAnimation speed={1} sequence={[' cd ./Home']} />
              )}
              {showSecondResult && ' cd ./Home'}
            </span>
          </>
        )}

        <br />
        {/* cat Command Output */}
        {showSecondResult && (
          <>
            <span className={`pl-8`}>
              Hey there! I'm{' '}
              <span className="highlight z-10">Win Pisitchai</span>, a tech
              enthusiast with a focus on software development. Experienced in
              web development, I'm passionate about exploring diverse areas to
              broaden my skills. Eager to excel and apply my expertise in
              various fields.
            </span>
            <br />
            <br />

            <TerminalPrompt isDark={isDark} />
          </>
        )}
      </div>

      {/* Footer */}
      <div className={`text-center`}>
        <p className={`text-gray-500`}>
          pisichi's Personal Website &copy; 2024
        </p>
      </div>
    </div>
  )
}

export default AboutMeTerminal
