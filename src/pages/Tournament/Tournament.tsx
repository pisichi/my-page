import ProjectCard from 'components/Card/ProjectCard'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'

const Tournament: React.FC = () => {
  const { isDark } = useDarkMode()

  const tournaments = [
    {
      title: 'Test1',
      img_url: 'https://placehold.co/600x400',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test2',
      img_url: 'https://placehold.co/600x400',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test3',
      img_url: 'https://placehold.co/600x400',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My tournaments
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tournaments.map((tournament, index) => (
          <ProjectCard
            key={index}
            title={tournament.title}
            img_url={tournament.img_url}
            stack={tournament.stack}
            content={tournament.content}
            description={tournament.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Tournament
