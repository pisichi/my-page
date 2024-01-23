import React, { ReactNode, useState } from 'react'
import './TimeLine.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useDarkMode } from 'context/DarkModeContext'

interface TimeLineProps {
  History: { year: string; events: { name: string; content: ReactNode }[] }[]
}

const TimeLine: React.FC<TimeLineProps> = ({ History }) => {
  const { isDark } = useDarkMode()

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  const timelineElements = History.flatMap((yearData, yearIndex) => {
    return yearData.events.map((event, eventIndex) => (
      <VerticalTimelineElement
        key={`timeline-${yearIndex}-${eventIndex}`}
        className={`group ${isDark ? 'dark-mode' : ''} w-full`}
        contentStyle={{
          background: '#00000000',
          color: isDark ? '#ffffff' : '#000000'
        }}
        contentArrowStyle={{
          display: 'none'
        }}
        iconStyle={{
          background: isDark ? '#1e293b' : '#c4dce0',
          color: isDark ? '#ffffff' : '#000000'
        }}
        icon={
          <div
            className={`vertical-timeline-circle ${
              yearIndex === 0 || hoveredIndex === yearIndex
                ? 'vertical-timeline-circle-pulsating'
                : ''
            }`}
          ></div>
        }
      >
        <div
          className={`${
            isDark ? 'bg-gray-800' : 'bg-gray-100'
          } transform rounded-md p-4 transition-transform group-hover:scale-[1.01]`}
          onMouseEnter={() =>
            handleMouseEnter(yearIndex * yearData.events.length + eventIndex)
          }
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold">{event.name}</div>
            <div className="ml-2 text-gray-200">({yearData.year})</div>
          </div>
          <div
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-500'
            } text-base`}
          >
            {event.content}
          </div>
        </div>
      </VerticalTimelineElement>
    ))
  })

  return (
    <div
      className={`z-11 max-w-[1170px] mx-auto py-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}
    >
      <VerticalTimeline
        layout="1-column-right"
        animate={true}
        lineColor={isDark ? '#1e293b' : 'white'}
        className="custom-timeline-class"
      >
        {timelineElements}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine
