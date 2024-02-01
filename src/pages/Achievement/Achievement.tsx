import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import achievementsData from 'data/achievementsData'
import React, { useState } from 'react'

import Reveal from '@/components/Utils/Reveal'

const Achievement: React.FC = () => {
  const achievements = achievementsData
  const { isDark } = useDarkMode()

  return (
    <div className={`px-3`}>
      <div className="pt-3">
        <Reveal>
          <div
            className={`text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-green-300' : 'text-green-700'
            } `}
          >
            {'{ Achievement }'}
          </div>
        </Reveal>
      </div>

      <div className=" justify-center">
        <Reveal width="90%">
          <div className={`my-5 h-[4px] bg-gray-400`}></div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal index={index} key={`achiv-page-${index}`}>
            <ArticleCard
              title={achievement.title}
              img_url={achievement.img_url}
              stack={achievement.stack}
              content={achievement.content}
              description={achievement.description}
            />
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Achievement
