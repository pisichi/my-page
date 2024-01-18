import TimeLine from 'components/TimeLine/TimeLine'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'

const History: React.FC = () => {
  const { isDark } = useDarkMode()

  const history = [
    {
      year: '2019',
      events: [
        {
          name: 'test1',
          content: 'test1 lorem lorem'
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          name: 'test1',
          content: 'test1 lorem lorem'
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          name: 'test1',
          content: 'test1 lorem lorem'
        }
      ]
    },
    {
      year: '2020',
      events: [
        {
          name: 'test1',
          content: 'test1 lorem lorem'
        }
      ]
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My Projects
      </h1>
      <div className="">
        <TimeLine History={history} />
      </div>
    </div>
  )
}

export default History
