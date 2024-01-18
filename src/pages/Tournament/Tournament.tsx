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
      title: 'Dev. Mountain Tech Festival(Thailand) 2022',
      img_url: 'https://user-images.githubusercontent.com/30498964/168614013-f3be9e2c-c360-4fbd-9f85-6d24a635f407.png',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'The 6th Stupid Hackathon Thailand',
      img_url:
        'https://user-images.githubusercontent.com/30498964/210324880-8c204a1d-86c8-4a67-b204-575a6c220d17.png',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`text-2xl font-semibold mb-8 ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My tournaments
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
