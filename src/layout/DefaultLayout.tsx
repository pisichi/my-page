import './DefaultLayout.scss'
import RightSidebar from 'components/SideBar/RightSidebar'
import SideBar from 'components/SideBar/SideBar'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Twirl as HamburgerLeft } from 'hamburger-react'
import { Squash as HamburgerRight } from 'hamburger-react'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()
  const [showSidebar, setShowSidebar] = useState(true)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const location = useLocation()
  const currentRoute = location.pathname

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'History', link: '/history' },
    { id: 3, label: 'Skill', link: '/skill' },
    { id: 4, label: 'Tournament', link: '/tournament' },
    { id: 5, label: 'Project', link: '/project' }
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

  function formatRoute(currentRoute: string): React.ReactElement[] {
    return currentRoute
      .split('/')
      .slice(1)
      .map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 ? '/' : ''}
          {part ? part.charAt(0).toUpperCase() + part.slice(1) : 'Home'}
        </React.Fragment>
      ))
  }

  return (
    <div
      className={`flex h-screen w-screen ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      {/* Left Sidebar */}
      <div
        className={`transition-width z-10 w-60 flex-none ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        } ${showSidebar ? 'shadow-lg' : 'shadow-none'}`}
        style={{
          width: showSidebar ? '15rem' : '0px',
          transition: 'width 700ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <SideBar showSidebar={showSidebar} />
      </div>

      {/* Main Content */}

      <div
        className={`z-0 flex h-full flex-1 flex-col overflow-hidden bg-gradient-to-t ${
          isDark ? 'from-black to-gray-800' : 'from-gray-50 to-slate-50'
        } via-transparent`}
      >
        <div className="flex items-center justify-between">
          <div
            onClick={toggleSidebar}
            aria-label={showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
            className={`h-full cursor-pointer p-4 ${
              showSidebar ? 'scale-110' : ''
            } transition-transform duration-300`}
          >
            <HamburgerLeft direction="right" size={20} toggled={showSidebar} />
          </div>

          <div
            onClick={toggleRightSidebar}
            className={`h-full cursor-pointer p-4 transition-opacity duration-1000 ${
              showRightSidebar ? 'opacity-0' : 'opacity-100'
            }${
              showRightSidebar ? 'scale-110' : ''
            } transition-transform duration-300 ease-in-out`}
            aria-label={
              showRightSidebar ? 'Close Right Sidebar' : 'Open Right Sidebar'
            }
          >
            <HamburgerRight size={20} toggled={showRightSidebar} />
          </div>
        </div>

        <div
          className={`custom-scroll flex-1 overflow-y-auto`}
          style={{
            transform: showRightSidebar
              ? 'translateX(-10rem)'
              : 'translateX(0rem)',
            transition: 'transform 500ms ease-in-out'
          }}
        >
          <div className="px-7">
            <Outlet />
          </div>
        </div>
      </div>
      <div
        className={`z-10 flex-none ${isDark ? 'bg-gray-800' : 'bg-gray-100'} ${
          showRightSidebar ? 'shadow-lg' : 'shadow-none'
        }`}
        style={{
          width: showRightSidebar ? '5rem' : '5rem',
          padding: showRightSidebar ? '10px' : '0',
          transition: 'width 500ms ease-in-out'
        }}
      >
        <div
          className={`translate-y-16 rotate-90 select-none overflow-visible whitespace-nowrap transition-opacity duration-1000 ${
            isDark
              ? 'text-gray-400 hover:text-white'
              : 'text-gray-600 hover:text-black'
          } ${showRightSidebar ? 'opacity-0' : 'opacity-100'}`}
        >
          {formatRoute(currentRoute)}
        </div>

        <RightSidebar
          showRightSidebar={showRightSidebar}
          onClose={closeRightSidebar}
          menuItems={menuItems}
        />
      </div>
    </div>
  )
}

export default DefaultLayout
