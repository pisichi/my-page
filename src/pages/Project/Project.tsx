import ProjectCard from 'components/Card/ProjectCard'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'

const Project: React.FC = () => {
  const { isDark } = useDarkMode()

  const projects = [
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
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            img_url={project.img_url}
            stack={project.stack}
            content={project.content}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
