import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import achievementsData from 'data/achievementsData'
import React, { useState } from 'react'

const Achievement: React.FC = () => {
  const { isDark } = useDarkMode()

  const achievements = achievementsData

  return (
    <div className={`px-3`}>
      <div className="flex">
        <h2 className="mb-5 flex-1 border-b-2 border-solid border-gray-500 p-2 text-2xl font-bold">
          Achievements
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <ArticleCard
            key={`achiv-page-${index}`}
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
