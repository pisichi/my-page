import './Home.scss'

import ContentCard from 'components/Card/ContentCard'
import { useDarkMode } from 'context/DarkModeContext'
import React from 'react'

const Home: React.FC = () => {
  const { isDark } = useDarkMode()

  return (
    <div className="">
      {/* Big Banner - First Row */}
      <div className="mb-4">
        <p className="text-2xl font-bold">Big Banner</p>
        {/* Your Big Banner Content Goes Here */}
        <div className="border border-gray-300 p-4"></div>
      </div>

      {/* 1 Row with 4 Columns */}
      <div className="mb-4 flex">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex-1 border border-gray-300 p-2">
            Placeholder Content
          </div>
        ))}
      </div>

      {/* 1 Row with 1 Card, 5 Rows in the Card */}
      <ContentCard
        title="Card Title"
        rows={5}
        content={<div>PlaceHolder</div>}
      />

      {/* 4 Rows with 4 Columns Each */}
      {[...Array(16)].map((_, rowIndex) => (
        <div key={rowIndex} className="mb-4 flex">
          {[...Array(4)].map((_, colIndex) => (
            <div key={colIndex} className="flex-1 border border-gray-300 p-2">
              Placeholder Content
            </div>
          ))}
        </div>
      ))}

      {/* 1 Row */}
      <div className="flex">
        <div className="flex-1 border border-gray-300 p-2">
          Placeholder Content
        </div>
      </div>
    </div>
  )
}

export default Home
