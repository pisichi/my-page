import React, { ReactNode } from 'react'
import { Aarch64Plain } from 'devicons-react'

interface IconWrapperProps {
  color: string
  size: string
}

const Devicon: React.FC<IconWrapperProps> = ({ color, size }) => {
  return (
    <div className="icon-wrapper transform transition-transform hover:scale-110">
      <Aarch64Plain className="hover:animate-pulse" color={color} size={size} />
    </div>
  )
}

export default Devicon
