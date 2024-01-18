import React from 'react'
import './TimeLine.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { useDarkMode } from 'context/DarkModeContext'

interface TimeLineProps {
  History: { year: string; events: { name: string; content: string }[] }[]
}

const TimeLine: React.FC<TimeLineProps> = ({ History }) => {
  const { isDark } = useDarkMode()

  const timelineElements = History.flatMap((yearData, yearIndex) => {
    return yearData.events.map((event, eventIndex) => (
      <VerticalTimelineElement
        key={`timeline-${yearIndex}-${eventIndex}`}
        className={`${isDark ? 'dark-mode' : ''}`}
        contentStyle={{
          background: isDark ? '#1e293b' : '#f1f5f9',
          color: isDark ? '#ffffff' : '#000000'
        }}
        contentArrowStyle={{
          display: 'none'
        }}
        iconStyle={{
          background: isDark ? '#1e293b' : '#c4dce0',
          color: isDark ? '#ffffff' : '#000000'
        }}
        icon={<div className="vertical-timeline-circle-pulsating"></div>}
      >
        <h3 className="">{event.name}</h3>
        <p className="">({yearData.year})</p>
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          nam libero molestias veritatis minus nihil corrupti earum id fugit
          quas possimus iusto, deserunt beatae. Fuga ullam tenetur laborum.
          Fugit, impedit! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Eaque sequi ullam veniam nam eveniet optio omnis, asperiores
          consectetur illum cupiditate quisquam vero voluptatum, similique
          dignissimos neque modi beatae reiciendis ipsam?
        </p>
      </VerticalTimelineElement>
    ))
  })

  return (
    <div
      className={`z-11 py-4 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}
    >
      <VerticalTimeline
        layout="1-column-right"
        animate={true} // Enable animations
        lineColor={isDark ? '#1e293b' : 'white'} // Customize timeline color
        className="custom-timeline-class" // Add extra class name to root div element
      >
        {timelineElements}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine
