import React from 'react'
import { useDarkMode } from 'context/DarkModeContext'
import { DarkModeSwitch } from 'react-toggle-dark-mode'

const DarkModeToggleWrapper: React.FC = () => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDark}
      onChange={toggleDarkMode}
      size={30}
    />
  )
}

export default DarkModeToggleWrapper
