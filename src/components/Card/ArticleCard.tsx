import './ArticleCard.scss'

import IconWrapper from 'components/Icons/IconWrapper'
import { useDarkMode } from 'context/DarkModeContext'
import { useModal } from 'context/ModalContext'
import React, { ReactNode, useState } from 'react'

interface StackItem {
  component: ReactNode
  color: string
  key: string
}

interface ArticleCardProps {
  title: string
  img_url: string
  content: ReactNode
  stack?: StackItem[]
  description: string
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  img_url,
  content,
  stack,
  description
}) => {
  const { isDark } = useDarkMode()
  const { openModal } = useModal()
  const [isHovered, setHovered] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const customClassName = ''

  const handleOpenModal = () => {
    openModal(content, title, {}, customClassName)
  }

  const handleImageLoad = () => {
    setImageLoaded(true)
    console.log('loaded!')
  }

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <div
      className={`project-card relative mx-auto cursor-pointer rounded-md hover:scale-[1.03] md:max-w-96 lg:max-w-2xl ${
        isHovered ? 'hovered' : ''
      } ${imageLoaded ? 'image-loaded' : ''} ${
        imageError ? 'image-error' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOpenModal}
    >
      <div className="relative">
        <img
          className="aspect-[4/3] h-full w-full rounded-t-md object-cover"
          src={img_url}
          alt={title}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {!imageLoaded && !imageError && (
          <div className="loading-animation">
            <div className="spinner"></div>
          </div>
        )}
        {imageLoaded && (
          <>
            <div className="absolute inset-x-0 -bottom-1 rounded-b-md bg-gradient-to-t from-gray-900 to-gray-950 px-4 py-2">
              <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
            </div>
          </>
        )}
        {imageError && (
          <div className="image-error-message">Error loading image.</div>
        )}
      </div>

      <div className="overlay-container">
        {isHovered && (
          <div
            className={`overlay translate-y-0 transition-transform duration-300 ease-out bg-${
              isDark ? 'black' : 'white'
            }/80 text-${isDark ? 'white' : 'black'}`}
          >
            <div>
              <p className={`text-white`}>{description}</p>
            </div>
            <div className="flex flex-wrap items-center ">
              {stack &&
                stack.map((icon, index) => (
                  <div
                    key={index}
                    className="hexagon z-30 mr-2 bg-gray-700 p-[0.5rem] shadow-md"
                  >
                    <IconWrapper iconColor={icon.color}>
                      {icon.component}
                    </IconWrapper>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticleCard
