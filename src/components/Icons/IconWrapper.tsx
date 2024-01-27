import React, { ReactNode, useEffect, useRef } from 'react'

type IconWrapperProps = {
  iconColor: string
  children: ReactNode
}

const IconWrapper: React.FC<IconWrapperProps> = ({ iconColor, children }) => {
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
    <div className="aspect-content" ref={iconContainerRef}>
      {children}
    </div>
  )
}

export default IconWrapper
