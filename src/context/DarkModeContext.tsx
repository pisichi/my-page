import React, { createContext, ReactNode, useContext, useState } from 'react'

interface DarkModeContextProps {
  isDark: boolean
  toggleDarkMode: () => void
}

interface DarkModeProviderProps {
  children: ReactNode
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
)

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children
}) => {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useState(preference)

  const toggleDarkMode = () => {
    setIsDark((prevIsDark) => !prevIsDark)
  }

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}
