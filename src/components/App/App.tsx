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
import Resume from '@/pages/Resume/Resume'
import Skill from '@/pages/Skill/Skill'
import SplashPage from '@/pages/SplashPage/SplashPage'

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
  console.log(
    "If you see 'Failed to load resource: the server responded with a status of 404', don't worry!"
  )
  console.log(
    'This is due to routing being handled on the client side because of GitHub page limitation.'
  )
  console.log(
    "To resolve this, I've implemented a workaround based on this solution (https://stackoverflow.com/a/69744845)"
  )
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
            {/* <Route path="skill" element={<Skill />} /> */}
            <Route path="achievement" element={<Achievement />} />
            <Route path="history" element={<History />} />
            <Route path="project" element={<Project />} />
          </Route>
          <Route path="cv" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
