import React from 'react'
import Navbar from '../components/Navbar'
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
      stacks: [
        { name: "React", image: react },
        { name: "Javascript", image: javascript },
        { name: "React Native", image: reactnative },
        { name: "HTML", image: html },
        { name: "CSS", image: css },
        { name: "Tailwind CSS", image: tailwind },
      ]
    },
    {
      name: "Backend",
      image: backend,
      stacks: [
        { name: "Python", image: python },
        { name: "Django", image: django },
        { name: "Rest API", image: restapi },
      ]
    },
    {
      name: "Database",
      image: database,
      stacks: [
        { name: "MySQL", image: mysql },
        { name: "SQLite", image: sqlite },
      ]
    },
    {
      name: "Others",
      image: others,
      stacks: [
        { name: "Git", image: git },
        { name: "Github", image: github },
      ]
    }
  ];

  return (
    <div className="mt-8 flex flex-col bg-background text-text py-4 px-4 md:px-10 lg:px-20">

     

      <main className="mt-6 md:mt-8">

        <h1 className="font-black text-3xl md:text-4xl text-center">
          Skills & <span className="text-primary">Tools</span>
        </h1>

        <Glowline />

        <h2 className="text-center text-text-secondary text-sm md:text-base px-4">
          Technologies and tools I use to build high-quality digital solutions.
        </h2>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-16">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-full bg-card rounded-lg py-4 px-4 md:px-8"
            >

              <h3 className="flex items-center gap-2 mb-2">
                <Image
                  src={skill.image}
                  alt={skill.name}
                  className="w-7 h-7 md:w-8 md:h-8"
                />

                <span className="font-bold text-lg md:text-xl">
                  {skill.name}
                </span>
              </h3>

              <hr />

              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">

                {skill.stacks.map((stack) => (
                  <li
                    key={stack.name}
                    className="
                      group
                      animate-fade-up
                      text-xs sm:text-sm
                      font-bold
                      text-text-secondary
                      uppercase
                      bg-card-secondary
                      border
                      border-border
                      rounded-lg
                      py-2
                      px-2
                      sm:px-3
                      text-center
                      flex
                      flex-col
                      items-center
                      justify-center
                      gap-2
                      transition-all
                      duration-300
                      hover:bg-primary-light/20
                      hover:-translate-y-1
                      hover:shadow-lg
                    "
                  >
                    <Image
                      src={stack.image}
                      alt={stack.name}
                      width={40}
                      height={40}
                      className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    />

                    <span className="transition-colors duration-300 group-hover:text-primary">
                      {stack.name}
                    </span>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </section>

      </main>

    </div>
  )
}

export default Skills