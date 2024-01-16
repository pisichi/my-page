import './ParticleBackground.css'

import type { Container } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useDarkMode } from 'context/DarkModeContext'
import { useCallback, useEffect, useState } from 'react'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)
  const { isDark } = useDarkMode()

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container)
    }
  }

  if (init) {
    return (
      init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'repulse'
                }
              },
              modes: {
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
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
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 2,
                straight: false
              },
              number: {
                density: {
                  enable: true
                },
                limit: {
                  value: 150,
                  mode: 'delete'
                },
                value: 120
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: { min: 1, max: 5 }
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
