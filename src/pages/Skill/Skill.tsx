import SkillCard from 'components/Card/SkillCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

const Skill: React.FC = () => {
  const { isDark } = useDarkMode()

  const skills = [
    {
      category: 'Front End',
      skills: [
        {
          name: '',
          value: '90'
        },
        {
          name: '',
          value: '100'
        },
        {
          name: '',
          value: '90'
        },
        {
          name: 's',
          value: '70'
        }
      ]
    },
    {
      category: 'Database',
      skills: [
        {
          name: 'SQL',
          value: '90'
        },
        {
          name: 'NoSQL',
          value: '100'
        }
      ]
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My Skills
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            category={skill.category}
            skills={skill.skills}
          />
        ))}
      </div>
    </div>
  )
}

export default Skill
