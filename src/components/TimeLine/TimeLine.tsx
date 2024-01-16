import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'
import './TimeLine.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faComment, faCheck } from '@fortawesome/free-solid-svg-icons'

interface TimeLineProps {
  History: { year: string; events: { name: string; content: string }[] }[]
}

const TimeLine: React.FC<TimeLineProps> = ({ History }) => {
  const { isDark } = useDarkMode()

  return (
    <div
      className={`z-11 bg-green rounded-md p-4 shadow-md ${
        isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:ml-[8.75rem] md:before:translate-x-0">
        {History.map((item, index) => (
          <div className="relative" key={index}>
            <div className="mb-3 items-center md:flex md:space-x-4">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow md:order-1">
                  {index === 0 ? (
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-emerald-500"
                    />
                  ) : index === 1 || index === 2 || index === 3 ? (
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-slate-300"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faCheck} className="text-red-500" />
                  )}
                </div>
                {/* Date */}
                <time className="font-caveat text-xl font-medium text-indigo-500 md:w-28">
                  {item.year}
                </time>
              </div>
              {/* Title */}
              <div className="ml-14 text-slate-500">
                <span className="font-bold text-slate-900">
                  {item.events[0].name}
                </span>{' '}
                {item.events[0].content}
              </div>
            </div>
            {/* Card */}
            <div className="ml-14 rounded border border-slate-200 bg-white p-4 text-slate-500 shadow md:ml-44">
              {item.events[0].content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeLine
