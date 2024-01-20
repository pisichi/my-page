import { useDarkMode } from 'context/DarkModeContext'
import React, { useEffect, useRef, useState } from 'react'

interface SkillCardProps {
  category: string
  skills: { name: string; value: string }[]
}

const SkillCardRedux: React.FC<SkillCardProps> = ({ category, skills }) => {
  const { isDark } = useDarkMode()
  const skillCardRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(true)

  const getBarColor = (value: number) => {
    return 'bg-green-200'
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    setIsMounted(false)
    const skillCardElement = skillCardRef.current

    // Cleanup after animations are expected to finish
    const totalAnimationTime = 1500 // 1.5 seconds (adjust as needed)

    // Set a flag to indicate whether the animation should be running
    let isAnimationRunning = true

    // Schedule a timeout to stop the animation after totalAnimationTime
    const timeoutId = setTimeout(() => {
      isAnimationRunning = false
    }, totalAnimationTime)

    // Filling animation for each skill bar with random delays
    skills.forEach((skill, index) => {
      const barElement = skillCardElement?.querySelector(
        `#bar-${index}`
      ) as HTMLElement
      const textElement = skillCardElement?.querySelector(
        `#text-${index}`
      ) as HTMLElement
      const randomDelay = Math.random() * 500 // adjust the range as needed

      if (barElement && textElement) {
        barElement.style.transition = `width 1s ${randomDelay}ms`
        barElement.style.width = `${skill.value}%`

        textElement.style.transition = `opacity 0.5s ${randomDelay}ms`
        textElement.style.opacity = '1'

        // Increment animation for each skill bar
        const targetValue = parseInt(skill.value, 10)
        const duration = 1000 // 1 second (adjust as needed)
        const startValue = 0
        let startTime: number

        const animateIncrement = (timestamp: number) => {
          if (!startTime) startTime = timestamp

          const progress = timestamp - startTime
          let newValue =
            startValue + ((targetValue - startValue) * progress) / duration
          newValue = Math.min(newValue, targetValue)

          textElement.innerText = `${Math.round(newValue)}%`

          // Check the flag to determine whether to continue the animation
          if (
            isAnimationRunning &&
            progress < duration &&
            newValue < targetValue
          ) {
            requestAnimationFrame(animateIncrement)
          }
        }

        requestAnimationFrame((timestamp) => {
          startTime = timestamp
          animateIncrement(timestamp)
        })
      }
    })

    // Cleanup after animations are expected to finish
    return () => {
      clearTimeout(timeoutId)
      setIsMounted(false)
    }
  }, [isMounted, skills])

  return (
    <div
      ref={skillCardRef}
      className={`z-11 bg-green rounded-md${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h2 className="text-md font-semibold">{category}</h2>
      <div className="mt-2 space-y-1">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex items-center">
              <div className="h-4">
                <p className="text-sm">{skill.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-5 pr-1">
                <div
                  id={`bar-${index}`}
                  className={`h-1.5 ${getBarColor(Number(skill.value))}`}
                  style={{ width: '0%' }}
                ></div>
              </div>
              <div className="col-span-1 flex justify-end">
                <span id={`text-${index}`} className="text-xs opacity-0">
                  0%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCardRedux
