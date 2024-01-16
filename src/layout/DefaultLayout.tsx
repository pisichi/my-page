import './DefaultLayout.css'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'

import RightSidebar from 'components/SideBar/RightSidebar'
import SideBar from 'components/SideBar/SideBar'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()
  const [showSidebar, setShowSidebar] = useState(true)
  const [showRightSidebar, setShowRightSidebar] = useState(false)

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Contact', link: '/contact' }
  ]

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const toggleRightSidebar = () => {
    setShowRightSidebar(!showRightSidebar)
  }

  const closeRightSidebar = () => {
    setShowRightSidebar(false)
  }

  return (
    <div
      className={`flex h-screen w-screen ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      {/* Left Sidebar */}
      <div
        className={`transition-width w-60 flex-none bg-gray-800 p-6 ${
          showSidebar ? 'shadow-lg' : 'shadow-none'
        }`}
        style={{
          width: showSidebar ? '15rem' : '0px',
          transition: 'width 0.3s ease-in-out',
          padding: showSidebar ? '10px' : '0'
        }}
      >
        <SideBar showSidebar={showSidebar} />
      </div>

      {/* Main Content */}

      <div className="z-0 flex flex-1 flex-col overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={toggleSidebar}
            className="button-icon"
            aria-label={showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
          >
            <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
          </button>

          <button
            onClick={toggleRightSidebar}
            className="button-icon"
            aria-label={
              showRightSidebar ? 'Close Right Sidebar' : 'Open Right Sidebar'
            }
          >
            <FontAwesomeIcon icon={showRightSidebar ? faTimes : faBars} />
          </button>
        </div>

        <div className="custom-scroll flex-1 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>

      <RightSidebar
        showRightSidebar={showRightSidebar}
        onClose={closeRightSidebar}
        menuItems={menuItems}
      />
    </div>
  )
}

export default DefaultLayout
