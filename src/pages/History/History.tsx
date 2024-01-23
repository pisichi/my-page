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
      year: '2017 – 2020',
      events: [
        {
          name: 'Bachelor’s degree ,Computer Science',
          content: (
            <ul className="list-inside list-disc space-y-4">
              <li>
                <strong>
                  King Mongkut's Institute of Technology Ladkrabang
                </strong>
                <p className="mb-2">GPA: 3.64 (First Class Honors)</p>

                <ul className="list-inside list-disc pl-4">
                  <li>CS CAMP 10, 11 KMITL 2018 - 2019</li>
                  <li>TWBG Hackathon 2020</li>
                  <li>ASEAN Data Science Explorer (National Final) 2020</li>
                </ul>
              </li>
            </ul>
          )
        }
      ]
    },
    {
      year: '2011 – 2017',
      events: [
        {
          name: 'Science & Mathematics Program',
          content: (
            <div>
              <ul className="list-inside list-disc space-y-1">
                <li>Bodindecha (sing singhaseni) 2 GPA 3.71</li>
                <li> Bodindecha (sing singhaseni) GPA 3.49 </li>
              </ul>
            </div>
          )
        }
      ]
    }
  ]

  return (
    <div className={``}>
      <h1
        className={`text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My Projects
      </h1>
      <div>
        <TimeLine History={history} />
      </div>
    </div>
  )
}

export default History
