import './DefaultLayout.scss'

import RightSidebar from 'components/SideBar/RightSidebar'
import SideBar from 'components/SideBar/SideBar'
import DarkModeToggleWrapper from 'components/Toggle/DarkModeToggleWrapper'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import useScreenSize from 'utils/useScreenSize'

import BurgerIcon from '@/components/Icons/Hamburger'
import Tooltip from '@/components/Tooltip/Tooltip'
import AboutMeTerminal from '@/components/Terminal/AboutMeTerminal'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()
  const [showSidebar, setShowSidebar] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const [isMainLoaded, setIsMainLoaded] = useState(false)
  const [isRightLoaded, setIsRightLoaded] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const location = useLocation()
  const currentRoute = location.pathname
  const { isMobile } = useScreenSize()

  useEffect(() => {
    // Simulating an asynchronous operation (e.g., fetching initial data)
    const initialLoadingTimeout = setTimeout(() => {
      setIsInitialLoading(false)
    }, 7000) // Adjust the timeout as needed

    return () => {
      clearTimeout(initialLoadingTimeout)
    }
  }, [])

  useEffect(() => {
    if (!isInitialLoading) {
      setShowSidebar(!isMobile)
    }
  }, [isMobile])

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setIsMainLoaded(true)
    }, 7500)

    return () => {
      clearTimeout(timeout2)
    }
  }, [])

  // useEffect(() => {
  //   const timeout3 = setTimeout(() => {
  //     setShowSidebar(!isMobile)
  //   }, 8000)

  //   return () => {
  //     clearTimeout(timeout3)
  //   }
  // }, [])

  const menuItems = [
    { id: 1, label: 'Main', link: '/' },
    { id: 2, label: 'History', link: '/history' },
    { id: 3, label: 'Skill', link: '/skill' },
    { id: 4, label: 'Achievement', link: '/achievement' },
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

  const closeSidebar = () => {
    setShowSidebar(false)
  }

  function formatRoute(currentRoute: string): React.ReactElement[] {
    return currentRoute
      .split('/')
      .slice(1)
      .map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 ? '/' : ''}
          {part ? part.charAt(0).toUpperCase() + part.slice(1) : 'Main'}
        </React.Fragment>
      ))
  }

  return (
    <div
      className={`flex h-screen w-screen overflow-x-hidden ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <CSSTransition
        in={isInitialLoading}
        timeout={500} // Adjust the timeout as needed
        classNames="fade"
        unmountOnExit
      >
        <div className="z-20 flex w-screen items-center justify-center">
          <AboutMeTerminal />
        </div>
      </CSSTransition>

      {!isInitialLoading && (
        <>
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
              <div className="sticky top-0 mb-[-15px] flex items-center justify-between">
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
                  className={`h-full cursor-pointer p-4 transition-opacity duration-1000 md:hidden lg:hidden ${
                    showRightSidebar ? 'opacity-0' : 'opacity-100'
                  }${
                    showRightSidebar ? 'scale-110' : ''
                  } transition-transform duration-300 ease-in-out`}
                  aria-label={
                    showRightSidebar
                      ? 'Close Right Sidebar'
                      : 'Open Right Sidebar'
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
                <div className="mx-auto px-1 text-xs sm:px-3 sm:text-base md:px-7 md:text-lg lg:max-w-screen-2xl">
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
              <>
                <RightSidebar
                  showRightSidebar={showRightSidebar}
                  onClose={closeRightSidebar}
                  menuItems={menuItems}
                />
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
                    className="mt-3 cursor-pointer pl-5"
                    onClick={toggleRightSidebar}
                  >
                    <BurgerIcon
                      color={`${isDark ? 'white' : 'black'}`}
                      toggled={showRightSidebar}
                    />
                  </div>
                  {/* <div className="mt-5 cursor-pointer pl-6">
              <Tooltip text="Toggle Dark Mode">
                <DarkModeToggleWrapper />
              </Tooltip>
            </div> */}
                  <div className="border-b-2 border-gray-400 pt-4"></div>
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
              </>
            </CSSTransition>
          )}
        </>
      )}
    </div>
  )
}

export default DefaultLayout
