import React, { useRef, useState } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useDarkMode } from 'context/DarkModeContext'
import SideBar from '../SideBar/SideBar'

const LandingPage = () => {
  const parallax = useRef<IParallax>(null!)
  const { isDark } = useDarkMode()

  return (
    <div className="flex min-h-screen min-h-screen bg-gray-900 text-white">
      <div className="fixed left-0 top-0 h-full w-1/5 bg-gray-800 p-6">
        <SideBar />
      </div>

      <div className="w-4/5">
        test
      </div>
    </div>
  )
}

export default LandingPage
