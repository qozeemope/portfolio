import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import stableborrow from "../assets/stableborrow.png"
import tyrion from "../assets/tyrion.png"
import chatit from "../assets/chatit.jpeg"
import portfolio from "../assets/portfolio.png"
import github from "../assets/github.png"
import link from "../assets/link.png"
import Glowline from '../components/Glowline'

function Projects() {
  const projects = [
    {
      name: "Stableborrow",
      image: stableborrow,
      scope: "FULLSTACK",
      year: 2023,
      description:
        "Stable borrow(STB) is a web3 platform with an inbuilt Defi, Gamefi and Dex protocols that enable users borrow STC using XDC and earn as they play as a gamer and exchange tokens.",
      tech: ["React", "Javascript", "TailwindCSS"],
      live_url: "https://www.stableborrow.com/",
      github: "https://github.com/STB-Stable-Borrow/stable-borrow-mvp",
    },
    {
      name: "Tyrion",
      image: tyrion,
      scope: "FULLSTACK",
      year: 2023,
      description:
        "Tyrion is an e-cormmerce and decentralize exchange with unique AMM and supports p2p and more.",
      tech: ["React", "Javascript", "TailwindCSS"],
      live_url: "https://tyrion-two.vercel.app/",
      github: "https://github.com/TYRIONSTORE/tyrion",
    },
    {
      name: "ChatIT",
      image: chatit,
      scope: "FULLSTACK",
      year: 2023,
      description: "",
      tech: ["React", "Javascript", "TailwindCSS"],
      live_url: "https://chatit-sigma.vercel.app/",
      github: "https://github.com/CHATit-Organization/CHATit",
    },
    {
      name: "Porfolio",
      image: portfolio,
      scope: "Frontend",
      year: 2026,
      description: "",
      tech: ["Nextjs", "Typescript", "TailwindCSS"],
      live_url: "",
      github: "https://github.com/qozeemope/portfolio",
    },
  ]

  return (
    <div className="mt-8 flex flex-col bg-background text-text py-4 px-5 md:px-10 lg:px-20">
      

      <h1 className="font-black text-3xl md:text-4xl text-center mt-8">
        Featured <span className="text-primary">Projects</span>
      </h1>

      <Glowline />

      <p className="text-center text-text-secondary text-sm md:text-base max-w-2xl mx-auto">
        A showcase of real projects demonstrating my skills and passion for quality.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {projects.map((project) => {
          return (
            <div
              key={project.name}
              className="w-full rounded-xl bg-card overflow-hidden border border-border"
            >
              <div className="w-full h-56 sm:h-64 md:h-80">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group transition-transform duration-500 transition-all duration-300
    hover:-translate-y-2
    hover:shadow-xl
    group-hover:scale-105
"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <small className="bg-card-secondary text-text-secondary py-1 px-4 rounded-full border border-border font-black">
                    {project.scope}
                  </small>

                  <h5>{project.year}</h5>
                </div>

                <h2 className="font-bold text-text text-lg mt-2">
                  {project.name}
                </h2>

                <p className="text-text-secondary text-sm mt-2 min-h-[120px] md:h-30 italic text-justify">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2 text-xs">
                  {project.tech.map((tec) => (
                    <li
                      key={tec}
                      className="px-3 py-1 bg-card-secondary border border-border text-text-secondary rounded-full font-bold"
                    >
                      {tec}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 text-sm">
                  <Link
                    href={project.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full sm:w-auto cursor-pointer hover:bg-primary-hover/20 border border-gray-300 rounded-full px-4 py-2 flex items-center justify-center gap-2">
                      <Image
                        src={link}
                        alt="link"
                        className="w-4 h-4"
                      />
                      Live
                    </button>
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full sm:w-auto cursor-pointer hover:bg-primary-hover/20 border border-gray-300 rounded-full px-4 py-2 flex items-center justify-center gap-2">
                      <Image
                        src={github}
                        alt="github"
                        className="w-4 h-4"
                      />
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* <button className='cursor-pointer flex items-center justify-center gap-2 mb-10 mt-10 border-border border px-4 rounded-full text-sm py-2 mx-auto hover:bg-primary-hover/20'>
        <span className='text-text-secondary'>Load more projects</span>
        <Image src={arrowdown} alt='arrowdown' className='w-4'/>
      </button> */}
    </div>
  )
}

export default Projects