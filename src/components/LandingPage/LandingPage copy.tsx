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
        {/* <Parallax
          pages={4}
          style={{ width: '100%', height: '100%', marginLeft: '-50%' }}
        >
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
          </ParallaxLayer>

          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="text-center">
              <h1
                className={`mb-4 text-4xl font-bold ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Welcome to My Page!!
              </h1>
              <div className="mb-4">
                <img
                  src=""
                  alt="Name"
                  className="mx-auto mb-2 h-32 w-32 transform rounded-full transition duration-300 hover:scale-110 hover:shadow-lg"
                />
              </div>
              <p
                className={`mb-8 text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                If I'm not lazy, there should be something here soon!
              </p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="w-full text-center">
              <h2 className="mb-4 text-3xl font-bold">My Experience</h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold">My Contracts</h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div className="text-center">
              <h2
                className={`mb-4 text-3xl font-bold ${
                  isDark ? 'text-white' : 'text-black'
                }`}
              >
                Contracts
              </h2>
              <div className={`${isDark ? 'text-white' : 'text-black'}`}>
                <p>Email: </p>
                <p>GitHub: </p>
                <p>LinkedIn: </p>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax> */}
      </div>
    </div>
  )
}

export default LandingPage
