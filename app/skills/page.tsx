import React from 'react'
import Navbar from '../Navbar'
import Image from "next/image";
import frontend from "../assets/frontend.png"
import backend from "../assets/backend.png"
import django from "../assets/django.png"
import javascript from "../assets/javascript.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import react from "../assets/react.png"
import reactnative from "../assets/reactnative.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/python.png"
import restapi from "../assets/restapi.png"
import database from "../assets/database.png"
import git from "../assets/git.png"
import mysql from "../assets/mysql.png"
import sqlite from "../assets/sqlite.webp"
import others from "../assets/others.png"
import github from "../assets/github.png"
import Glowline from '../components/Glowline';


function Skills() {
 const skills = [
  {
    name: "Frontend",
    image: frontend,
    stacks: [{
      name: "React",
      image: react
    },
    {
      name: "Javascript",
      image: javascript
    },
    {
      name: "React Native",
      image: reactnative
    },
    {
      name: "HTML",
      image: html
    },
    {
      name: "CSS",
      image: css
    },
    {
      name: "Tailwind CSS",
      image: tailwind
    },
  ]
  },
  {
    name: "Backend",
    image: backend,
    stacks: [{
      name: "Python",
      image: python
    },
    {
      name: "Django",
      image: django
    },
    {
      name: "Rest API",
      image: restapi
    },
    
   
  ]
  },
  {
    name: "Database",
    image: database,
    stacks: [{
      name: "MySQL",
      image: mysql
    },
    {
      name: "SQLite",
      image: sqlite
    },
   
   
  ]
  },
  {
    name: "Others",
    image: others,
    stacks: [{
      name: "Git",
      image: git
    },
    {
      name: "Github",
      image: github
    },
   
  ]
  }
 ]

  return (
     <div className="flex flex-col bg-background text-text py-4 px-20 ">
      <Navbar />
      <main className='mt-8'>
        <h1 className='font-black text-4xl text-center'>Skills & <span className='text-primary '>Tools</span></h1>
      <Glowline />
        <h2 className='text-center text-text-secondary'>Technologies and tools I use to build high-quality digital solutions.</h2>
        <section className='grid grid-cols-2 gap-8 mt-16'>
          
          
          {
            skills.map(skill =>{
              return (
               <div className='w-full bg-card rounded-lg py-4 px-8 ' key={skill.name}>
            <h3 className='flex items-center gap-2 mb-2'>
              <Image src={skill.image} alt="frontend" className='w-8 h-8' />
              <span className='font-bold text-xl'>{skill.name}</span></h3>
              <hr />
            <ul className='grid grid-cols-3 gap-2 text-black justify-between mt-4'>
             {
  skill.stacks.map(stack => {
    return (
      <li
        key={stack.name}
        className="group text-sm font-bold text-text-secondary uppercase bg-card-secondary border border-border rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-light/20 hover:-translate-y-1 hover:shadow-lg"
      >
        <Image
          src={stack.image}
          alt={stack.name}
          width={40}
          height={40}
          className="w-10 h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        />
        <span className="transition-colors duration-300 group-hover:text-primary">
          {stack.name}
        </span>
      </li>
    );
  })
}
            </ul>
          </div>
              )
            })
          }
       
         
          
            
        </section>
      </main>
   </div>
  )
}

export default Skills