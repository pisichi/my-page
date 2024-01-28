import './Home.scss'

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
  NuxtjsOriginal,
  PhpPlain,
  PythonPlain,
  ReactOriginal,
  SolidityOriginal,
  TypescriptPlain
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

const Home: React.FC = () => {
  const { isDark } = useDarkMode()
  const { isMobile } = useScreenSize()
  const iconSize = isMobile ? 40 : 60
  const iconColor = isDark ? '#86efac' : '#308250'
  const achievements = achievementsData.slice(0, 3)
  const projects = projectsData.slice(0, 3)

  const icons = [
    { component: <NuxtjsOriginal size={iconSize} />, key: 'Nuxt.js' },
    { component: <ReactOriginal size={iconSize} />, key: 'React' },
    { component: <SolidityOriginal size={iconSize} />, key: 'Solidity' },
    { component: <ElectronOriginal size={iconSize} />, key: 'Electron' },
    { component: <PhpPlain size={iconSize} />, key: 'PHP' },
    { component: <LaravelOriginal size={iconSize} />, key: 'Laravel' },
    { component: <DockerPlain size={iconSize} />, key: 'Docker' },
    { component: <KubernetesPlain size={iconSize} />, key: 'Kubernetes' },
    { component: <JavaPlain size={iconSize} />, key: 'Java' },
    { component: <JavascriptPlain size={iconSize} />, key: 'JavaScript' },
    { component: <PythonPlain size={iconSize} />, key: 'Python' },
    { component: <Html5Plain size={iconSize} />, key: 'HTML5' },
    { component: <MysqlOriginal size={iconSize} />, key: 'MySQL' },
    { component: <MongodbOriginal size={iconSize} />, key: 'MongoDB' },
    { component: <TypescriptPlain size={iconSize} />, key: 'TypeScript' }
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
      {/* <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          About Me
        </h2>
      </div> */}

      <AboutMeTerminal />

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Technologies
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {icons.map((icon, index) => (
          <TechIcon
            key={`about-home-${index}`}
            component={icon.component}
            iconColor={iconColor}
            iconKey={icon.key}
          />
        ))}
      </div>

      <div className="mx-auto px-5 py-5">
        <div className="-m-4 flex flex-wrap justify-center">
          {cardData.map((card, index) => (
            <div key={index} className="p-4 md:w-1/3">
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
                  <p className="text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Feature Project
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <div className="p-3" key={`achiv-home-${index}-div`}>
            <ArticleCard
              key={`achiv-home-${index}`}
              title={achievement.title}
              img_url={achievement.img_url}
              stack={achievement.stack}
              content={achievement.content}
              description={achievement.description}
            />
          </div>
        ))}
      </div>

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Feature Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div className="p-3" key={`proj-home-${index}-div`}>
            <ArticleCard
              key={`proj-home-${index}`}
              title={project.title}
              img_url={project.img_url}
              stack={project.stack}
              content={project.content}
              description={project.description}
            />
          </div>
        ))}
      </div>

      <div
        className={`flex rounded-md ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        } mb-2 mt-8 justify-center px-8 py-3`}
      >
        <p className="text-gray-500">
          Pisichi&#39;s Personal Website &copy; 2024
        </p>
      </div>
    </div>
  )
}

export default Home
