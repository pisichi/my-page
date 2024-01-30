import React, { ReactNode } from 'react'
import {
  BootstrapPlain,
  CsharpLine,
  DockerOriginal,
  ElectronOriginal,
  ExpressOriginal,
  GoPlain,
  JavaPlain,
  LaravelOriginal,
  PhpPlain,
  PythonOriginal,
  ReactOriginal,
  SassOriginal,
  SolidityOriginal,
  TailwindcssOriginal,
  TypescriptPlain,
  VuejsOriginal,
  YamlPlain
} from 'devicons-react'
import { FaEthereum, FaGithub } from 'react-icons/fa'
import IconWrapper from '@/components/Icons/IconWrapper'

const projectsData = () => {
  const iconSize = 22

  const MemoizedIconWrapper = React.memo(IconWrapper)

  const iconColors = [
    '#00E676',
    '#A7FFEB',
    '#F4FF81',
    '#9CCC65',
    '#F57F17',
    '#9FA8DA',
    '#7E57C2',
    '#FFAB91',
    '#D7CCC8'
  ]

  const projectContent = (
    repoLink: string,
    stack: StackItem[],
    description: string,
    summary: string
  ): ReactNode => {
    return (
      <div>
        <section>
          <div className="mb-2 font-bold">OverView</div>
          <p>{summary}</p>
        </section>

        <section className="mb-4">
          <div className="flex flex-wrap items-center">
            {stack &&
              stack.map((icon, index) => (
                <div
                  key={index}
                  className={`hexagon2 z-5 mr-2 p-[2px] shadow-md`}
                  style={{ backgroundColor: 'black' }}
                >
                  <div
                    className="hexagon p-[0.5rem]"
                    style={{ backgroundColor: 'white' }}
                  >
                    <MemoizedIconWrapper iconColor={null}>
                      {icon.component}
                    </MemoizedIconWrapper>
                  </div>
                </div>
              ))}
          </div>
        </section>
        <section className="mb-4">
          <div className="mb-1 flex items-center align-middle">
            <FaGithub size={18} className="mr-1" />
            <a
              href={repoLink}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </div>
        </section>
      </div>
    )
  }

  const projects = [
    {
      title: 'This Very Site👋',
      img_url: 'https://placehold.co/600x400',
      tags: ['practice'],
      stack: [
        {
          component: <ReactOriginal size={iconSize} />,
          color: iconColors[0],
          key: 'ReactOriginal'
        },
        {
          component: <TypescriptPlain size={iconSize} />,
          color: iconColors[0],
          key: 'TypescriptPlain'
        },
        {
          component: <TailwindcssOriginal size={iconSize} />,
          color: iconColors[0],
          key: 'TailwindcssOriginal'
        },
        {
          component: <SassOriginal size={iconSize} />,
          color: iconColors[0],
          key: 'SassOriginal'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Fabric-Manager',
      img_url: 'https://raw.githubusercontent.com/new4761/Fabric-Manager/master/.github/images/ex2.PNG',
      tags: ['academic'],
      stack: [
        {
          component: <VuejsOriginal size={iconSize} />,
          color: iconColors[1],
          key: 'Vue'
        },
        {
          component: <ElectronOriginal size={iconSize} />,
          color: iconColors[1],
          key: 'ElectronOriginal'
        },
        {
          component: <TypescriptPlain size={iconSize} />,
          color: iconColors[1],
          key: 'TypescriptPlain'
        },
        {
          component: <GoPlain size={iconSize} />,
          color: iconColors[1],
          key: 'GoPlain'
        },
        {
          component: <DockerOriginal size={iconSize} />,
          color: iconColors[1],
          key: 'DockerOriginal'
        },
        {
          component: <SassOriginal size={iconSize} />,
          color: iconColors[1],
          key: 'SassOriginal'
        },
        {
          component: <YamlPlain size={iconSize} />,
          color: iconColors[1],
          key: 'DockerOriginal'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'EPUB Auto Editor',
      img_url: 'https://raw.githubusercontent.com/pisichi/epub-auto-editor/main/docs/images/visualize.png',
      tags: ['practice'],
      stack: [
        {
          component: <PythonOriginal size={iconSize} />,
          color: iconColors[2],
          key: 'PythonOriginal'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Restaurants-list-Vue-Laravel',
      img_url:
        'https://camo.githubusercontent.com/3075f7e5fd2926a030036fe8dc43771659957469ddd8ffc8f8c0a0985bccac30/68747470733a2f2f692e696d6775722e636f6d2f4d4b543268746e2e706e67',
      tags: ['practice'],
      stack: [
        {
          component: <PhpPlain size={iconSize} />,
          color: iconColors[3],
          key: 'JavaPlain'
        },
        {
          component: <VuejsOriginal size={iconSize} />,
          color: iconColors[3],
          key: 'VuejsOriginal'
        },
        {
          component: <LaravelOriginal size={iconSize} />,
          color: iconColors[3],
          key: 'LaravelOriginal'
        },
        {
          component: <BootstrapPlain size={iconSize} />,
          color: iconColors[3],
          key: 'BootstrapPlain'
        }
      ],
      repo_url: 'https://github.com/pisichi/Restaurants-list-Vue-Laravel',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description:
        'simple Webapplication to show a list of Restaurants by using Google Map API with Vue and Laravel framework.'
    },
    {
      title: 'Covid 2019 Tracker JSP',
      img_url: 'https://raw.githubusercontent.com/pisichi/Covid-tracking-jsp/master/docs/preview_3.jpg',
      tags: ['academic'],
      stack: [
        {
          component: <JavaPlain size={iconSize} />,
          color: iconColors[4],
          key: 'JavaPlain'
        }
      ],
      repo_url: 'https://github.com/pisichi/Covid-tracking-jsp',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description:
        'Covid tracking web application using java JSP and java servlet rest api.'
    },
    {
      title: 'TALES-WAR',
      img_url: 'https://raw.githubusercontent.com/pisichi/TALES-WAR/master/Content/sprites/menu_4.png',
      tags: ['fun', 'academic'],
      stack: [
        {
          component: <CsharpLine size={iconSize} />,
          color: iconColors[5],
          key: 'CsharpLine'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'A Turn-based shooting game using monogame engine.'
    },
    {
      title: 'Lóng Ball',
      tags: ['fun', 'academic'],
      img_url:
        'https://camo.githubusercontent.com/44f153e04096cc8e078631efd3cac3bf6baf23d7c04e3869ef23f12a01cf0ac3/68747470733a2f2f692e696d6775722e636f6d2f66707548436e702e706e67',
      stack: [
        {
          component: <CsharpLine size={iconSize} />,
          color: iconColors[6],
          key: 'CsharpLine'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'A Bubble shooting game created with Monogame engine.'
    },
    {
      title: 'Campaign webapp solidity',
      tags: ['academic'],
      img_url:
        'https://camo.githubusercontent.com/d7636ca09c016cbe1a25532143277459f1ae63559f7e4d1ef6bbea20c04a3f0b/68747470733a2f2f692e696d6775722e636f6d2f553335755250562e706e67',
      stack: [
        {
          component: <SolidityOriginal size={iconSize} />,
          color: iconColors[7],
          key: 'SolidityOriginal'
        },
        {
          component: <FaEthereum color="black" size={iconSize} />,
          color: iconColors[7],
          key: 'SolidityOriginal'
        },
        {
          component: <ExpressOriginal size={iconSize} />,
          color: iconColors[7],
          key: 'SolidityOriginal'
        },
        {
          component: <BootstrapPlain size={iconSize} />,
          color: iconColors[7],
          key: 'SolidityOriginal'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description: 'An campaign voting DApp for Ethereum network.'
    },
    {
      title: 'hangman-docker',
      tags: ['fun', 'academic'],
      img_url:
        'https://camo.githubusercontent.com/9b216e1b1603498215496982ebb7b5202aa5271d7b699a7bafa926b95cd3221d/68747470733a2f2f692e696d6775722e636f6d2f3165544b75716d2e706e67',
      stack: [
        {
          component: <JavaPlain size={iconSize} />,
          color: iconColors[8],
          key: 'JavaPlain'
        },
        {
          component: <DockerOriginal size={iconSize} />,
          color: iconColors[8],
          key: 'DockerOriginal'
        }
      ],
      repo_url: 'https://github.com/pisichi/dev_Fabric_Manager',
      repo_summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      description:
        'Dockerize server and client-side Java Multiplayer Hangman game.'
    }
  ]

  return projects.map((project, index) => {
    return {
      ...project,
      content: projectContent(
        project.repo_url,
        project.stack,
        project.description,
        project.repo_summary
      )
    }
  })
}
export default projectsData
