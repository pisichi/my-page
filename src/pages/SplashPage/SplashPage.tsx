// SplashPage.tsx
import React from 'react'

const SplashPage: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-900 text-white">
      <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-blue-500"></div>
    </div>
  )
}

export default SplashPage
