import React, { useState } from 'react'
import { useDarkMode } from 'context/DarkModeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import SideBar from '../SideBar/SideBar'
import RightSidebar from '../SideBar/RightSidebar'
import ContentCard from '../Card/ContentCard'
import SkillCard from '../Card/SkillCard'
import './LandingPage.css'

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

      <div className="flex flex-1 flex-col overflow-hidden z-0">
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
          <ContentCard
            title="Card Title"
            rows={5}
            content={<div>Custom Content Here</div>}
          />

          {/* 4 Rows with 4 Columns Each */}
          {[...Array(4)].map((_, rowIndex) => (
            <div key={rowIndex} className="mb-4 flex">
              {[...Array(4)].map((_, colIndex) => (
                <div
                  key={colIndex}
                  className="flex-1 border border-gray-300 p-2"
                >
                  <SkillCard
                    category={'Test'}
                    skills={[
                      {
                        name: 'css',
                        value: '90'
                      },
                      {
                        name: 'css',
                        value: '100'
                      },
                      {
                        name: 'css',
                        value: '90'
                      },
                      {
                        name: 'scss',
                        value: '70'
                      }
                    ]}
                  />
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

      <RightSidebar
        showRightSidebar={showRightSidebar}
        onClose={closeRightSidebar}
        menuItems={menuItems}
      />
    </div>
  )
}

export default LandingPage
