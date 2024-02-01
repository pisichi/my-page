import React, { useEffect, useState } from 'react'

interface BurgerIconProps {
  toggled: boolean
  color: string
  handleClick?: () => void
}

const KebabIcon: React.FC<BurgerIconProps> = ({
  toggled,
  color,
  handleClick: customHandleClick
}) => {
  const [isOpen, setIsOpen] = useState(toggled)

  useEffect(() => {
    setIsOpen(toggled)
  }, [toggled])

  const handleClick = () => {
    setIsOpen(!isOpen)
    if (customHandleClick) {
      customHandleClick()
    }
  }

  const genericHamburgerLine = `h-[0.15rem] w-6 rounded-full transition-all ease-transform duration-300`

  return (
    <div
      className={`group flex size-10 transform-gpu cursor-pointer flex-col items-center justify-center transition-transform hover:scale-105 active:scale-95`}
      onClick={handleClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'translate-y-[0.4rem] rotate-45' : '!size-[6px]'
        }`}
        style={{
          backgroundColor: color,
          transformOrigin: 'center'
        }}
      />
      <div
        className={`${genericHamburgerLine} my-1  ${
          isOpen ? 'opacity-0' : 'opacity-100 !size-[6px]'
        }`}
        style={{ backgroundColor: color }}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? '-translate-y-[0.4rem] -rotate-45' : '!size-[6px]'
        }`}
        style={{
          backgroundColor: color,
          transformOrigin: 'center'
        }}
      />
    </div>
  )
}

export default KebabIcon
