import './SideBar.scss'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useScreenSize from 'utils/useScreenSize'

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
  const { isMobile } = useScreenSize()
  const location = useLocation()

  const controls = useAnimation()

  const getWidth = () => {
    if (showRightSidebar) {
      return '15rem'
    } else if (isMobile) {
      return '0rem'
    } else {
      return '5rem'
    }
  }

  useEffect(() => {
    if (showRightSidebar) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [showRightSidebar])

  return (
    <AnimatePresence>
      {showRightSidebar && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-20 bg-black opacity-50 transition-opacity duration-700"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
        />
      )}

      <motion.div
        id="sideBar"
        className={`fixed inset-y-0 right-0 rounded-lg sm:right-4 sm:my-2 ${
          isDark ? 'bg-gray-800' : 'bg-slate-100'
        } z-20 shadow-lg hover:shadow-xl`}
        style={{
          width: getWidth()
        }}
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: showRightSidebar ? 1 : 0, width: getWidth() }}
        transition={{
          opacity: { duration: 0.3, ease: 'easeInOut' },
          width: { duration: 0.5, ease: 'easeInOut' }
        }}
      >
        <div className="mb-4 flex items-center justify-between border-b-2 border-gray-400 p-6 pb-4">
          <h2
            className={`text-xl font-semibold transition-all duration-300`}
            style={{ fontSize: '1.5rem' }}
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
        <motion.div
          className="px-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: '100%' }
          }}
          transition={{ duration: 0.5 }}
        >
          {menuItems.map((menuItem, index) => (
            <motion.div
              key={menuItem.id}
              className={`relative z-50 mb-4`}
              initial="hidden"
              animate={controls}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: '40%' }
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.125,
                ease: 'easeInOut'
              }}
            >
              <Link
                onClick={onClose}
                to={`${menuItem.link}`}
                className={`${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-black'
                } ${
                  location.pathname === menuItem.link
                    ? isDark
                      ? 'font-extrabold text-green-200 hover:text-white'
                      : 'font-extrabold text-green-700 hover:text-black'
                    : ''
                }`}
              >
                {menuItem.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default RightSidebar
