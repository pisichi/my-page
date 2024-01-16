import './App.css'

import { DarkModeProvider } from 'context/DarkModeContext'
import { useDarkMode } from 'context/DarkModeContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from '../../pages/Home/Home'
import ParticleBackground from '../ParticleBackground/ParticleBackground'
import DefaultLayout from '@/layout/DefaultLayout'

function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="my-page/" element={<DefaultLayout />}>
            <Route index element={<LandingPage />} />
            {/* <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
