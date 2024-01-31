import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedButtonProps {
  content: ReactNode
  icon?: ReactNode
  bgColor?: string
  textColor?: string
  className?: string
  onClick?: () => void
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  content,
  icon,
  bgColor = 'blue-500',
  textColor = 'white',
  onClick,
  className = ''
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`bg-${bgColor} text-${textColor} flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </motion.button>
  )
}

export default AnimatedButton
