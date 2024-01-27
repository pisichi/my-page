import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'
import projectsData from '@/data/projectsData'

const Project: React.FC = () => {
  const { isDark } = useDarkMode()

  const projects = projectsData

  return (
    <div className={`px-3`}>
      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ArticleCard
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
