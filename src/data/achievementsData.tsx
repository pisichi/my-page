import {
  GoOriginal,
  GoPlain,
  JavascriptOriginal,
  JavascriptPlain,
  ReactOriginal,
  SolidityOriginal,
  TailwindcssOriginal,
  TypescriptPlain,
  UnityOriginal,
  VuejsOriginal,
  VuetifyOriginal
} from 'devicons-react'

const iconSize = 22

const achievementsData: Article[] = [
  {
    title: 'Dev. Mountain Tech Festival(Thailand) 2022',
    img_url:
      'https://user-images.githubusercontent.com/30498964/168614013-f3be9e2c-c360-4fbd-9f85-6d24a635f407.png',
    stack: [
      {
        component: <ReactOriginal size={iconSize} />,
        color: '#2196F3',
        key: 'React'
      },
      {
        component: <TailwindcssOriginal size={iconSize} />,
        color: '#2196F3',
        key: 'React'
      },
      {
        component: <SolidityOriginal size={iconSize} />,
        color: '#2196F3',
        key: 'Solidity'
      },
      {
        component: <TypescriptPlain size={iconSize} />,
        color: '#2196F3',
        key: 'TypeScript'
      }
    ],
    content: (
      <div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold">About the Event</h2>
          <p>
            <strong>Dev. Mountain Tech Festival</strong> is a tech event in
            Thailand with top-tier developers, diverse topics, and a blockchain
            hackathon.
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
            <strong>Certificate verification for education</strong>. We won the
            hackathon.
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
    title: 'TBWG Hackathon',
    img_url:
      'https://p-u.popcdn.net/event_details/posters/000/007/528/large/61745cee5c2cea22f86b631afefec33828598772.jpg?1583182291',
    stack: [
      {
        component: <VuejsOriginal size={iconSize} />,
        color: '#D32F2F',
        key: 'Vue'
      },
      {
        component: <VuetifyOriginal size={iconSize} />,
        color: '#D32F2F',
        key: 'Vuetify'
      },
      {
        component: <SolidityOriginal size={iconSize} />,
        color: '#D32F2F',
        key: 'Solidity'
      }
    ],
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque tenetur deleniti ab pariatur libero aliquid sed et tempora nisi nostrum accusamus laboriosam inventore aut numquam ipsam nobis, dolorum assumenda sapiente?',
    description: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'The 6th Stupid Hackathon Thailand',
    img_url:
      'https://user-images.githubusercontent.com/30498964/210324880-8c204a1d-86c8-4a67-b204-575a6c220d17.png',
    stack: [
      {
        component: <UnityOriginal size={iconSize} />,
        color: '#E0F2F1',
        key: 'UnityOriginal'
      },
      {
        component: <GoPlain size={iconSize} />,
        color: '#E0F2F1',
        key: 'GoPlain'
      },
      {
        component: <JavascriptPlain size={iconSize} />,
        color: '#E0F2F1',
        key: 'GoPlain'
      },
      {
        component: <TypescriptPlain size={iconSize} />,
        color: '#E0F2F1',
        key: 'GoPlain'
      },
      {
        component: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 1 12 L 1 36 L 26 36 L 50 12 Z M 8.398438 18 C 11.800781 18 12.902344 18.800781 12.902344 18.800781 C 12.902344 18.800781 12.300781 20.300781 12 21.097656 C 11 20.699219 7 20 7 21.5 C 7 22.101563 7.199219 22.5 10.199219 23.199219 C 11.398438 23.5 13.199219 24.101563 13.597656 25.902344 L 16.699219 18 L 20.199219 18 L 24 27.5 L 24 18 L 28.5 18 C 31 18 33 20 33 22.5 C 33 25 31 27 28.5 27 L 27 27 L 27 30 L 21.5 30 L 20.902344 28.199219 C 20.199219 28.5 19.398438 28.699219 18.5 28.699219 C 17.601563 28.699219 16.800781 28.5 16.097656 28.199219 L 15.5 30 L 12 30 L 12.5 28.800781 C 11.601563 29.5 10.199219 30 8.398438 30 C 5.101563 30 4 29.097656 4 29.097656 L 4.800781 26.5 C 6.699219 27.699219 10.097656 27.5 10.097656 26.5 C 10.097656 25.5 8.601563 25.402344 6.601563 24.800781 C 4.699219 24.199219 4 22.699219 4 21.402344 C 4 20.101563 5 18 8.398438 18 Z M 27 21 L 27 24 L 28.5 24 C 29.300781 24 30 23.300781 30 22.5 C 30 21.699219 29.300781 21 28.5 21 Z M 18.5 21.402344 L 17 25.699219 C 17.398438 26 17.898438 26.097656 18.5 26.097656 C 19.101563 26.097656 19.601563 26 20 25.699219 Z" />
          </svg>
        ),
        color: '#E0F2F1',
        key: 'GoPlain'
      }
    ],
    content: (
      <div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold">About the Event</h2>
          <p>
            <strong>The Stupid Hackathon Thailand</strong> is a collaborative
            hackathon in thailand with non-competitive intentions and no focuses
            on business value.
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
  },
  {
    title: 'ASEAN Data Science Explorers 2020',
    img_url:
      'https://github.com/pisichi/my-page/blob/main/docs/images/achivements/ASEAN%20Data%20Science%20Explorers%202020%20Banner.png?raw=true',
    stack: [
      {
        component: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="20px"
            height="20px"
          >
            <path d="M 1 12 L 1 36 L 26 36 L 50 12 Z M 8.398438 18 C 11.800781 18 12.902344 18.800781 12.902344 18.800781 C 12.902344 18.800781 12.300781 20.300781 12 21.097656 C 11 20.699219 7 20 7 21.5 C 7 22.101563 7.199219 22.5 10.199219 23.199219 C 11.398438 23.5 13.199219 24.101563 13.597656 25.902344 L 16.699219 18 L 20.199219 18 L 24 27.5 L 24 18 L 28.5 18 C 31 18 33 20 33 22.5 C 33 25 31 27 28.5 27 L 27 27 L 27 30 L 21.5 30 L 20.902344 28.199219 C 20.199219 28.5 19.398438 28.699219 18.5 28.699219 C 17.601563 28.699219 16.800781 28.5 16.097656 28.199219 L 15.5 30 L 12 30 L 12.5 28.800781 C 11.601563 29.5 10.199219 30 8.398438 30 C 5.101563 30 4 29.097656 4 29.097656 L 4.800781 26.5 C 6.699219 27.699219 10.097656 27.5 10.097656 26.5 C 10.097656 25.5 8.601563 25.402344 6.601563 24.800781 C 4.699219 24.199219 4 22.699219 4 21.402344 C 4 20.101563 5 18 8.398438 18 Z M 27 21 L 27 24 L 28.5 24 C 29.300781 24 30 23.300781 30 22.5 C 30 21.699219 29.300781 21 28.5 21 Z M 18.5 21.402344 L 17 25.699219 C 17.398438 26 17.898438 26.097656 18.5 26.097656 C 19.101563 26.097656 19.601563 26 20 25.699219 Z" />
          </svg>
        ),
        color: '#FDD835',
        key: 'SAP'
      }
    ],
    content: (
      <div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-bold">About the Event</h2>
          <p>
            <strong>The Stupid Hackathon Thailand</strong> is a collaborative
            hackathon in thailand with non-competitive intentions and no focuses
            on business value.
            <a
              href="https://aseandse.org/"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Official website
            </a>
            .
          </p>
        </div>

        <div className="mb-8">
          <p>
            In 2020, I participated in the ASEAN Data Science Explorers program
            and reached the national finals with my group. Our focus was on
            "Sustainable Slum Transformation," and we utilized SAP tools to
            gather and analyze data across ASEAN countries. The objective was to
            identify and address challenges within slum areas, showcasing the
            practical application of data science for social impact.
          </p>
        </div>

        <div className="mb-8">
          <img
            src="https://user-images.githubusercontent.com/30498964/210324880-8c204a1d-86c8-4a67-b204-575a6c220d17.png"
            alt="Edprove Logo"
            className="mt-4"
          />
        </div>
      </div>
    ),
    description: 'National Finals 2020'
  }
]

export default achievementsData
