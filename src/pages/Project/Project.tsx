import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

const Project: React.FC = () => {
  const { isDark } = useDarkMode()

  const projects = [
    {
      title: 'Test1',
      img_url: 'https://placehold.co/600x400',
      content: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test2',
      img_url: 'https://placehold.co/600x400',
      content: <div className=""></div>,
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Test3',
      img_url: 'https://placehold.co/600x400',
      content: 'Lorem ipsum dolor sit amet, consectetur',
      description: 'Lorem ipsum dolor sit amet'
    }
  ]

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
            content={project.content}
            description={project.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Project
