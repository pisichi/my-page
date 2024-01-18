import './SideBar.scss'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface MenuItem {
  id: number
  label: string
  link: string
}

interface RightSidebarProps {
  showRightSidebar: boolean
  onClose: () => void
  menuItems: MenuItem[]
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  showRightSidebar,
  onClose,
  menuItems
}) => {
  const { isDark } = useDarkMode()

  return (
    <>
      {/* Backdrop overlay */}
      {showRightSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-700"
          onClick={onClose}
        ></div>
      )}

      {/* Right sidebar */}
      <div
        className={`fixed inset-y-0 right-0 ${
          isDark ? 'bg-gray-800' : 'bg-gray-200'
        } z-50 p-6 shadow-lg hover:shadow-xl`}
        style={{
          width: showRightSidebar ? '15rem' : '5rem',
          opacity: showRightSidebar ? '1' : '0',
          transition:
            'opacity 50ms ease-in, width 500ms ease-in-out, opacity 300ms ease-out'
        }}
      >
        <div className="mb-4 flex items-center justify-between border-b border-gray-400 pb-4">
          <h2
            className={`text-xl font-semibold transition-all duration-300`}
            style={{ fontSize: '1.5rem' }} // Adjust font size
          >
            Menu
          </h2>
          <button
            onClick={onClose}
            className={`text-${isDark ? 'white' : 'black'} hover:text-${
              isDark ? 'gray-300' : 'gray-700'
            } transition-all duration-300 focus:outline-none`}
            aria-label="Close Sidebar"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <div>
          {menuItems.map((menuItem, index) => (
            <div
              key={menuItem.id}
              className={`mb-4 transition-all duration-700 ease-in-out ${
                showRightSidebar ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link
                onClick={onClose}
                to={`/my-page${menuItem.link}`}
                className={`transition-all duration-200 ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-black'
                } ${location.pathname === menuItem.link ? 'font-bold' : ''}`}
              >
                {menuItem.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RightSidebar
