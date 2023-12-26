// src/components/LandingPage.js
import React from 'react'
import ParticleBackground from './ParticleBackground'

const LandingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
        <ParticleBackground />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to My Page!!</h1>
        <p className="mb-8 text-lg">
          If I'm not lazy, there should be some thing here soon!
        </p>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          DON'T CLICK
        </button>
      </div>
    </div>
  )
}

export default LandingPage
