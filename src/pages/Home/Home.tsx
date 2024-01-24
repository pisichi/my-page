import './Home.scss'
import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import Devicon from 'components/Icons/Devicon'
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

type IconProps = {
  size: number
  children?: ReactNode | ReactNode[]
}

const Home: React.FC = () => {
  const { isDark } = useDarkMode()
  const iconSize = 80

  const iconColor = isDark ? '#86efac' : '#166534'

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

  // const styledIcons = icons.map((icon, index) =>
  //   React.cloneElement(icon, { key: index })
  // )

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
    <div className="">
      {/* Big Banner - First Row */}
      <div className="mb-4">
        <p className="text-2xl font-bold">Big Banner</p>
        {/* Your Big Banner Content Goes Here */}
        <div className="border border-gray-300 p-4">
          About Me Hi, I am Pisitchai
        </div>
      </div>

      {/* 1 Row */}
      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          About Me A bit about me I'm a self-taught web developer and Mobile App
          Developer with experience in designing new features from ideation to
          production, implementation of wireframes and design flows into high
          performance software applications. I take into consideration the user
          experience while writing reusable and efficient code. I passionately
          combine good design, technology, and innovation in all my projects,
          which I like to accompany from the first idea to release.Currently,
          I'm focused on the backend development.
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Technologies and Tools Using a combination of cutting-edge
          technologies and reliable open-source software I build user-focused,
          performant apps and websites for smartphones, tablets, and desktops.
        </div>
        color={isDark ? `#86efac` : `#166534`}
      </div>

      <div
        className="flex flex-wrap items-center justify-center"
        ref={iconContainerRef as React.RefObject<HTMLDivElement>}
      >
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            <div className="group mx-2 transform-gpu transition-transform hover:scale-110 my-1">
              <div
                className={`rounded-md ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } p-4 shadow-md transition-shadow hover:shadow-lg`}
              >
                {icon.component}
                <div
                  className="mt-2 cursor-default text-center text-sm"
                  style={{ color: iconColor }}
                >
                  {icon.key}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Back-end My main focus. I love algorithm & software design. RESTful &
          secure back-end with authorizations and database validations
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Front-end Responsive & animated layouts with performance optimization
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Best Practice Clean code, following style guides, naming conventions &
          pattern principles
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Self-Taught Survivor I've learnt to google, read error messages &
          understand documentations
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Team Buddy Github team workflow using feature branches & pull
          requests/code reviews. MVP & agile methodology for projects
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Learning & Sharing My purposes at heart. My best coding experiences
          are the ones I have with other people. I strongly believe in team
          synergie
        </div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">Project</div>
      </div>
    </div>
  )
}

export default Home
