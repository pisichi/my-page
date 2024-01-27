import ProjectCard from 'components/Card/ProjectCard'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'
import tournamentsData from 'data/tournamentsData'

const Tournament: React.FC = () => {
  const { isDark } = useDarkMode()

  const tournaments = tournamentsData

  return (
    <div className={`px-3`}>
      <h1
        className={`mb-8 text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My tournaments
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((tournament, index) => (
          <ProjectCard
            key={index}
            title={tournament.title}
            img_url={tournament.img_url}
            stack={tournament.stack}
            content={tournament.content}
            description={tournament.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Tournament
