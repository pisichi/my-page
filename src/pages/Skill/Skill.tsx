import SkillCard from 'components/Card/SkillCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

const Skill: React.FC = () => {
  const { isDark } = useDarkMode()

  const skills = [
    {
      category: 'Web Development',
      skills: [
        {
          name: 'ES6',
          value: '90'
        },
        {
          name: 'HTML5',
          value: '100'
        },
        {
          name: 'Node',
          value: '90'
        },
        {
          name: 'Vue.js',
          value: '70'
        }
      ]
    },
    {
      category: 'Programing Languages',
      skills: [
        {
          name: 'Java',
          value: '90'
        },
        {
          name: 'JavaScript',
          value: '100'
        },
        {
          name: 'TypeScript',
          value: '100'
        },
        {
          name: 'Python',
          value: '100'
        },
        {
          name: 'PHP',
          value: '100'
        },
        {
          name: 'Solidity',
          value: '100'
        }
      ]
    },
    {
      category: 'Desktop Application Development',
      skills: [
        {
          name: 'Electron.js',
          value: ''
        }
      ]
    },
    {
      category: 'Database',
      skills: [
        {
          name: 'MySql',
          value: ''
        },
        {
          name: 'MongoDB',
          value: ''
        }
      ]
    },
    {
      category: 'Tools and Technologies',
      skills: [
        {
          name: 'Agile Methodology',
          value: ''
        },
        {
          name: 'Extreme Programming',
          value: ''
        }
      ]
    },
    {
      category: 'Design',
      skills: [
        {
          name: 'Adobe XD',
          value: ''
        },
        {
          name: 'Figma',
          value: ''
        },
        {
          name: 'Photoshop',
          value: ''
        }
      ]
    },
    {
      category: 'Project Management',
      skills: [
        {
          name: 'Jira',
          value: ''
        },
        {
          name: 'Trello',
          value: ''
        }
      ]
    },
    {
      category: 'Crash Reporting',
      skills: [
        {
          name: 'Sentry',
          value: ''
        }
      ]
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`mb-8 text-2xl font-semibold ${
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
