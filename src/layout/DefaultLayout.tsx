import './DefaultLayout.scss'

import RightSidebar from 'components/SideBar/RightSidebar'
import SideBar from 'components/SideBar/SideBar'
import { useDarkMode } from 'context/DarkModeContext'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useScreenSize from 'utils/useScreenSize'

import BurgerIcon from '@/components/Icons/Hamburger'
import KebabIcon from '@/components/Icons/Kebab'
import AboutMeTerminal from '@/components/Terminal/AboutMeTerminal'

const DefaultLayout: React.FC = () => {
  const { isDark } = useDarkMode()
  const [showSidebar, setShowSidebar] = useState(false)
  const [showRightSidebar, setShowRightSidebar] = useState(false)
  const [isMainLoaded, setIsMainLoaded] = useState(false)
  const [isSideLoaded, setIsSideLoaded] = useState(false)
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const location = useLocation()
  const currentRoute = location.pathname
  const { isMobile } = useScreenSize()
  const baseDelay = 2200
  const outletWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initialLoadingTimeout = setTimeout(() => {
      setIsInitialLoading(false)
    }, baseDelay)

    const mainLoadedTimeout = setTimeout(() => {
      setIsMainLoaded(true)
    }, baseDelay + 500)

    return () => {
      clearTimeout(initialLoadingTimeout)
      clearTimeout(mainLoadedTimeout)
    }
  }, [])

  useEffect(() => {
    if (!isInitialLoading) {
      setShowSidebar(!isMobile)
    }
  }, [isMobile])

  useEffect(() => {
    const sidebarTimeout = setTimeout(() => {
      setShowSidebar(!isMobile)
      setIsSideLoaded(true)
    }, baseDelay + 1500)

    return () => clearTimeout(sidebarTimeout)
  }, [isMobile])

  useEffect(() => {
    if (outletWrapperRef.current) {
      outletWrapperRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }, [location.pathname])

  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'History', link: '/history' },
    // { id: 3, label: 'Skill', link: '/skill' },
    { id: 4, label: 'Achievement', link: '/achievement' },
    { id: 5, label: 'Project', link: '/project' }
  ]

  const toggleSidebar = () => setShowSidebar(!showSidebar)
  const toggleRightSidebar = () => setShowRightSidebar(!showRightSidebar)
  const closeRightSidebar = () => setShowRightSidebar(false)
  const closeSidebar = () => setShowSidebar(false)

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
      className={`page flex h-screen w-screen overflow-x-hidden ${
        isDark ? 'bg-black text-white' : 'bg-gray-50 text-black'
      }`}
    >
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-20 flex w-screen items-center justify-center"
          >
            <AboutMeTerminal />
          </motion.div>
        )}
      </AnimatePresence>

      {!isInitialLoading && (
        <>
          <motion.div
            key="sidebar"
            initial={{ opacity: 0, width: '0rem' }}
            animate={{
              opacity: 1,
              width: showSidebar ? (isMobile ? '100vw' : '15rem') : '0rem'
            }}
            className={`transition-width z-10 w-60 flex-none ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] },
              width: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
            }}
          >
            <SideBar closeSidebar={closeSidebar} showSidebar={showSidebar} />
          </motion.div>

          <AnimatePresence>
            {isMainLoaded && (
              <motion.div
                initial={{ opacity: 0, transform: 'translateX(0rem)' }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`z-0 flex h-full flex-1 flex-col overflow-hidden bg-gradient-to-t ${
                  isDark ? 'from-black to-gray-800' : 'from-gray-50 to-slate-50'
                } overflow-x-hidden via-transparent`}
                transition={{
                  opacity: { duration: 0.8, ease: [0.68, -0.55, 0.27, 1.55] },
                  transform: { duration: 0.5, ease: 'easeInOut' }
                }}
              >
                <div className="pointer-events-none absolute top-0 z-50 mb-[-15px] flex w-full justify-between">
                  <div
                    onClick={toggleSidebar}
                    className={`pointer-events-auto h-full cursor-pointer pl-4 pt-4 ${
                      showSidebar ? 'scale-110 opacity-0 sm:opacity-100' : ''
                    } transition-transform duration-300`}
                  >
                    <KebabIcon
                      color={`${isDark ? 'white' : 'black'}`}
                      toggled={showSidebar}
                    />
                  </div>

                  <div
                    onClick={toggleRightSidebar}
                    className={`pointer-events-auto ml-auto h-full  cursor-pointer p-4 transition-opacity duration-1000 md:hidden lg:hidden ${
                      showRightSidebar ? 'opacity-0' : 'opacity-100'
                    }${
                      showRightSidebar ? 'scale-110' : ''
                    } transition-transform duration-300 ease-in-out`}
                  >
                    <BurgerIcon
                      color={`${isDark ? 'white' : 'black'}`}
                      toggled={showRightSidebar}
                    />
                  </div>
                </div>

                <div
                  className={`custom-scroll min-w-[50vw] flex-1 overflow-x-hidden sm:mr-[6rem]  ${
                    !isSideLoaded ? 'overflow-y-hidden' : 'overflow-y-auto'
                  }`}
                  style={{
                    transform: showRightSidebar
                      ? 'translateX(-10rem)'
                      : 'translateX(0rem)',
                    transition: 'transform 500ms ease-in-out'
                  }}
                >
                  <div className="mx-auto w-screen px-2 text-xs sm:w-auto sm:min-w-0 sm:px-3 sm:text-base md:px-7 md:text-lg lg:max-w-screen-2xl">
                    <div className="pt-12" ref={outletWrapperRef}>
                      <Outlet />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <RightSidebar
            showRightSidebar={showRightSidebar}
            onClose={closeRightSidebar}
            menuItems={menuItems}
          />
          {!isMobile && (
            <AnimatePresence>
              {isSideLoaded && (
                <motion.div
                  initial={{ opacity: 0, width: '0rem' }}
                  animate={{ opacity: 1, width: '5rem' }}
                  exit={{ opacity: 0, width: '0rem' }}
                  className={`fixed inset-y-0 right-4 z-50 ml-auto flex-none rounded-lg sm:my-2 ${
                    isDark ? 'bg-gray-800' : 'bg-slate-100'
                  } ${showRightSidebar ? 'shadow-none' : 'shadow-xl'}`}
                  transition={{
                    opacity: {
                      duration: 0.4,
                      ease: [0.68, -0.55, 0.27, 1.55]
                    },
                    width: { duration: 0.5, ease: 'easeInOut' }
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

                  <div className="border-b-2 border-gray-400 pt-4"></div>
                  <div
                    className={`relative translate-y-16 rotate-90 select-none overflow-visible whitespace-nowrap text-xl transition-opacity duration-500 ${
                      isDark
                        ? 'text-green-200 hover:text-white'
                        : 'text-green-700 hover:text-black'
                    } ${showRightSidebar ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {formatRoute(currentRoute)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </>
      )}
    </div>
  )
}

export default DefaultLayout
