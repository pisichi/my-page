import React from 'react';
import { useDarkMode } from 'context/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

interface MenuItem {
  id: number;
  label: string;
  link: string;
}

interface RightSidebarProps {
  showRightSidebar: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  showRightSidebar,
  onClose,
  menuItems,
}) => {
  const { isDark } = useDarkMode();

  return (
    <>
      {/* Backdrop overlay */}
      {showRightSidebar && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 transition-opacity duration-300"
          onClick={onClose}
        ></div>
      )}

      {/* Right sidebar */}
      <div
        className={`fixed bottom-0 right-0 top-0 bg-${
          isDark ? 'black' : 'white'
        } z-50 transform p-6 shadow-lg transition-all transition-transform duration-500 hover:shadow-xl ${
          showRightSidebar ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          width: '18rem',
          borderRadius: '8px',
          transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Adjust animation curve
        }}
      >
        <div className="mb-4 flex items-center justify-between border-b border-gray-400 pb-4">
          <h2
            className={`text-xl font-semibold text-${
              isDark ? 'white' : 'black'
            } transition-all duration-300`}
            style={{ fontSize: '1.5rem' }} // Adjust font size
          >
            Menu
          </h2>
          <button
            onClick={onClose}
            className={`text-${isDark ? 'white' : 'black'} hover:text-${
              isDark ? 'gray-300' : 'gray-700'
            } transition-all duration-300 focus:outline-none`}
            aria-label="Close Sidebar"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <div>
          {menuItems.map((menuItem, index) => (
            <div
              key={menuItem.id}
              className={`mb-4 transition-all duration-700 ease-in-out ${
                showRightSidebar ? 'translate-x-0' : 'translate-x-full'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <a
                href={menuItem.link}
                className={`hover:bg-${
                  isDark ? 'gray-800' : 'gray-100'
                } hover:text-${isDark ? 'white' : 'black'}`}
                style={{
                  color: isDark ? '#ffffff' : '#000000', // Specify text color
                }}
              >
                {menuItem.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;