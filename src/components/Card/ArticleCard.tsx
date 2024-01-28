import React, { ReactNode, useState, useCallback, useEffect } from 'react'
import { useDarkMode } from 'context/DarkModeContext'
import { useModal } from 'context/ModalContext'
import IconWrapper from 'components/Icons/IconWrapper'
import './ArticleCard.scss'

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

  const handleOpenModal = useCallback(() => {
    openModal(content, title, {}, '')
  }, [content, openModal, title])

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true)
  }, [])

  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  useEffect(() => {
    const debouncedHandleHover = debounce(setHovered, 300)

    const handleMouseEnter = () => debouncedHandleHover(true)
    const handleMouseLeave = () => debouncedHandleHover(false)

    const element = document.getElementById(`article-card-${title}`)
    element?.addEventListener('mouseenter', handleMouseEnter)
    element?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element?.removeEventListener('mouseenter', handleMouseEnter)
      element?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [title])

  const MemoizedIconWrapper = React.memo(IconWrapper)

  return (
    <div
      id={`article-card-${title}`}
      className={`project-card relative mx-auto cursor-pointer rounded-md shadow-md hover:scale-[1.03] md:max-w-96 lg:max-w-2xl ${
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
            <div
              className={`absolute inset-x-0 -bottom-1 rounded-b-md bg-gradient-to-t ${
                isDark
                  ? 'from-gray-900 to-gray-800 text-gray-300'
                  : 'from-gray-100 to-slate-100 text-gray-800'
              }  px-4 py-2`}
            >
              <h2 className="mb-2 text-xl font-bold ">{title}</h2>
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
            <div className="flex flex-wrap items-center">
              {stack &&
                stack.map((icon, index) => (
                  <div
                    key={index}
                    className={`hexagon2 z-5 mr-2 p-[2px] shadow-md`}
                    style={{ backgroundColor: icon.color }}
                  >
                    <div className="hexagon p-[0.5rem]">
                      <MemoizedIconWrapper iconColor={icon.color}>
                        {icon.component}
                      </MemoizedIconWrapper>
                    </div>
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

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}
