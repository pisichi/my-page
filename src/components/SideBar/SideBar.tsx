import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDarkMode } from '@/context/DarkModeContext';
import DarkModeToggleWrapper from '../Toggle/DarkModeToggleWrapper';
import './SideBar.css';

const SideBar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const { isDark } = useDarkMode();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const sidebarAnimation = useSpring({
    width: isSidebarVisible ? '100%' : '0%',
    opacity: isSidebarVisible ? 1 : 0,
    from: { width: '100%', opacity: 1 },
  });

  return (
    <animated.div
      style={sidebarAnimation}
      className={`sidebar h-full ${
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-800'
      } p-4`}
    >
      <div className="flex flex-col items-center">
        <img
          src="https://placehold.co/400"
          alt="Your Name"
          className={`w-32 h-32 rounded-full mb-4 border-4 ${
            isDark ? 'border-blue-500' : 'border-blue-300'
          } transform transition-transform hover:scale-110 hover:shadow-lg`}
        />
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
          Your professional sidebar content goes here.
        </p>
        <DarkModeToggleWrapper />
      </div>

      <button
        className={`mt-auto ${
          isDark
            ? 'bg-blue-500 hover:bg-blue-600'
            : 'bg-gray-500 hover:bg-gray-600 text-white'
        } py-2 px-4 rounded focus:outline-none`}
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>
    </animated.div>
  );
};

export default SideBar;