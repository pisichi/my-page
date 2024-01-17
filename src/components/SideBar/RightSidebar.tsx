import './SideBar.css'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

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
          className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Right sidebar */}
      <div
        className={`fixed inset-y-0 right-0 ${
          isDark ? 'bg-gray-800' : 'bg-gray-200'
        } z-50 p-6 shadow-lg transition-width ase-in-out duration-500 hover:shadow-xl ${
          showRightSidebar ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: showRightSidebar ? '15rem' : '5rem',
          borderRadius: '8px'
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
              <a
                href={menuItem.link}
                className={`transition-all duration-200 ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {menuItem.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RightSidebar
