import { useDarkMode } from 'context/DarkModeContext'
import React, { useEffect, useRef, useState } from 'react'

interface SkillCardProps {
  category: string
  skills: { name: string; value: string }[]
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  const { isDark } = useDarkMode()
  const skillCardRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const getBarColor = (value: number) => {
    if (value > 90) {
      return 'bg-green-300'
    } else if (value > 80) {
      return 'bg-blue-500'
    } else if (value > 50) {
      return 'bg-blue-700'
    } else {
      return 'bg-grey-500'
    }
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const delay = 100 // in milliseconds
    const skillCardElement = skillCardRef.current

    if (skillCardElement) {
      skillCardElement.style.opacity = '0'
      skillCardElement.style.transform = 'translateY(10px)'

      setTimeout(() => {
        skillCardElement.style.transition = 'opacity 0.5s, transform 0.5s'
        skillCardElement.style.opacity = '1'
        skillCardElement.style.transform = 'translateY(0)'
      }, delay)
    }

    // Filling animation for each skill bar with random delays
    skills.forEach((skill, index) => {
      const barElement = skillCardElement?.querySelector(
        `#bar-${index}`
      ) as HTMLElement
      const textElement = skillCardElement?.querySelector(
        `#text-${index}`
      ) as HTMLElement
      const randomDelay = Math.random() * 600

      if (barElement && textElement) {
        barElement.style.transition = `width 1.5s ${randomDelay}ms`
        barElement.style.width = `${skill.value}%`

        textElement.style.transition = `opacity 0.5s ${randomDelay}ms`
        textElement.style.opacity = '1'

        // Increment animation for each skill bar
        const targetValue = parseInt(skill.value, 10)
        const duration = 1800
        const startValue = 0
        let startTime: number

        const animateIncrement = (timestamp: number) => {
          if (!startTime) startTime = timestamp

          const progress = timestamp - startTime
          let newValue =
            startValue + ((targetValue - startValue) * progress) / duration
          newValue = Math.min(newValue, targetValue) // Clamp to targetValue

          textElement.innerText = `${Math.round(newValue)}%`

          if (progress < duration && newValue < targetValue) {
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
    const totalAnimationTime = 1800
    setTimeout(() => {
      if (skillCardElement) {
        skillCardElement.style.transition = ''
      }
    }, totalAnimationTime)
  }, [mounted, skills])

  return (
    <div
      ref={skillCardRef}
      className={`group h-fit rounded-md p-4 shadow-md transition-transform hover:scale-105 ${
        isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <h2 className="text-md font-semibold">{category}</h2>
      <div className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-3 font-medium">
                <p className="text-sm">{skill.name}</p>
              </div>
              <div className="col-span-2 pr-1 pt-[4px]">
                <div
                  id={`bar-${index}`}
                  className={`h-[9px] rounded ${getBarColor(
                    Number(skill.value)
                  )}
                  `}
                  style={{ width: '0%' }}
                ></div>
                <div
                  className={`h-[9px] -translate-y-[9px] rounded
                  border-2
                  ${isDark ? 'border-gray-50' : 'border-gray-400'}
                  `}
                  style={{ width: '100%' }}
                ></div>
              </div>

              <div className="col-span-1 flex justify-end">
                <span
                  id={`text-${index}`}
                  className="text-sm font-semibold opacity-0 "
                >
                  0%
                </span>
              </div>
            </div>

            {/* <div className="grid grid-cols-6 items-center">
              <div className="col-span-5 pr-1 ">
                <div
                  id={`bar-${index}`}
                  className={`h-[9px] rounded ${getBarColor(
                    Number(skill.value)
                  )}
                  `}
                  style={{ width: '0%' }}
                ></div>
                <div
                  className={`h-[9px] -translate-y-[9px] rounded
                  border-2
                  ${isDark ? 'border-gray-50' : 'border-gray-400'}
                  `}
                  style={{ width: '100%' }}
                ></div>
              </div>
              <div className="col-span-1 flex justify-end">
                <span
                  id={`text-${index}`}
                  className="text-sm font-semibold opacity-0 "
                >
                  0%
                </span>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
