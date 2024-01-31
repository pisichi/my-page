import './Home.scss'
import Reveal from '@/components/Utils/Reveal'

import {
  faFlask,
  faForwardFast,
  faLaptopCode,
  faMeteor,
  faPersonRunning,
  faPlane,
  faTerminal,
  faUsersBetweenLines
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import {
  DockerPlain,
  ElectronOriginal,
  Html5Plain,
  JavaPlain,
  JavascriptPlain,
  KubernetesPlain,
  LaravelOriginal,
  MongodbOriginal,
  MysqlOriginal,
  NodejsLine,
  NodejsLineWordmark,
  NodejsOriginalWordmark,
  NuxtjsOriginal,
  PhpPlain,
  PythonPlain,
  ReactOriginal,
  SolidityOriginal,
  TypescriptPlain,
  VuejsOriginal
} from 'devicons-react'
import React, {
  ReactElement,
  ReactNode,
  ReactSVGElement,
  useEffect,
  useRef
} from 'react'
import useScreenSize from 'utils/useScreenSize'

import ArticleCard from '@/components/Card/ArticleCard'
import TechIcon from '@/components/Icons/TechIcon'
import AboutMeTerminal from '@/components/Terminal/AboutMeTerminal'
import achievementsData from '@/data/achievementsData'
import projectsData from '@/data/projectsData'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Home: React.FC = () => {
  const { isDark } = useDarkMode()
  const { isMobile } = useScreenSize()
  const iconSize = isMobile ? 40 : 60
  const iconColor = isDark ? '#86efac' : '#308250'
  const achievements = achievementsData.slice(0, 3)
  const projects = projectsData().slice(0, 3)

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

  const icons = [
    { component: <VuejsOriginal size={iconSize} />, key: 'Vue.js' },
    { component: <NuxtjsOriginal size={iconSize} />, key: 'Nuxt.js' },
    { component: <ReactOriginal size={iconSize} />, key: 'React' },
    { component: <NodejsOriginalWordmark size={iconSize} />, key: 'Node' },
    { component: <PhpPlain size={iconSize} />, key: 'PHP' },
    { component: <LaravelOriginal size={iconSize} />, key: 'Laravel' },
    { component: <JavaPlain size={iconSize} />, key: 'Java' },
    { component: <JavascriptPlain size={iconSize} />, key: 'JavaScript' },
    { component: <TypescriptPlain size={iconSize} />, key: 'TypeScript' },
    { component: <PythonPlain size={iconSize} />, key: 'Python' },
    { component: <MysqlOriginal size={iconSize} />, key: 'MySQL' },
    { component: <DockerPlain size={iconSize} />, key: 'Docker' }
  ]

  const cardData = [
    {
      title: 'Front-end Development',
      icon: faLaptopCode,
      description:
        'Responsive and user-friendly layouts. Whether starting from scratch or leveraging various UI frameworks.'
    },
    {
      title: 'Back-end Development',
      icon: faTerminal,
      description:
        'Applications with RESTful and secure back-ends, including handling authorizations and implementing database validations.'
    },
    {
      title: 'Best Practices Advocate',
      icon: faPersonRunning,
      description:
        'Clean code, adherence to naming conventions, and application of pattern principles.'
    },
    {
      title: 'Team Collaboration',
      icon: faUsersBetweenLines,
      description:
        'Git workflow using branches, pull requests, and code reviews. MVP and agile methodologies for project development.'
    },
    {
      title: 'Continuous Learner',
      icon: faForwardFast,
      description:
        'Thrive on learning new tech. Actively exploring emerging technologies as an integral part of the commitment to personal and professional growth.'
    }
  ]

  return (
    <div className="overflow-x-hidden">
      <section className="mb-12">
        <Reveal>
          <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="text-center">
              <div className="mb-8 mt-5 font-sans text-7xl font-extrabold">
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

            <div className="mx-auto mt-20 flex w-full flex-wrap items-center justify-center pb-8 md:w-2/3">
              {icons.map((icon, index) => (
                <Reveal key={`about-home-${index} md:m-5`}>
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
            <div
              className={`mt-5 h-[4px] w-[100%] ${
                isDark ? 'bg-gray-400' : 'bg-gray-600'
              }`}
            ></div>
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

        <div className="mx-auto px-5 py-5">
          <div className="-m-4 flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <div key={index} className="w-3/3 p-4 md:w-1/3">
                <Reveal>
                  <div
                    className={`flex h-full flex-col rounded-lg shadow-md ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    } px-2 py-5`}
                  >
                    <div className="mb-3 flex items-center justify-center">
                      <div
                        className={`inline-flex size-16 flex-shrink-0 items-center justify-center rounded-full border-4 border-gray-300 ${
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
                    <div className="flex-grow text-center">
                      <h2 className="title-font text-center text-lg font-medium">
                        {card.title}
                      </h2>
                    </div>
                    <div className="flex-grow text-center">
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

      <section className="mt-15 mb-20">
        <div className="flex justify-center">
          <Reveal>
            <div
              className={`text-lg font-bold uppercase md:text-3xl ${
                isDark ? 'text-green-300' : 'text-green-700'
              } `}
            >
              {'{ Featured Achievement }'}
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="85%">
            <div
              className={`my-5 h-[4px] w-[100%] ${
                isDark ? 'bg-gray-400' : 'bg-gray-600'
              }`}
            ></div>
          </Reveal>
        </div>

        {/* <div className="flex border-b-2 border-solid border-gray-500 py-2">
          <h2
            className={`flex-1 text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-green-300' : 'text-green-700'
            } `}
          >
            {'{ Featured Achievement }'}
          </h2>
          <Link
            to="/achievement"
            className="ml-3 flex items-center text-blue-500 transition-all duration-300 hover:text-blue-700"
          >
            View All <FaArrowRight className="ml-1" />
          </Link>
        </div> */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <Reveal key={`achiv-home-${index}`}>
              <div className="p-3">
                <ArticleCard
                  title={achievement.title}
                  img_url={achievement.img_url}
                  stack={achievement.stack}
                  content={achievement.content}
                  description={achievement.description}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-15 mb-20">
        <div className="flex justify-center">
          <Reveal>
            <div
              className={`text-lg font-bold uppercase md:text-3xl ${
                isDark ? 'text-green-300' : 'text-green-700'
              } `}
            >
              {'{ Featured Project }'}
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center">
          <Reveal width="85%">
            <div
              className={`my-5 h-[4px] w-[100%] ${
                isDark ? 'bg-slate-400' : 'bg-gray-600'
              }`}
            ></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={`proj-home-${index}-div`}>
              <div className="p-3">
                <ArticleCard
                  title={project.title}
                  img_url={project.img_url}
                  stack={project.stack}
                  content={project.content}
                  description={project.description}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
