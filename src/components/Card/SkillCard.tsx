import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

interface SkillCardProps {
  category: string
  skills: { name: string; value: string }[]
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  const { isDark } = useDarkMode()

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

  return (
    <div
      className={`z-11 bg-green rounded-md p-4 shadow-md ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <h2 className="text-md font-semibold">{category}</h2>
      <div className="mt-4 space-y-2">
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
                  className={`h-1.5 rounded ${getBarColor(
                    Number(skill.value)
                  )}`}
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
              <div className="col-span-1 flex justify-end">
                <p className="text-xs">{skill.value}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard
