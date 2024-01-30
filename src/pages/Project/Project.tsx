import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'
import projectsData from '@/data/projectsData'

const Project: React.FC = () => {
  const { isDark } = useDarkMode()

  // Filter projects with 'fun' tag
  const funProjects = projectsData().filter(
    (project) => project.tags && project.tags.includes('fun')
  )

  // Filter projects except those with 'fun' tag
  const projects = projectsData().filter(
    (project) =>
      !project.tags ||
      project.tags.length === 0 ||
      !project.tags.includes('fun')
  )

  return (
    <div className={`px-3`}>
      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Projects
        </h2>
      </div>
      <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
        My various projects, from practice to hobbies.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ArticleCard
            key={`proj-${index}`}
            title={project.title}
            img_url={project.img_url}
            stack={project.stack}
            content={project.content}
            description={project.description}
          />
        ))}
      </div>

      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-xl font-bold">
          Fun
        </h2>
      </div>
      <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
        Fun projects, mainly games for now.
      </p>
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {funProjects.map((project, index) => (
          <ArticleCard
            key={`fun-${index}`}
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
