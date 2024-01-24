import './Home.scss'
import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import TechIcon from '@/components/Icons/TechIcon'
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
        <div className="flex-1 border border-gray-300 p-2">About Me</div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">Technologies</div>
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

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2"></div>
      </div>

      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">Feature Project</div>
      </div>
      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Feature Achievements
        </div>
      </div>
    </div>
  )
}

export default Home
