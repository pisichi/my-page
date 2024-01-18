import React from 'react'

import { useDarkMode } from '@/context/DarkModeContext'

import DarkModeToggleWrapper from '../Toggle/DarkModeToggleWrapper'

interface SideBarProps {
  showSidebar: boolean
}

const SideBar: React.FC<SideBarProps> = ({ showSidebar = true }) => {
  const { isDark } = useDarkMode()

  return (
    <div
      className={`sidebar h-full whitespace-nowrap ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
      } p-4`}
      style={{
        opacity: showSidebar ? 1 : 0,
        transform: showSidebar ? 'translateX(0)' : 'translateX(-150%)',
        transition:
          'transform 400ms cubic-bezier(0.55, 0, 0.1, 0.7), opacity 0.5s ease-in-out'
      }}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500">
          <img
            src="https://placehold.co/400"
            alt="Name"
            className={`h-full w-full rounded-full object-cover transition-transform hover:scale-110 hover:shadow-lg`}
          />
        </div>
        <p
          className={`text-lg font-semibold ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          } mb-4`}
        >
          Name
        </p>
        <p
          className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } mb-4`}
        >
          Title
        </p>
        <DarkModeToggleWrapper />
      </div>
    </div>
  )
}

export default SideBar
