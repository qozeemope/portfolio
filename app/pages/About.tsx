import React from 'react'
import Navbar from '../components/Navbar'
import Glowline from '../components/Glowline'

function About() {
  return (
    <div className="flex flex-col bg-background text-text py-4 px-4 md:px-10 lg:px-20 mt-8">
  

      <h1 className="font-black text-3xl md:text-4xl text-center mt-6 md:mt-8">
        About <span className="text-primary">Me</span>
      </h1>

      <Glowline />

      <p className="mt-8 md:mt-12 text-sm text-secondary md:text-lg leading-8 flex flex-col">
        <span className="mb-6 md:mb-8 text-2xl md:text-3xl font-black text-text">
          Hey, I'm Qozeem
        </span>

        A Full Stack Developer passionate about building modern, scalable, and user-focused digital products. I specialize in building responsive frontend interfaces with React and TypeScript, while also developing reliable backend systems and APIs with Python and Django REST Framework

        <br />
        <br />

        I enjoy turning ideas into clean, functional products that look good and solve real problems. I’ve worked on dashboard applications, booking platforms, and API-driven systems, with a focus on writing maintainable code, improving performance, and creating a smooth user experience.

        <br />
        <br />

        Outside of development, I’m always learning and exploring new technologies. I keep refining my skills and staying up to date with modern development practices and industry standards.
      </p>
    </div>
  )
}

export default About