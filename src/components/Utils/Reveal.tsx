import { motion, useAnimation, useInView, useIsPresent } from 'framer-motion'
import React, { ReactNode, useEffect, useRef } from 'react'

interface RevealProps {
  children: ReactNode
  width?: 'fit-content' | '100%'
  className?: string
}

const Reveal: React.FC<RevealProps> = ({
  children,
  width = 'fit-content',
  className = ''
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

  return (
    <div
      ref={ref}
      style={{ position: 'relative', width, overflow: 'hidden' }}
      className={className}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        initial="hidden"
        animate={slideControls}
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: '#69F0AE',
          zIndex: 20
        }}
      /> */}
    </div>
  )
}

export default Reveal
