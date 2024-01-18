import React, { ReactNode, useState } from 'react'
import './ProjectCard.scss'
import { useDarkMode } from 'context/DarkModeContext'
import { useModal } from 'context/ModalContext'

interface ProjectCardProps {
  title: string
  img_url: string
  content: ReactNode
  stack: string[]
  description: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  img_url,
  content,
  stack,
  description
}) => {
  const { isDark } = useDarkMode()
  const { openModal } = useModal()
  const [isHovered, setHovered] = useState(false)
  const customClassName = ''

  const handleOpenModal = () => {
    openModal(<p>Modal content goes here</p>, {}, customClassName)
  }

  return (
    <div
      className={`project-card relative cursor-pointer rounded-md ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOpenModal}
    >
      <img className="h-full w-full object-cover" src={img_url} alt={title} />

      <div className="overlay-container">
        {isHovered && (
          <div
            className={`overlay translate-y-0 transition-transform duration-300 ease-out bg-${
              isDark ? 'black' : 'white'
            }/80 text-${isDark ? 'white' : 'black'}`}
          >
            <div>
              <h2 className="mb-2 text-xl text-white font-bold">{title}</h2>
              <p
                className={`text-white`}
              >
                {description}
              </p>
              {/* <button
                className={`text-${
                  isDark ? 'blue-300' : 'blue-500'
                } mt-2 cursor-pointer underline`}
            
              >
                Read More
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
