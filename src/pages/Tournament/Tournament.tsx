import ProjectCard from 'components/Card/ProjectCard'
import { useDarkMode } from 'context/DarkModeContext'
import React, { useState } from 'react'

const Tournament: React.FC = () => {
  const { isDark } = useDarkMode()

  const tournaments = [
    {
      title: 'Test1',
      img_url: 'https://p-u.popcdn.net/event_details/posters/000/007/528/large/61745cee5c2cea22f86b631afefec33828598772.jpg?1583182291',
      stack: ['node', 'docker', 'vue'],
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
      description: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Dev. Mountain Tech Festival(Thailand) 2022',
      img_url:
        'https://user-images.githubusercontent.com/30498964/168614013-f3be9e2c-c360-4fbd-9f85-6d24a635f407.png',
      stack: ['node', 'docker', 'vue'],
      content: (
        <div>
          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">About the Event</h2>
            <p>
              <strong>Dev. Mountain Tech Festival</strong> is a tech event in
              Thailand with top-tier developers, diverse topics, and a
              blockchain hackathon.
              <a
                href="https://www.facebook.com/devmountaintechfestival/?ref=page_internal"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook page
              </a>
              .
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">About the Repo</h2>
            <p>
              This repository is for Edprove frontend (React). View our{' '}
              <a
                href="https://docs.google.com/presentation/d/16d5bD5Ru74sfditDaeJPu73X5vpyMydQS6dL8hUu3EQ/edit#slide=id.g11e4d075bea_1_27"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                presentation (Thai)
              </a>
              .
            </p>
            <img
              src="https://user-images.githubusercontent.com/30498964/169844946-d738dd5d-e51a-4e80-a409-6f8551150a4e.png"
              alt="Edprove Logo"
              className="mt-4"
            />
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">Hackathon Challenge</h2>
            <p>
              Solving the challenge of{' '}
              <strong>Certificate verification for education</strong>. We won
              the hackathon.
            </p>
            <img
              src="https://user-images.githubusercontent.com/30498964/168614013-f3be9e2c-c360-4fbd-9f85-6d24a635f407.png"
              alt="Hackathon Winner"
              className="mt-4"
            />
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">Our Solution</h2>
            <p>
              Created <strong>Eduprove</strong>, a platform for certificate
              verification using blockchain.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">Team Members</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/new4761"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @new4761
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/markkj"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @markkj
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Endifly"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Endifly
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/noppon11"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @noppon11
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pisichi"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @pisichi
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
      description: '1st place'
    },
    {
      title: 'The 6th Stupid Hackathon Thailand',
      img_url:
        'https://user-images.githubusercontent.com/30498964/210324880-8c204a1d-86c8-4a67-b204-575a6c220d17.png',
      stack: ['node', 'docker', 'vue'],
      content: (
        <div>
          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">About the Event</h2>
            <p>
              <strong>The Stupid Hackathon Thailand</strong> is a collaborative
              hackathon in thailand with non-competitive intentions and no
              focuses on business value.
              <a
                href="https://stupid.hackathon.in.th/6/#projects"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook page
              </a>
              .
            </p>
          </div>

          <div className="mb-8">
            <img
              src="https://user-images.githubusercontent.com/30498964/210324880-8c204a1d-86c8-4a67-b204-575a6c220d17.png"
              alt="Edprove Logo"
              className="mt-4"
            />

            <img
              src="https://user-images.githubusercontent.com/30498964/210324937-5a205003-2a4d-4a12-b1ef-f26ba7e91acb.png"
              alt="Edprove Logo"
              className="mt-4"
            />

            <img
              src="https://user-images.githubusercontent.com/30498964/210324953-57707ca3-f4d4-4597-8e48-0bf5b6a4743b.png"
              alt="Edprove Logo"
              className="mx-auto mt-4"
            />
          </div>

          <div className="mb-8">
            <h2 className="mb-2 text-xl font-bold">Team Members</h2>
            <ul>
              <li>
                <a
                  href="https://github.com/new4761"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @new4761
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/markkj"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @markkj
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Endifly"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Endifly
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/noppon11"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @noppon11
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/pisichi"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @pisichi
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pithakthakul"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Pithakthakul
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
      description: 'Lorem ipsum dolor sit amet'
    }
  ]

  return (
    <div className={`px-3`}>
      <h1
        className={`mb-8 text-2xl font-semibold ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        My tournaments
      </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tournaments.map((tournament, index) => (
          <ProjectCard
            key={index}
            title={tournament.title}
            img_url={tournament.img_url}
            stack={tournament.stack}
            content={tournament.content}
            description={tournament.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Tournament
