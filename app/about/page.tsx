import React from 'react'
import Navbar from '../Navbar'
import Glowline from '../components/Glowline'

function About() {
  return (
    <div className="flex flex-col bg-background text-text py-4 px-20">
      <Navbar />
      <h1 className='font-black text-4xl text-center mt-8'>About <span className='text-primary'>Me</span></h1>
      <Glowline />
      <p className='mt-12  text-text-secondary flex flex-col'><span className='mb-8 text-3xl font-black text-text'>Hey, I'm Qozeem</span>A Full Stack Developer passionate about building modern, scalable, and user-focused digital products. I specialize in creating responsive frontend interfaces with React and TypeScript while developing reliable backend systems and APIs using Python and Django REST Framework.
      <br />
      <br />

I enjoy transforming ideas into clean, functional experiences that not only look good but also solve real problems efficiently. From dashboard applications to booking platforms and API-driven systems, I focus on writing maintainable code, optimizing performance, and building products with strong user experience in mind.
<br /><br />

Beyond coding, I’m constantly learning, exploring new technologies, and refining my craft to stay aligned with modern development standards and industry best practices.
</p>
      </div>
  )
}

export default About