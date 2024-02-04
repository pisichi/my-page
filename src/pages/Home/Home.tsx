import {
  faBrain,
  faForwardFast,
  faLaptopCode,
  faPersonRunning,
  faTerminal,
  faUsersBetweenLines
} from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDarkMode } from 'context/DarkModeContext'
import {
  DockerPlain,
  JavaPlain,
  JavascriptPlain,
  LaravelOriginal,
  MysqlOriginal,
  NodejsOriginalWordmark,
  NuxtjsOriginal,
  PhpPlain,
  PythonPlain,
  ReactOriginal,
  TypescriptPlain,
  VuejsOriginal
} from 'devicons-react'
import React from 'react'
import { FaArrowAltCircleDown, FaArrowUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import useScreenSize from 'utils/useScreenSize'

import AnimatedButton from '@/components/Button/AnimatedButton'
import ArticleCard from '@/components/Card/ArticleCard'
import TechIcon from '@/components/Icons/TechIcon'
import Reveal from '@/components/Utils/Reveal'
import achievementsData from '@/data/achievementsData'
import projectsData from '@/data/projectsData'

const Home: React.FC = () => {
  const { isDark } = useDarkMode()
  const { isMobile } = useScreenSize()
  const iconSize = isMobile ? 40 : 60
  const iconColor = isDark ? '#86efac' : '#308250'
  const achievements = achievementsData.slice(0, 3)
  const projects = projectsData().slice(0, 3)
  const navigate = useNavigate()

  const introduction = 'Full Stack Developer'
  const subtleMessages = [
    'Software Engineer',
    'Ransomware Survivor',
    'Fluent Binary Speaker',
    'Bug Slayer',
    'Ctrl+C Ctrl+V Grandmaster'
  ]

  const sequence = [
    introduction,
    3000,
    ...subtleMessages.map((message) => [message, 3000]).flat()
  ]

  const icons = [
    { component: <VuejsOriginal size={iconSize} />, key: 'Vue.js' },
    { component: <NuxtjsOriginal size={iconSize} />, key: 'Nuxt.js' },
    { component: <ReactOriginal size={iconSize} />, key: 'React' },
    { component: <NodejsOriginalWordmark size={iconSize} />, key: 'Node' },
    { component: <JavaPlain size={iconSize} />, key: 'Java' },
    { component: <PhpPlain size={iconSize} />, key: 'PHP' },
    { component: <LaravelOriginal size={iconSize} />, key: 'Laravel' },
    { component: <JavascriptPlain size={iconSize} />, key: 'JavaScript' },
    { component: <TypescriptPlain size={iconSize} />, key: 'TypeScript' },
    { component: <MysqlOriginal size={iconSize} />, key: 'MySQL' },
    { component: <DockerPlain size={iconSize} />, key: 'Docker' }
  ]

  const cardData = [
    {
      title: 'Front-end Development',
      icon: faLaptopCode,
      description:
        'Skilled in creating responsive layouts, whether starting from scratch or leveraging various UI frameworks.'
    },
    {
      title: 'Back-end Development',
      icon: faTerminal,
      description:
        'Experienced in developing applications with secure, scalable backends and handling authorizations.'
    },
    {
      title: 'Team Collaboration',
      icon: faUsersBetweenLines,
      description:
        'Experienced in Git workflow and Jira. Proficient in agile methodologies for project development.'
    },
    {
      title: 'Problem Solving',
      icon: faBrain,
      description:
        'Adept at solving challenging problems with a logical and analytical approach to satisfy users.'
    },
    {
      title: 'Self Improvement',
      icon: faPersonRunning,
      description:
        'Committed to continuous self-improvement to personal and professional growth.'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      <section className="mb-40">
        <Reveal width="100%">
          <div className="flex h-full flex-col items-center justify-center align-middle">
            <div className="mt-10 text-center">
              <div className="mb-8 mt-5 font-sans text-6xl font-extrabold md:text-7xl">
                Hey there! I'm{' '}
                <span
                  className={`font-sans ${
                    isDark ? 'text-emerald-500' : 'text-emerald-700'
                  }`}
                >
                  Win
                </span>
              </div>
              <div
                className={`text-lg font-extrabold text-emerald-500 sm:text-lg md:text-3xl`}
              >
                <TypeAnimation
                  sequence={sequence}
                  wrapper="span"
                  speed={2}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>
              {/* <div className="mt-6">Based in Thailand</div> */}
            </div>

            <div className="mx-auto mt-20 flex w-full flex-wrap items-center justify-center pb-8 md:max-w-[55rem]">
              {icons.map((icon, index) => (
                <Reveal index={index} key={`about-home-${index} md:m-5`}>
                  <TechIcon
                    component={icon.component}
                    iconColor={iconColor}
                    iconKey={icon.key}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mb-20 mt-10">
        <div className="flex justify-center">
          <Reveal>
            <div
              className={`text-lg font-bold uppercase md:text-3xl ${
                isDark ? 'text-green-300' : 'text-green-700'
              } `}
            >
              {'{ ABOUT ME }'}
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="85%">
            <div className={`mt-5 h-[4px] w-[100%] bg-gray-400`}></div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="90%">
            <div className="pb-8 pt-2">
              A tech enthusiast with a focus on software development.
              Experienced in web development, I'm passionate about exploring
              diverse areas to broaden my skills. Eager to excel and apply my
              expertise in various fields.
            </div>
          </Reveal>
        </div>

        <div className="mx-auto p-5">
          <div className="-m-4 flex flex-wrap items-stretch justify-center">
            {cardData.map((card, index) => (
              <div key={index} className="w-3/3 p-4 md:w-1/3">
                <Reveal className="h-full p-2" index={index}>
                  <div
                    className={`flex h-full flex-col rounded-lg shadow-md ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    } px-2 py-5`}
                  >
                    <div className="mb-3 flex items-center justify-center">
                      <div
                        className={`inline-flex size-16 shrink-0 items-center justify-center rounded-full border-4 border-gray-300 ${
                          isDark ? 'bg-emerald-500' : 'bg-emerald-700'
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={card.icon}
                          size="2xl"
                          className="text-white"
                        />
                      </div>
                    </div>
                    <div className="grow text-center">
                      <h2 className="title-font text-center text-lg font-medium">
                        {card.title}
                      </h2>
                    </div>
                    <div className="grow text-center">
                      <p className="text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="flex justify-center">
          <Reveal>
            <div
              className={`text-lg font-bold uppercase md:text-3xl ${
                isDark ? 'text-green-300' : 'text-green-700'
              } `}
            >
              {'{ Featured Achievements }'}
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="85%">
            <div className={`my-5 h-[4px] w-[100%] bg-gray-400`}></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal className="p-3" key={`achiv-home-${index}`}>
              <ArticleCard
                title={achievement.title}
                img_url={achievement.img_url}
                stack={achievement.stack}
                content={achievement.content}
                description={achievement.description}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Reveal className="p-3">
            <AnimatedButton
              className={`rounded-lg border-2 !bg-transparent px-3 py-1 ${
                isDark
                  ? 'border-green-300 !text-green-300'
                  : 'border-green-700 !text-green-700'
              }`}
              onClick={() => navigate('/achievement')}
              content={
                <div>
                  <span> View more </span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              }
            />
          </Reveal>
        </div>
      </section>

      <section className="mb-20 mt-28">
        <div className="flex justify-center">
          <Reveal>
            <div
              className={`text-lg font-bold uppercase md:text-3xl ${
                isDark ? 'text-green-300' : 'text-green-700 shadow-md'
              } `}
            >
              {'{ Featured Projects }'}
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="85%">
            <div className={`my-5 h-[4px] w-[100%] bg-gray-400`}></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal className="p-3" key={`proj-home-${index}-div`}>
              <ArticleCard
                title={project.title}
                img_url={project.img_url}
                stack={project.stack}
                content={project.content}
                description={project.description}
              />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center">
          <Reveal className="p-3">
            <AnimatedButton
              className={`rounded-lg border-2 !bg-transparent px-3 py-1 ${
                isDark
                  ? 'border-green-300 !text-green-300'
                  : 'border-green-700 !text-green-700'
              }`}
              onClick={() => navigate('/project')}
              content={
                <div>
                  <span> View more </span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </div>
              }
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default Home
