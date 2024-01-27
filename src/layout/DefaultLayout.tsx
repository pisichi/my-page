import './DefaultLayout.scss'
import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Outlet, useLocation } from 'react-router-dom'
import useScreenSize from 'utils/useScreenSize'
import SideBar from 'components/SideBar/SideBar'
import RightSidebar from 'components/SideBar/RightSidebar'
import BurgerIcon from '@/components/Icons/Hamburger'
import { useDarkMode } from 'context/DarkModeContext'
import DarkModeToggleWrapper from 'components/Toggle/DarkModeToggleWrapper'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()
  const [showSidebar, setShowSidebar] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const [isMainLoaded, setIsMainLoaded] = useState(false)
  const [isRightLoaded, setIsRightLoaded] = useState(false)
  const location = useLocation()
  const currentRoute = location.pathname
  const { isMobile } = useScreenSize()

  useEffect(() => {
    setShowSidebar(true)

    const timeout2 = setTimeout(() => {
      setIsMainLoaded(true)
    }, 200)

    return () => {
      clearTimeout(timeout2)
    }
  }, [])

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
    console.log('toggle')
    setShowRightSidebar(!showRightSidebar)
  }

  const closeRightSidebar = () => {
    setShowRightSidebar(false)
  }

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  const getTranslateX = () => {
    if (isMobile) {
      if (showSidebar) {
        return 'translateX(10rem)'
      } else {
        return 'translateX(0rem)'
      }
    } else {
      if (showRightSidebar) {
        return 'translateX(-10rem)'
      } else {
        return 'translateX(0rem)'
      }
    }
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
      className={`flex h-screen w-screen overflow-x-hidden ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <div
        className={`transition-width z-10 w-60 flex-none ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        }`}
        style={{
          width: showSidebar ? (isMobile ? '100vw' : '15rem') : '0rem',
          transition: 'width 700ms cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <SideBar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      </div>

      <CSSTransition
        in={isMainLoaded}
        timeout={800}
        classNames="fade"
        unmountOnExit
      >
        <div
          className={`z-0 flex h-full flex-1 flex-col overflow-hidden bg-gradient-to-t ${
            isDark ? 'from-black to-gray-800' : 'from-gray-50 to-slate-50'
          } overflow-x-hidden via-transparent`}
        >
          <div className="sticky top-0 z-50 flex items-center justify-between mb-[-15px]">
            <div
              onClick={toggleSidebar}
              aria-label={showSidebar ? 'Close Sidebar' : 'Open Sidebar'}
              className={`h-full cursor-pointer p-4 ${
                showSidebar ? 'scale-110' : ''
              } transition-transform duration-300`}
            >
              <BurgerIcon
                color={`${isDark ? 'white' : 'black'}`}
                toggled={showSidebar}
              />
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
              <BurgerIcon
                color={`${isDark ? 'white' : 'black'}`}
                toggled={showRightSidebar}
              />
            </div>
          </div>

          <div
            className={`custom-scroll min-w-[50vw] flex-1 overflow-y-auto overflow-x-hidden`}
            style={{
              transform: showRightSidebar
                ? 'translateX(-10rem)'
                : 'translateX(0rem)',
              transition: 'transform 500ms ease-in-out'
            }}
          >
            <div className="mx-auto px-1 sm:px-3 md:px-7 lg:max-w-screen-2xl">
              <Outlet />
            </div>
          </div>
        </div>
      </CSSTransition>

      {!isMobile && (
        <CSSTransition
          in={isMainLoaded}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div
            className={`z-10 ml-auto flex-none ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            } ${showRightSidebar ? 'shadow-lg' : 'shadow-none'}`}
            style={{
              width: isMobile ? '5rem' : '5rem',
              transition: 'width 500ms ease-in-out'
            }}
          >
            <div
              className={`relative translate-y-16 rotate-90 select-none overflow-visible whitespace-nowrap text-xl transition-opacity duration-1000 ${
                isDark
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-black'
              } ${showRightSidebar ? 'opacity-0' : 'opacity-100'}`}
            >
              {formatRoute(currentRoute)}
            </div>
          </div>
        </CSSTransition>
      )}

      <RightSidebar
        showRightSidebar={showRightSidebar}
        onClose={closeRightSidebar}
        menuItems={menuItems}
      />
    </div>
  )
}

export default DefaultLayout
