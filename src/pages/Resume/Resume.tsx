import './Resume.scss'

import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedin,
  FaMedal,
  FaPhone,
  FaSuitcase
} from 'react-icons/fa'

const Resume = () => {
  return (
    <div className="cv-body flex justify-center overflow-auto bg-white">
      <div className="z-50 bg-white">
        <div className="flex flex-row bg-white">
          <div id="main">
            <div className="relative z-50 pb-[0.125in] pl-[0.3in] pt-[0.3in] ">
              <div className="relative">
                <h1 className="text-2xl !font-extrabold uppercase">
                  Pisitchai Siriratanachaikul
                </h1>
                <span className="subtitle text-[14px] font-bold uppercase text-red-500">
                  {'< full stack developer | Software Engineer />'}
                </span>
              </div>
              <div className="mt-3 w-[46em] text-[12px] font-normal">
                Passionate tech enthusiast with a keen focus on software
                development, especially within the field of web development.
                Proven experience as a Full Stack developer. Eager to explore
                diverse areas and continuously expanding my skill set.
              </div>
            </div>
            <div className="mx-auto mb-[2px] h-[3px] w-[95%] bg-gray-600"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[90%] bg-gray-400"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[85%] bg-red-300"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[75%] bg-red-200"></div>

            <section className="main-block pt-6">
              <h2>
                <FaSuitcase
                  color="#E53935"
                  size={18}
                  className="absolute -left-[27.25px] z-10 bg-white"
                ></FaSuitcase>
                <span className="highlight-text font-bold uppercase text-red-500">
                  {'{ Professional Experiences }'}
                </span>
              </h2>
              <section className="blocks">
                <div className="date">
                  <span>2023</span>
                  <span>2021</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      Full Stack Developer
                    </h3>
                    <span className="place">
                      <span className="font-bold text-blue-500">
                        {' '}
                        ZUPPORTS{' '}
                      </span>{' '}
                      (Startup from
                      <span className="font-bold text-red-500"> SCG</span> Zero
                      to One)
                    </span>
                    <span className="location">Bangkok, Thailand</span>
                  </header>
                  <div>
                    <div>
                      An internal startup of{' '}
                      <span className="font-bold">
                        {' '}
                        Siam Cement Group (SCG){' '}
                      </span>{' '}
                      that deliver digital transformation for B2B supply chain.
                    </div>
                    <ul>
                      <li>
                        Building highly scalable web applications using
                        Nuxt,Vuetify, Laravel and AWS.
                      </li>
                      <li>
                        Developing, maintaining, and enhancing software
                        solutions to meet the company's goals.
                      </li>
                      <li>
                        Utilized Agile development methodologies to ensure
                        efficient project management and faster delivery of
                        high-quality software.
                      </li>
                      <li>
                        Collaborated closely with a cross-functional team of
                        designers, project owners, and testers, ensuring a
                        comprehensive understanding of problem requirements.
                        Worked collectively to design software solutions that
                        precisely aligned with the specified requirements.
                        Proficient in breaking down complex problems into
                        technical tasks to facilitate efficient development
                        processes.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
            <section className="main-block pt-2">
              <h2>
                <FaMedal
                  color="#E53935"
                  size={18}
                  className="absolute -left-[27.25px] z-10 bg-white"
                ></FaMedal>
                <span className="highlight-text font-bold uppercase text-red-500">
                  {'{ Achievements }'}
                </span>
              </h2>
              <section className="blocks">
                <div className="date">
                  <span>2022</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      Dev. Mountain Tech Festival
                    </h3>
                    <span className="place "> React, Tailwind, Solidity</span>
                    <span className="location text-[11px] font-extrabold !text-red-500">
                      First Place🥇
                    </span>
                  </header>
                  <div>
                    Tackled the challenge of "Certificate verification for
                    education" using Solidity Contract (ERC721), ensuring the
                    credibility of certificates and educational institution
                    issuers. Also, we won the hackathon.
                  </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2020</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">TWBG Hackathon</h3>
                    <span className="place">Solidity, Vue, Vuetify</span>
                  </header>
                  <div>
                    Utilize Blockchain to assist in validation by granting
                    rights to relevant logistics companies to update and share
                    information. Use tokens to confirm operations at various
                    stages by awarding tokens to the operators in those specific
                    stages. Utilize the transaction history of these tokens to
                    track the processes and steps involved in the work, aiding
                    in document management.
                  </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2020</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      ASEAN Data Science Explorer
                    </h3>
                    <span className="place">SAP</span>
                    <span className="location text-[11px] font-extrabold !text-red-500">
                      National Finals
                    </span>
                  </header>
                  <div>
                    Sustainable Slum Transformation. Gather and analyze data in
                    ASEAN countries to find and solve the problem using SAP
                    tools.
                  </div>
                </div>
              </section>
            </section>
            <section className="main-block pt-2">
              <h2>
                <FaLaptopCode
                  color="#E53935"
                  size={18}
                  className="absolute -left-[27.25px] z-10 bg-white"
                ></FaLaptopCode>
                <span className="highlight-text font-bold uppercase text-red-500">
                  {'{ Projects }'}
                </span>
              </h2>
              <section className="blocks">
                <div className="date">
                  <span></span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">Fabric-Manager</h3>
                    <span className="place">
                      Minifabric, Ansible, Docker, Node, Electron, Vue, Fabric
                      node SDK
                    </span>
                  </header>
                  <div>
                    A GUI application designed to assist developers in their
                    journey of learning and developing with Hyperledger Fabric.
                    This tool provides essential features to streamline the
                    setup of development environments and facilitates the
                    testing of applications and smart contracts.
                  </div>
                </div>
              </section>
            </section>
            <section className="main-block concise pt-2">
              <h2>
                <FaGraduationCap
                  color="#E53935"
                  size={18}
                  className="absolute -left-[27.25px] z-10 bg-white"
                ></FaGraduationCap>
                <span className="highlight-text font-bold uppercase text-red-500">
                  {'{ Education }'}
                </span>
              </h2>
              <section className="blocks">
                <div className="date">
                  <span>2020</span>
                  <span>2017</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      Bachelor’s degree ,Computer Science
                    </h3>
                    <span className="place">
                      King Mongkut's Institute of Technology Ladkrabang (KMITL)
                    </span>
                    <span className="location">Bangkok, Thailand</span>
                  </header>
                  <div>
                    GPA: 3.64 (First Class Honors🥇) <br />
                    CS CAMP 10, 11 KMITL 2018 - 2019 <br />
                    <span className="font-bold underline">
                      Relevant Coursework:
                    </span>{' '}
                    Software Engineering, Object-Oriented Programming, Data
                    Structure and Algorithm, Operating Systems, Artificial
                    Intelligence, Machine Learning, Blockchain, Big Data
                    Analysis, Design Pattern.
                  </div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2017</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      Science & Mathematics Program
                    </h3>
                    <span className="place">Bodindecha (sing singhaseni)</span>
                    <span className="location">Bangkok, Thailand</span>
                  </header>
                  <div>GPA 3.49</div>
                </div>
              </section>
              <section className="blocks">
                <div className="date">
                  <span>2011</span>
                </div>
                <div className="decorator"></div>
                <div className="details">
                  <header>
                    <h3 className="font-bold text-gray-600">
                      Science & Mathematics Program
                    </h3>
                    <span className="place">
                      Bodindecha (sing singhaseni) 2
                    </span>
                    <span className="location">Bangkok, Thailand</span>
                  </header>
                  <div>GPA 3.71</div>
                </div>
              </section>
            </section>
          </div>

          <div id="sidebar">
            <div
              className="side-block relative z-10 -m-5 -mb-4 bg-gray-600 p-5 pb-1 text-white"
              id="contact"
            >
              <div className="rounded-full border-[2.5px] border-red-200 p-[0.2em]">
                <div className="rounded-full border-[3px] border-gray-400 p-[0.2em]">
                  <img
                    src="https://raw.githubusercontent.com/pisichi/my-page/main/docs/images/maface.jpg"
                    alt="Name"
                    className={`size-34 mx-auto aspect-square rounded-full border-4 object-cover transition-transform`}
                  />
                </div>
              </div>

              <div className="mb-1.5 mt-3 flex content-center align-middle">
                <div className="mr-1 rounded-full bg-white p-1">
                  <FaGlobe color="#F44336"></FaGlobe>
                </div>
                <div className="my-auto text-[10px]">
                  <a
                    href="https://pisichi.github.io/my-page/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    pisichi.github.io/my-page
                  </a>
                </div>
              </div>

              <div className="mb-1.5 flex content-center align-middle">
                <div className="mr-1 rounded-full bg-white p-1">
                  <FaGithub color="#F44336"></FaGithub>
                </div>
                <div className="my-auto text-[10px]">
                  <a
                    href="https://github.com/pisichi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/pisichi
                  </a>
                </div>
              </div>

              <div className="mb-1.5 flex content-center align-middle">
                <div className="mr-1 rounded-full bg-white p-1">
                  <FaLinkedin color="#F44336"></FaLinkedin>
                </div>
                <div className="my-auto text-[10px]">
                  <a
                    href="https://www.linkedin.com/in/pisitchaisiri/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/pisitchaisiri
                  </a>
                </div>
              </div>

              <div className="mb-1.5 flex content-center align-middle">
                <div className="mr-1 rounded-full bg-white p-1">
                  <FaEnvelope color="#F44336"></FaEnvelope>
                </div>
                <div className="my-auto text-[10px]">
                  pisitchai.sirirat@gmail.com
                </div>
              </div>

              <div className="mb-1.5 flex content-center align-middle">
                <div className="mr-1 rounded-full bg-white p-1">
                  <FaPhone color="#F44336"></FaPhone>
                </div>
                <div className="my-auto text-[10px]">+66953895461</div>
              </div>
            </div>

            <div className="mx-auto mb-[2px] mt-[18px] h-[3px] w-[100%] bg-gray-600"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[80%] bg-gray-400"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[70%] bg-red-300"></div>
            <div className="mx-auto mb-[2px] h-[3px] w-[60%] bg-red-200"></div>
            <div className="relative z-10 mt-8" id="">
              <div className="text-[14px] !font-bold text-red-500">
                {'{ Languages }'}
              </div>
              <ul className="ml-2 mt-2 list-disc text-[10px]">
                <li className="mb-1">
                  {' '}
                  <span className="font-semibold text-gray-600"> Thai: </span>
                  Native
                </li>
                <li>
                  {' '}
                  <span className="font-semibold text-gray-600">
                    {' '}
                    English:
                  </span>{' '}
                  Upper Intermediate
                </li>
                <li>
                  <div className="">
                    <span className="text-[9px]">
                      {' '}
                      TOEIC Score: <span className="text-red-500">
                        {' '}
                        930{' '}
                      </span>{' '}
                    </span>{' '}
                    <span className="text-[7px]"> (2021) </span>
                  </div>
                </li>
              </ul>

              <div className="mt-8 text-[14px] !font-bold text-red-500">
                {'{ Skills }'}
              </div>

              <div className="mb-1 mt-3 !font-semibold italic">
                Experienced In:
              </div>
              <ul className="ml-2 list-disc text-[10px]">
                {/* <li>
              <div className="flex">
                <div className="mr-1">
                  <IconWrapper iconColor={'#F44336'}>
                    <ReactOriginal size={11} />
                  </IconWrapper>
                </div>
                HTML5
              </div>
            </li> */}
                <li>HTML5</li>
                <li>Node</li>
                <li>Vue | Nuxt</li>
                <li>React</li>
                <li>Boostrap | Vuetify | Tailwind</li>
                <li>Electron</li>
                <li>Css | Sass</li>
                <li>Java</li>
                <li>Python</li>
                <li>Es6 | TypeScript</li>
                <li>Laravel | Php</li>
                <li>MySql</li>
                <li>Git</li>
                <li>Docker</li>
              </ul>

              <div className="mb-1 mt-4 !font-semibold italic">
                Exposure To:
              </div>
              <ul className="ml-2 list-disc text-[10px]">
                <li>MongoDB</li>
                <li>K8s</li>
                <li>AWS</li>
                <li>Jira</li>
                <li>Trello</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
