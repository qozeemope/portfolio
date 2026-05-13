import React from 'react'
import Navbar from '../Navbar'
import Image from 'next/image'
import Link from 'next/link'
import stableborrow from "../assets/stableborrow.png"
import tyrion from "../assets/tyrion.png"
import chatit from "../assets/chatit.jpeg"
import github from "../assets/github.png"
import link from "../assets/link.png"
import arrowdown from "../assets/arrowdown.png"
import Glowline from '../components/Glowline'

function Projects() {
  const projects = [
    {
      name: "Stableborrow",
      image: stableborrow,
      scope: "FULLSTACK",
      year: 2023,
      description: "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      tech: [
        "React", "Javascript", "TailwindCSS"
      ],
      live_url: "",
      github: "",
    },
    {
      name: "Tyrion",
      image: tyrion,
      scope: "FULLSTACK",
      year: 2023,
      description: "",
      tech: [
        "React", "Javascript", "TailwindCSS"
      ],
      live_url: "",
      github: "",
    },
    {
      name: "ChatIT",
      image: chatit,
      scope: "FULLSTACK",
      year: 2023,
      description: "",
      tech: [
        "React", "Javascript", "TailwindCSS"
      ],
      live_url: "https://chatit-sigma.vercel.app/",
      github: "",
    },
    {
      name: "Fancord",
      image: tyrion,
      scope: "FULLSTACK",
      year: 2023,
      description: "",
      tech: [
        "React", "Javascript", "TailwindCSS"
      ],
      live_url: "",
      github: "",
    },
  ]
  return (
   <div className="flex flex-col bg-background text-text py-4 px-20">
      <Navbar />
      <h1 className='font-black text-4xl text-center mt-8'>Featured <span className='text-primary'>Projects</span></h1>
      <Glowline />
      <p className='text-center text-text-secondary'>A showcase of real projects demonstrating my skills and passion for quality.</p>
      <div className='mt-10 grid gap-8 grid-cols-2 mt-16'>
  {projects.map((project) => {
    return (
      <div
        key={project.name}
        className='w-full rounded-xl bg-card overflow-hidden border border-border'
      >

        <div className="w-full h-80">
          <Image
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="p-4">
         <div className='flex items-center justify-between'> <small className='bg-card-secondary text-text-secondary py-1 border border-border px-4 rounded-full font-black'>{project.scope}</small>
          <h5>{project.year}</h5></div>
          <h2 className='font-bold text-text text-lg mt-2'>{project.name}</h2>
          <p className='text-text-secondary text-sm mt-2 h-30 italic text-justify'>{project.description}</p>

          <ul className='mt-4 text-xs flex gap-4'>
            {project.tech.map((tec) => (
              <li key={tec} className='px-4 bg-card-secondary border border-border text-text-secondary rounded-full font-bold'>{tec}</li>
            ))}
          </ul>

          <div className="flex gap-3 mt-4 text-sm">
           <Link href={project.live_url}>
              <button className='cursor-pointer hover:bg-primary-hover/20 border-gray-300 border rounded-full px-4 py-2 flex items-center justify-center gap-2'> 
            <Image src={link} alt="link"  className='w-4 h-4'/>Live</button> 
          
            </Link>
            <Link href={project.github}>
              <button className='cursor-pointer hover:bg-primary-hover/20 border-gray-300 border rounded-full px-4 py-2 flex items-center justify-center gap-2'>
            <Image src={github} alt="github" className='w-4 h-4' />Code</button>
            </Link>
          </div>
        </div>

      </div>
    );
  })}
</div>
<button className='cursor-pointer flex items-center justify-center gap-2 mb-10 mt-10 border-border border px-4 rounded-full text-sm py-2 mx-auto hover:bg-primary-hover/20'>
  <span className='text-text-secondary'>Load more projects</span>
  <Image src={arrowdown}  alt='arrowdown' className='w-4'/>
</button>
   </div>
  )
}

export default Projects