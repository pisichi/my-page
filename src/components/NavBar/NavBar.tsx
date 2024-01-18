import React from 'react'
import { FaBars } from 'react-icons/fa'

interface NavBarProps {
  onToggleSidebar: () => void
}

const NavBar: React.FC<NavBarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="fixed left-0 top-0 h-full w-1/5 bg-gray-800 p-6">
      <FaBars className="cursor-pointer text-white" onClick={onToggleSidebar} />
    </div>
  )
}

export default NavBar
