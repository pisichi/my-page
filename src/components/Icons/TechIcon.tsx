import IconWrapper from 'components/Icons/IconWrapper'
import { useDarkMode } from 'context/DarkModeContext'
import React, { ReactNode, useEffect, useRef } from 'react'

type IconProps = {
  component: ReactNode
  iconColor: string
  iconKey: string
}

const TechIcon: React.FC<IconProps> = ({ component, iconColor, iconKey }) => {
  const iconContainerRef = useRef<HTMLDivElement>(null)
  const { isDark } = useDarkMode()

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
    <div className="group mx-2 my-1 transform-gpu transition-transform hover:scale-110">
      <div
        className={`rounded-md ${
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        } aspect-w-1 aspect-h-1 flex flex-col items-center p-4 shadow-md transition-shadow hover:shadow-lg`}
      >
        <IconWrapper iconColor={iconColor}>{component}</IconWrapper>
        <div
          className="mt-2 cursor-default whitespace-nowrap text-center text-sm font-semibold"
          style={{ color: iconColor }}
        >
          {iconKey}
        </div>
      </div>
    </div>
  )
}

export default TechIcon
