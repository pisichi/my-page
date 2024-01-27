import './Home.scss'
import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import TechIcon from '@/components/Icons/TechIcon'
import useScreenSize from 'utils/useScreenSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor, faFlask, faPlane } from '@fortawesome/free-solid-svg-icons'
import AboutMeTerminal from '@/components/Terminal/AboutMeTerminal'

import {
  NuxtjsOriginal,
  ReactOriginal,
  SolidityOriginal,
  ElectronOriginal,
  PhpPlain,
  LaravelOriginal,
  DockerPlain,
  KubernetesPlain,
  JavaPlain,
  JavascriptPlain,
  PythonPlain,
  Html5Plain,
  MysqlOriginal,
  MongodbOriginal,
  TypescriptPlain
} from 'devicons-react'

import React, {
  ReactSVGElement,
  ReactElement,
  ReactNode,
  useRef,
  useEffect
} from 'react'
import ProjectCard from '@/components/Card/ProjectCard'
import tournamentsData from '@/data/tournamentsData'

type IconProps = {
  size: number
  children?: ReactNode | ReactNode[]
}

const Home: React.FC = () => {
  const { isDark } = useDarkMode()
  const { isMobile } = useScreenSize()
  const iconSize = isMobile ? 40 : 60
  const iconColor = isDark ? '#86efac' : '#308250'
  const tournaments = tournamentsData.slice(0, 3);


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
      title: 'Shooting Stars',
      icon: faMeteor,
      description:
        'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
    },
    {
      title: 'The Catalyzer',
      icon: faFlask,
      description:
        'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
    },
    {
      title: 'Neptune',
      icon: faPlane,
      description:
        'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
    },
    {
      title: 'Neptune',
      icon: faPlane,
      description:
        'Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.'
    }
  ]

  const iconContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elementsToUpdate =
      iconContainerRef.current?.querySelectorAll('[fill]')
    if (elementsToUpdate) {
      elementsToUpdate.forEach((element) => {
        element.setAttribute('fill', iconColor)
      })
    }
  }, [iconColor])

  useEffect(() => {
    const pathsToUpdate = iconContainerRef.current?.querySelectorAll('path')
    if (pathsToUpdate) {
      pathsToUpdate.forEach((path) => {
        path.setAttribute('fill', iconColor)
      })
    }
  }, [iconColor])

  return (
    <div className="overflow-x-hidden">
      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          About Me
        </h2>
      </div>
      <div className="mb-4">
        {/* Big Banner Content Goes Here */}
        <div className=" p-4">
          About Me Hi, I am <span className="highlight">Name</span>
        </div>
      </div>

      <AboutMeTerminal />

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Technologies
        </h2>
      </div>
      <div
        className="flex flex-wrap items-center justify-center"
        ref={iconContainerRef as React.RefObject<HTMLDivElement>}
      >
        {icons.map((icon, index) => (
          <TechIcon
            key={index}
            component={icon.component}
            iconColor={iconColor}
            iconKey={icon.key}
          />
        ))}
      </div>

      <section className={`body-font text-${isDark ? 'white' : 'gray-600'}`}>
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div
                  className={`flex h-full flex-col rounded-lg ${
                    isDark ? 'bg-gray-800' : 'bg-gray-100'
                  } p-8`}
                >
                  <div className="mb-3 flex items-center">
                    <div
                      className={`mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                        isDark ? 'bg-emerald-500' : 'bg-emerald-700 text-white'
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={card.icon}
                        className="text-white"
                      />
                    </div>
                    <h2 className="title-font text-lg font-medium">
                      {card.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Feature Project
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((tournament, index) => (
          <ProjectCard
            key={index}
            title={tournament.title}
            img_url={tournament.img_url}
            stack={tournament.stack}
            content={tournament.content}
            description={tournament.description}
          />
        ))}
      </div>

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Feature Achievements
        </h2>
      </div>
    </div>
  )
}

export default Home
