import React, { useState } from 'react'
import { useDarkMode } from 'context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar/SideBar'
import RightSidebar from '../SideBar/RightSidebar'

const LandingPage: React.FC = () => {
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
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'
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
      <div className="flex flex-1 flex-col overflow-hidden">
        <button
          onClick={toggleSidebar}
          type="button"
          className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon icon={showSidebar ? faTimes : faBars} />
        </button>

        <button
          onClick={toggleRightSidebar}
          type="button"
          className="inline-flex items-center rounded-full border border-blue-700 p-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          <FontAwesomeIcon icon={showRightSidebar ? faTimes : faBars} />
        </button>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex-1 overflow-y-auto p-4">
            {/* Big Banner - First Row */}
            <div className="mb-4">
              <p className="text-2xl font-bold">Big Banner</p>
              {/* Your Big Banner Content Goes Here */}
              <div className="border border-gray-300 p-4">
                Placeholder Content
              </div>
            </div>

            {/* 1 Row with 4 Columns */}
            <div className="mb-4 flex">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex-1 border border-gray-300 p-2">
                  Placeholder Content
                </div>
              ))}
            </div>

            {/* 1 Row with 1 Card, 5 Rows in the Card */}
            <div className="mb-4">
              <div className="border border-gray-300 p-4">
                <p className="text-lg font-bold">Card Title</p>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="mb-2">
                    Placeholder Content
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Rows with 4 Columns Each */}
            {[...Array(4)].map((_, rowIndex) => (
              <div key={rowIndex} className="mb-4 flex">
                {[...Array(4)].map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className="flex-1 border border-gray-300 p-2"
                  >
                    Placeholder Content
                  </div>
                ))}
              </div>
            ))}

            {/* 1 Row */}
            <div className="flex">
              <div className="flex-1 border border-gray-300 p-2">
                Placeholder Content
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightSidebar
        showRightSidebar={showRightSidebar}
        onClose={toggleRightSidebar}
        menuItems={menuItems}
      />
    </div>
  )
}

export default LandingPage
