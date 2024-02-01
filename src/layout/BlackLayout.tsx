import { useDarkMode } from 'context/DarkModeContext'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <div
      className={`size-screen flex overflow-x-hidden ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <Outlet />
    </div>
  )
}

export default DefaultLayout
