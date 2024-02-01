import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillCard from 'components/Card/SkillCardRedux'
import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import useScreenSize from 'utils/useScreenSize'
import { useNavigate } from 'react-router-dom'

import { useDarkMode } from '@/context/DarkModeContext'

import DarkModeToggleWrapper from '../Toggle/DarkModeToggleWrapper'
import Tooltip from '../Tooltip/Tooltip'
import AnimatedButton from '../Button/AnimatedButton'

interface SideBarProps {
  showSidebar: boolean
  closeSidebar: () => void
}

const handleMailClick = () => {
  const receiverEmail = 'test@test.test'
  const subject = 'Subject of the email'
  const body = 'Body of the email'

  const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`

  window.location.href = mailtoLink
}

const SideBar: React.FC<SideBarProps> = ({ showSidebar, closeSidebar }) => {
  const { isDark } = useDarkMode()
  const [shouldRender, setShouldRender] = useState(showSidebar)
  const { isMobile } = useScreenSize()

  const navigate = useNavigate()

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

  const handleCvButtonClick = () => {
    window.open('/my-page/cv', '_blank')
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
        maxHeight: '100%',
        transition: 'opacity 0.5s ease-in-out, max-height 0.35s ease-in-out'
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className={`z-10 h-56 p-4`}>
        <div className="absolute left-4 top-4">
          <Tooltip text="Toggle Dark Mode">
            <DarkModeToggleWrapper />
          </Tooltip>
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
          <div
            className={`mb-2 mt-7 size-40 overflow-hidden rounded-full border-4 ${
              isDark ? 'border-green-300' : 'border-green-700'
            }`}
          >
            <Tooltip text="It's-a me!">
              <img
                src="https://avatars.githubusercontent.com/u/36178784?v=4"
                alt="Name"
                className={`size-full rounded-full object-cover transition-transform hover:scale-110 hover:shadow-lg`}
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className={`flex h-20 flex-col items-center`}>
        <p
          className={`text-2xl font-bold ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Win Pisitchai
        </p>
        <p
          className={`mb-1 text-sm 
               text-gray-500`}
        >
          Pisitchai Siriratanachaikul
        </p>
        <p
          className={`mb-2 text-sm
            ${isDark ? 'text-green-300' : 'text-green-600'}`}
        >
          Bangkok, Thailand
        </p>
      </div>

      <div className="mx-auto mt-1 h-[2px] w-5/6 bg-gray-300"></div>

      <div
        className={`custom-scroll-small flex-1 overflow-y-auto overflow-x-hidden pt-5`}
      >
        <div
          className={`flex justify-center text-center text-sm font-normal ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } mb-4 px-3`}
        >
          <div className="w-[90%] min-w-[16em] text-wrap ">
            Over
            <span
              className={`font-bold 
               text-gray-500 ${isDark ? 'text-green-300' : 'text-green-600'}`}
            >
              {' '}
              2 years+{' '}
            </span>
            of experience in designing and developing Full Stack web
            application.
          </div>
        </div>

        <div
          className={`grid-col-1 mx-auto mt-10 grid w-[50%] justify-center gap-4 ${
            isDark ? 'text-white' : ' text-gray-800'
          }`}
        >
          <div
            className={`align-center flex cursor-pointer transition-transform hover:scale-105 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}
          >
            <FontAwesomeIcon className="mr-2" icon={faGithub} size="lg" />
            <span
              className={`text-sm font-bold
               text-gray-500 ${isDark ? 'text-green-300' : 'text-green-600'}`}
            >
              @pisichi
            </span>
          </div>
          <div
            className={`align-center flex cursor-pointer transition-transform hover:scale-105 ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}
          >
            <FontAwesomeIcon className="mr-2" icon={faLinkedin} size="lg" />
            <span
              className={`text-sm font-bold
               text-gray-500 ${isDark ? 'text-green-300' : 'text-green-600'}`}
            >
              pisitchaisiri
            </span>
          </div>
          <div className="align-center pointer flex cursor-pointer transition-transform hover:scale-105">
            <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-2" />
            <span
              className={`text-sm font-bold
               text-gray-500 ${isDark ? 'text-green-300' : 'text-green-600'}`}
            >
              pisitchai.sirirat
            </span>
          </div>

          <div className="align-center mt-3 flex justify-center">
            <AnimatedButton
              className={`rounded-lg border-2 !bg-transparent px-3 py-1 ${
                isDark
                  ? 'border-green-300 !text-green-300'
                  : 'border-green-700 !text-green-700'
              }`}
              onClick={handleCvButtonClick}
              content={
                <div>
                  <span> CV </span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              }
            />
          </div>
        </div>

        {/* {skills.map((skill, index) => (
          <div className="mb-5 px-4 pt-5" key={index}>
            <SkillCard category={skill.category} skills={skill.skills} />
          </div>
        ))} */}
      </div>

      <div
        className={`flex h-10 items-center justify-center gap-4 ${
          isDark ? 'bg-gray-900 text-white' : 'bg-slate-200 text-gray-800'
        }`}
      >
        <p className={`text-xs text-gray-500`}>© 2024 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default SideBar
