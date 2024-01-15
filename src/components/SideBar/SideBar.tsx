import React from 'react';
import { useDarkMode } from '@/context/DarkModeContext';
import DarkModeToggleWrapper from '../Toggle/DarkModeToggleWrapper';

interface SideBarProps {
  showSidebar: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ showSidebar = true }) => {
  const { isDark } = useDarkMode();

  return (
    <div
      className={`sidebar h-full ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'
      } p-4`}
      style={{
        opacity: showSidebar ? 1 : 0,
        transform: showSidebar ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 overflow-hidden mb-4">
          <img
            src="https://placehold.co/400"
            alt="Name"
            className={`w-full h-full object-cover rounded-full border-4 ${
              isDark ? 'border-blue-500' : 'border-blue-300'
            } transform transition-transform hover:scale-110 hover:shadow-lg`}
          />
        </div>
        <p className={`text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
          Professional Name
        </p>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          professional job title
        </p>
        <DarkModeToggleWrapper />
      </div>
    </div>
  );
};

export default SideBar;
