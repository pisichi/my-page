import { Aarch64Plain } from 'devicons-react'
import React, { ReactNode } from 'react'

interface IconWrapperProps {
  color: string
  size: string
}

const Devicon: React.FC<IconWrapperProps> = ({ color, size }) => {
  return (
    <div className="icon-wrapper transition-transform hover:scale-110">
      <Aarch64Plain className="hover:animate-pulse" color={color} size={size} />
    </div>
  )
}

export default Devicon
