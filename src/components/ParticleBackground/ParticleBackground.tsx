import React, { useEffect, useState, useMemo } from 'react'
import { useDarkMode } from 'context/DarkModeContext'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticleBackground = React.memo(() => {
  const [init, setInit] = useState(false)
  const { isDark } = useDarkMode()

  const particleOptions = useMemo(
    () => ({
      fpsLimit: 30,
      interactivity: {
        events: {
          onClick: {
            enable: false
          },
          onHover: {
            enable: false
          }
        }
      },
      particles: {
        color: {
          value: isDark ? '#ffffff' : '#000000'
        },
        links: {
          color: isDark ? '#ffffff' : '#000000',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none' as 'none',
          enable: true,
          outModes: {
            default: 'out' as 'out'
          },
          random: false,
          speed: 1,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 80 
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
    }),
    [isDark]
  )

  useEffect(() => {
    let unmounted = false

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      if (!unmounted) {
        setInit(true)
      }
    })

    return () => {
      unmounted = true
      // Cleanup logic (if any) when the component is unmounted
    }
  }, [])

  return init ? <Particles id="tsparticles" options={particleOptions} /> : null
})

export default ParticleBackground
