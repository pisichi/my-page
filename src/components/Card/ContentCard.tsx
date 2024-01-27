import React, { ReactNode } from 'react'

interface ContentCardProps {
  title: string
  rows: number
  content: ReactNode
}

const ContentCard: React.FC<ContentCardProps> = ({ title, rows, content }) => {
  return (
    <div className="border border-gray-300 p-4">
      <p className="text-lg font-bold">{title}</p>
      {[...Array(rows)].map((_, index) => (
        <div key={index} className="mb-2">
          {content}
        </div>
      ))}
    </div>
  )
}

export default ContentCard
