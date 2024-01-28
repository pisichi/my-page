import React, { ReactNode, useEffect, useRef } from 'react'

type IconWrapperProps = {
  iconColor: string | null
  children: ReactNode
}

const IconWrapper: React.FC<IconWrapperProps> = ({ iconColor, children }) => {
  const iconContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const iconContainer = iconContainerRef.current

    if (iconColor && iconContainer) {
      const elementsToUpdate = iconContainer.querySelectorAll('[fill]')

      elementsToUpdate.forEach((element) => {
        element.setAttribute('fill', iconColor)
      })
    }
  }, [iconColor])

  useEffect(() => {
    const iconContainer = iconContainerRef.current

    if (iconColor && iconContainer) {
      const pathsToUpdate = iconContainer.querySelectorAll('path')

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

export default React.memo(IconWrapper)
