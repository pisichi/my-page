import './App.scss'

import Modal from 'components/Modal/Modal'
import { DarkModeProvider } from 'context/DarkModeContext'
import { useDarkMode } from 'context/DarkModeContext'
import { ModalProvider } from 'context/ModalContext'
import LandingPage from 'pages/Home/Home'
import Project from 'pages/Project/Project'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DefaultLayout from '@/layout/DefaultLayout'
import Achievement from '@/pages/Achievement/Achievement'
import History from '@/pages/History/History'
import Skill from '@/pages/Skill/Skill'
import SplashPage from '@/pages/SplashPage/SplashPage' // Import the modified SplashPage component

import ParticleBackground from '../ParticleBackground/ParticleBackground'

function App() {
  return (
    <ModalProvider>
      <DarkModeProvider>
        <InnerApp />
        <Modal />
      </DarkModeProvider>
    </ModalProvider>
  )
}

const InnerApp: React.FC = () => {
  const { isDark } = useDarkMode()
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false)
  //   }, 500)

  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return <SplashPage />
  // }

  return (
    <div
      className={`App ${isDark ? 'dark' : 'light'}`}
      data-theme={isDark ? 'dark' : 'light'}
    >
      <ParticleBackground />
      <BrowserRouter basename="/my-page">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="skill" element={<Skill />} />
            <Route path="achievement" element={<Achievement />} />
            <Route path="history" element={<History />} />
            <Route path="project" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
