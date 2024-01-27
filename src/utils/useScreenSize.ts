import { useEffect, useState } from 'react'

interface ScreenSize {
  isMobile: boolean
}

const useScreenSize = (): ScreenSize => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    // Initial check on component mount
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile }
}

export default useScreenSize
