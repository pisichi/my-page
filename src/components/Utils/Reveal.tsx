import { motion, useAnimation, useInView } from 'framer-motion'
import React, { ReactNode, useEffect, useRef } from 'react'

interface RevealProps {
  children: ReactNode
  width?: string
  className?: string
  index?: number // Optional index prop
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  className = '',
  index = 0
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  }

  const transitionDelay = 0.25 // Adjust as needed
  const delayFactor = index ? 1 + index * 0.25 : 1

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow: 'hidden' }}
      className={className}
    >
      <motion.div
        className="h-full"
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.25, delay: transitionDelay * delayFactor }}
      >
        {children}
      </motion.div>

      {/* <motion.div
        initial="hidden"
        animate={slideControls}
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#69F0AE',
          zIndex: 20,
        }}
      />  */}
    </div>
  )
}

export default Reveal
