import TimeLine from 'components/TimeLine/TimeLine'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'

import Reveal from '@/components/Utils/Reveal'

const History: React.FC = () => {
  const { isDark } = useDarkMode()

  const history = [
    {
      year: '2024',
      events: [
        {
          name: '...',
          content: 'Coming soon...'
        }
      ]
    },
    {
      year: '2021 - 2023',
      events: [
        {
          name: 'Full Stack Developer',
          content: (
            <div>
              <p className="mb-2">
                <strong>
                  <span className="text-blue-400"> ZUPPORTS </span> (Startup
                  from <span className="text-red-400"> SCG </span> Zero to One)
                </strong>
              </p>
              <p className="mb-4">
                ZUPPORTS is an internal startup of Siam Cement Group (SCG) that
                delivers digital transformation for B2B supply chain.
              </p>
              <ul className="mb-4 list-inside list-disc pl-6">
                <li>
                  Building highly scalable web applications using Nuxt,Vuetify,
                  Laravel and AWS.
                </li>
                <li>
                  Developing, maintaining, and enhancing software solutions to
                  meet the company's goals.
                </li>
                <li>
                  Utilized Agile development methodologies to ensure efficient
                  project management and faster delivery of high-quality
                  software.
                </li>
                <li>
                  Collaborated closely with a cross-functional team of
                  designers, project owners, and testers, ensuring a
                  comprehensive understanding of problem requirements.
                </li>
                <li>
                  Proficient in breaking down complex problems into technical
                  tasks to facilitate efficient development processes.
                </li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      year: '2017 – 2020',
      events: [
        {
          name: 'Bachelor’s Degree - Computer Science',
          content: (
            <div>
              <div>
                <strong>
                  King Mongkut's Institute of Technology Ladkrabang
                </strong>
                {'  '}
                GPA: 3.64 (First Class Honors🥇)
              </div>
              <ul className="list-inside list-disc pl-4">
                <li>CS CAMP 10, 11 KMITL 2018 - 2019</li>
                <li>TWBG Hackathon 2020</li>
                <li>ASEAN Data Science Explorer (National Final) 2020</li>
              </ul>
            </div>
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
              <ul className="list-inside list-disc pl-4">
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
      <div className="flex pt-3">
        <Reveal>
          <div
            className={`text-lg font-bold uppercase md:text-2xl ${
              isDark ? 'text-green-300' : 'text-green-700'
            } `}
          >
            {'{ History }'}
          </div>
        </Reveal>
      </div>

      <div className="flex">
        <Reveal width="90%">
          <div
            className={`mb-2 mt-5 h-[4px] ${
              isDark ? 'bg-gray-400' : 'bg-gray-600'
            }`}
          ></div>
        </Reveal>
      </div>

      <Reveal>
        <p className={`mb-4  ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          My professional and educational experiences.
        </p>
      </Reveal>

      <div>
        <Reveal width="100%">
          <TimeLine History={history} />
        </Reveal>
      </div>
    </div>
  )
}

export default History
