import React, { useState, ReactNode, MouseEvent, useEffect } from 'react'

interface TooltipProps {
  text: string
  children: ReactNode
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, className }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      setTooltipPosition({
        x: Math.min(window.innerWidth - 200, e.clientX),
        y: Math.min(window.innerHeight - 30, e.clientY)
      })
    }

    document.body.addEventListener(
      'mousemove',
      handleMouseMove as unknown as EventListener
    )

    return () => {
      document.body.removeEventListener(
        'mousemove',
        handleMouseMove as unknown as EventListener
      )
    }
  }, [])

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div
          className="fixed z-50 rounded-md bg-gray-700 px-2 py-1 text-white shadow-md"
          style={{ left: tooltipPosition.x, top: tooltipPosition.y }}
        >
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
