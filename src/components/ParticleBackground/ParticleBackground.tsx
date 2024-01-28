import './ParticleBackground.scss'
import type { Container } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useDarkMode } from 'context/DarkModeContext'
import { useCallback, useEffect, useState } from 'react'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)
  const { isDark } = useDarkMode()
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (init) {
    return (
      init && (
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 75,
            interactivity: {
              events: {
                onClick: {
                  enable: false // Disable click interaction
                },
                onHover: {
                  enable: false // Disable hover interaction
                }
              }
            },
            particles: {
              color: {
                value: isDark ? '#ffffff' : '#000000'
              },
              links: {
                color: isDark ? '#ffffff' : '#000000',
                distance: 150, // Adjust the distance for links
                enable: true,
                opacity: 0.5, // Reduce link opacity
                width: 1
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'out'
                },
                random: false,
                speed: 1, // Adjust particle speed
                straight: false
              },
              number: {
                density: {
                  enable: true
                },
                limit: {
                  value: 120, // Adjust the particle limit
                  mode: 'delete'
                },
                value: 120 // Adjust the initial particle value
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 5 } // Adjust the size range
              }
            },
            detectRetina: true
          }}
        />
      )
    )
  } else {
    return <></>
  }
}

export default ParticleBackground
