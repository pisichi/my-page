import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

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
  const storedDarkMode = localStorage.getItem('darkMode')
  const [isDark, setIsDark] = useState(
    storedDarkMode ? JSON.parse(storedDarkMode) : true
  )

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark))
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prevIsDark: any) => !prevIsDark)
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
