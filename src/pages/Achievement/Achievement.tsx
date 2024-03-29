import ArticleCard from 'components/Card/ArticleCard'
import { useDarkMode } from 'context/DarkModeContext'
import achievementsData from 'data/achievementsData'
import React, { useState } from 'react'

import Reveal from '@/components/Utils/Reveal'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'

const Achievement: React.FC = () => {
  const achievements = achievementsData
  const { isDark } = useDarkMode()

  return (
    <div className={`px-3`}>
      <div className="flex pt-3">
        <Reveal>
          <div
            className={`text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-green-300' : 'text-green-700'
            } `}
          >
            {'{ Achievements }'}
          </div>
        </Reveal>
      </div>

      <div className="flex">
        <Reveal>
          <Breadcrumb />
        </Reveal>
      </div>

      <div className="flex">
        <Reveal width="100%">
          <div
            className={`mb-2 h-[4px] bg-gray-500`}
          ></div>
        </Reveal>
      </div>

      <Reveal>
        <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          Tournaments and hackathons I participated.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement, index) => (
          <Reveal className="p-2" index={index} key={`achiv-page-${index}`}>
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
