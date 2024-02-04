import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

import Reveal from '@/components/Utils/Reveal'
import projectsData from '@/data/projectsData'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

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
      <div className="flex pt-3">
        <Reveal>
          <div
            className={`text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-green-300' : 'text-green-700'
            } `}
          >
            {'{ Projects }'}
          </div>
        </Reveal>
      </div>

      <div className="flex">
        <Reveal>
          <Breadcrumb />
        </Reveal>
      </div>

      <div className="flex">
        <Reveal width="100%">
          <div
            className={`mb-2 h-[4px] ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          ></div>
        </Reveal>
      </div>

      <Reveal>
        <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          My various Projects.
        </p>
      </Reveal>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal className="p-2" key={`proj-${index}`} index={index}>
            <ArticleCard
              title={project.title}
              img_url={project.img_url}
              stack={project.stack}
              content={project.content}
              description={project.description}
            />
          </Reveal>
        ))}
      </div>

      <div className="flex pt-3">
        <Reveal>
          <div
            className={`text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            } `}
          >
            {'{ Fun }'}
          </div>
        </Reveal>
      </div>

      <div className="flex">
        <Reveal width="100%">
          <div
            className={`mb-2 mt-5 h-[4px] ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          ></div>
        </Reveal>
      </div>

      <Reveal>
        <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          Fun projects, mainly games.
        </p>
      </Reveal>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {funProjects.map((project, index) => (
          <Reveal className="p-2" key={`fun-${index}`} index={index}>
            <ArticleCard
              title={project.title}
              img_url={project.img_url}
              stack={project.stack}
              content={project.content}
              description={project.description}
            />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Project
