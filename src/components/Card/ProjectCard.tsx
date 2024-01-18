import './ProjectCard.scss'
import { useDarkMode } from 'context/DarkModeContext'
import React, { ReactNode, useState } from 'react'

interface ProjectCardProps {
  title: string
  img_url: string
  stack: string[]
  content: ReactNode
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  img_url,
  stack,
  content,
  description
}) => {
  const { isDark } = useDarkMode()
  const [isFlipped, setFlipped] = useState(false)

  const toggleFlip = () => {
    setFlipped(!isFlipped)
  }

  return (
    <div
      className={`mx-auto my-8 max-w-sm overflow-hidden rounded shadow-lg transition-transform hover:scale-105${
        isDark ? 'bg-transparent' : 'bg-white'
      } ${isFlipped ? 'flipped' : ''}`}
      onClick={toggleFlip}
    >
      <div className="flipper">
        {/* Front */}
        <div
          className={`front ${isFlipped ? 'hidden' : 'visible'}`}
          style={{ height: isFlipped ? '0' : '300px' }}
        >
          <img className="h-48 w-full object-cover" src={img_url} alt={title} />
          <div className="px-6 py-4">
            <div className="mb-2">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
            <div className="mt-2 flex flex-wrap">
              {stack.map((tech, index) => (
                <span
                  key={index}
                  className="badge-hexagon mb-2 mr-2 flex items-center"
                >
                  O
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back */}
        <div
          className={`back ${isFlipped ? 'visible' : 'hidden'} bg-gray-500`}
          style={{ height: isFlipped ? '300px' : '0' }}
        >
          <div className="p-6 shadow-lg  transition-transform">
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <div className="max-h-96 overflow-y-auto">
              {/* Make your content scrollable with a maximum height */}
              {content}
            </div>
            <button
              className="focus:shadow-outline mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              onClick={toggleFlip}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
