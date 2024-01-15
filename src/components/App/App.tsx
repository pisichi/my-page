import LandingPage from '../LandingPage/LandingPage'
import React, { useRef, useState } from 'react'
// import useLocalStorage from 'use-local-storage'
// import { DarkModeToggle } from '../Toggle/DarkModeToggle'
import { DarkModeProvider } from 'context/DarkModeContext'
import { useDarkMode } from 'context/DarkModeContext'

import './App.css'
import ParticleBackground from '../ParticleBackground/ParticleBackground'

function App() {
  // const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
  // const [isDark, setIsDark] = useLocalStorage('isDark', preference)

  // return (
  //   <div className="App" data-theme={isDark ? "dark" : "light"}>
  //     <DarkModeToggle
  //       isChecked={isDark}
  //       handleChange={() => setIsDark(!isDark)}
  //     />
  //     <LandingPage />
  //   </div>
  // )
  return (
    <DarkModeProvider>
      <InnerApp />
    </DarkModeProvider>
  )
}

const InnerApp: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <div
      className={`App ${isDark ? 'dark' : 'light'}`}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <ParticleBackground />
      <LandingPage />
    </div>
  )
}

export default App
