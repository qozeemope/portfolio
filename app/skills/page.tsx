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


function Skills() {
  return (
     <div className="flex flex-col h-screen bg-white text-black py-4 px-20">
      <Navbar />
      <main className='mt-4'>
        <h1 className='font-black text-3xl text-center'>Skills & <span className='text-[#24b81d] '>Tools</span></h1>
        <h2 className='text-center'>Technologies and tools I use to build high-quality digital solutions.</h2>
        <section className='grid grid-cols-2 gap-8 mt-4'>
          <div className='w-full bg-[#e9ffe6] rounded-lg py-4 px-8 '>
            <h3 className='flex items-center gap-2 mb-2'>
              <Image src={frontend} alt="frontend" className='w-8 h-8' />
              <span className='font-bold text-xl'>Frontend</span></h3>
              <hr />
            <ul className='grid grid-cols-3 gap-2 text-black justify-between mt-4'>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={react} alt="react" /><span>Reactjs</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={reactnative} alt="react-native" /><span>React Native</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={javascript} alt="javascript" /><span>Javascript</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={html} alt="HTML" /><span>HTML</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={css} alt="CSS" /><span>CSS</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={tailwind} alt="tailwind" /><span></span>Tailwind CSS</li>
            </ul>
          </div>
          <div className='w-full bg-[#e9ffe6] rounded-lg py-4 px-8 '>
            <h3 className='flex items-center gap-2 mb-2'>
              <Image src={backend} alt="backend" className='w-8 h-8' />
              <span className='font-bold text-xl'>Backend</span></h3>
              <hr />
            <ul className='grid grid-cols-3 gap-2 text-black justify-between mt-4'>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={python} alt="python" /><span>Python</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={django} alt="django" /><span>Django/Django Rest Framework</span></li>
              <li className='bg-[#d1ffc9] border border-gray-300 rounded-lg py-2 px-3 text-center flex flex-col items-center justify-center gap-2'><Image src={restapi} alt="restapi" /><span>Rest API</span></li>
              
            </ul>
          </div>
          
       
          {/* <div>
            <h3>Databases</h3>
            <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>SQLite</li>
            </ul>
          </div>
          <div>
            <h3>Tools & Workflow</h3>
            <ul>
              <li>Git </li>
              <li>Github</li>
              <li>Postman</li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3>Deployment Platforms</h3>
            <ul>
              <li>Vercel</li>
            </ul>
          </div> */}
        </section>
      </main>
   </div>
  )
}

export default Skills