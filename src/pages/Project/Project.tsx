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
        'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test2',
      img_url: 'https://placehold.co/600x400',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test3',
      img_url: 'https://placehold.co/600x400',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur',
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
        My Projects
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
