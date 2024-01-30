import { useDarkMode } from 'context/DarkModeContext'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <div
      className={`flex h-screen w-screen overflow-x-hidden ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <Outlet />
    </div>
  )
}

export default DefaultLayout
