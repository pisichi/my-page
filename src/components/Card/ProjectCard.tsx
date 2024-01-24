import React, { ReactNode, useState } from 'react';
import './ProjectCard.scss';
import { useDarkMode } from 'context/DarkModeContext';
import { useModal } from 'context/ModalContext';

interface ProjectCardProps {
  title: string;
  img_url: string;
  content: ReactNode;
  stack: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  img_url,
  content,
  stack,
  description,
}) => {
  const { isDark } = useDarkMode();
  const { openModal } = useModal();
  const [isHovered, setHovered] = useState(false);
  const customClassName = '';

  const handleOpenModal = () => {
    openModal(content, title, {}, customClassName);
  };

  return (
    <div
      className={`project-card relative mx-auto cursor-pointer rounded-md hover:scale-[1.03] md:max-w-96 lg:max-w-2xl ${
        isHovered ? 'hovered' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOpenModal}
    >
      <div className="relative">
        <img className="h-full w-full object-cover aspect-[4/3] rounded-t-md" src={img_url} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-transparent to-black rounded-b-md">
          <h2 className="mb-2 text-xl font-bold text-white">{title}</h2>
        </div>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
