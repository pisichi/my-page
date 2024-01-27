import ProjectCard from 'components/Card/ProjectCard'
import { useDarkMode } from 'context/DarkModeContext'
import achievementsData from 'data/achievementsData'
import React, { useState } from 'react'

const Achievement: React.FC = () => {
  const { isDark } = useDarkMode()

  const achievements = achievementsData

  return (
    <div className={`px-3`}>
      <h1
        className={`mb-8 text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My achievements
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <ProjectCard
            key={index}
            title={achievement.title}
            img_url={achievement.img_url}
            stack={achievement.stack}
            content={achievement.content}
            description={achievement.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Achievement
