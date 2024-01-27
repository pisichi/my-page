import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillCard from 'components/Card/SkillCardRedux'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useScreenSize from 'utils/useScreenSize'

import { useDarkMode } from '@/context/DarkModeContext'

import DarkModeToggleWrapper from '../Toggle/DarkModeToggleWrapper'

interface SideBarProps {
  showSidebar: boolean
  closeSidebar: () => void // Add closeSidebar prop function
}

const SideBar: React.FC<SideBarProps> = ({ showSidebar, closeSidebar }) => {
  const { isDark } = useDarkMode()
  const [shouldRender, setShouldRender] = useState(showSidebar)
  const { isMobile } = useScreenSize()

  useEffect(() => {
    if (showSidebar) {
      setShouldRender(true)
    }
  }, [showSidebar])

  const handleTransitionEnd = () => {
    if (!showSidebar && shouldRender) {
      setShouldRender(false)
    }
  }

  const handleCloseButtonClick = () => {
    closeSidebar()
  }

  const introduction = 'Software Engineer'
  const subtleMessages = [
    'Bug Slayer',
    'Fluent Binary Speaker',
    'Semicolons Believer;',
    'Infinity Loop Wayfinder',
    'Console.log Enjoyer',
    'Ctrl+C Ctrl+V Grandmaster',
    'sudo rm -rf /* Survivor'
  ]

  const sequence = [introduction, 3000]

  subtleMessages.forEach((message, index) => {
    sequence.push(message, 3000)
  })

  const skills = [
    {
      category: 'Communication',
      skills: [
        {
          name: 'Thai',
          value: '99'
        },
        {
          name: 'English ',
          value: '85'
        }
      ]
    },
    {
      category: 'Overall',
      skills: [
        {
          name: 'Frontend',
          value: '85'
        },
        {
          name: 'Backend',
          value: '75'
        },
        {
          name: 'DevOps/Source Control',
          value: '60'
        },
        {
          name: 'Database',
          value: '70'
        }
      ]
    }
  ]

  return (
    <div
      className="flex h-full flex-col overflow-x-hidden whitespace-nowrap"
      style={{
        visibility: shouldRender ? 'visible' : 'hidden',
        opacity: showSidebar ? 1 : 0,
        maxHeight: showSidebar ? '100%' : '100%',
        transition: 'opacity 0.5s ease-in-out, max-height 0.35s ease-in-out'
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* 1st Row */}
      <div
        className={`z-10 h-44 p-4 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        <div className="absolute left-4 top-4">
          <DarkModeToggleWrapper />
        </div>
        {isMobile && (
          <div
            className={`absolute right-4 top-4 cursor-pointer ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}
            onClick={handleCloseButtonClick}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        )}
        <div className="flex flex-col items-center">
          <div className="relative mb-2 size-40 overflow-hidden rounded-full border-4 border-green-200">
            <img
              src="https://avatars.githubusercontent.com/u/36178784?v=4"
              alt="Name"
              className={`size-full rounded-full object-cover transition-transform hover:scale-110 hover:shadow-lg`}
            />
          </div>
          <p
            className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } mb-2`}
          >
            Name
          </p>
          <p
            className={`text-sm font-normal ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } mb-4`}
          >
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={2}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>
        </div>
      </div>

      {/* Separator */}
      {/* <div className="border-t border-gray-300"></div> */}

      {/* 2nd Row */}
      <div
        className={`h-20 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {/* Content for the 2nd row */}
      </div>

      {/* Separator */}
      <div className="mx-auto w-5/6 border-t border-gray-300"></div>

      {/* 3rd Row */}
      <div className="custom-scroll-small flex-1 overflow-y-auto pt-5">
        {skills.map((skill, index) => (
          <div className="mb-5 px-4 pt-5" key={index}>
            <SkillCard category={skill.category} skills={skill.skills} />
          </div>
        ))}
      </div>

      {/* 4th Row */}
      <div
        className={`flex h-12 items-center justify-center gap-4 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
        }`}
      >
        {/* Content for the 4th row */}
        <FontAwesomeIcon
          icon={faGithub}
          size="xl"
          className={`transition-transform hover:scale-110 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="xl"
          className={`transition-transform hover:scale-110 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          size="xl"
          className={`transition-transform hover:scale-110 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        />
      </div>
    </div>
  )
}

export default SideBar
