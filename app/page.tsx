"use client";
import Navbar from "./Navbar";
import Image from "next/image";
import passport from "./assets/passport.jpg";
import github from "./assets/github.png";
import download from "./assets/download.png";
import chat from "./assets/chat.png";
import mail from "./assets/mail.png";
import linkedin from "./assets/linkedin.png";
import HeroTitle from "./components/HeroTitle";



export default function Home() {
//   const titles = [
//   "Full Stack Developer",
//   "Backend Engineer",
//   "Frontend Developer",
//   "Software Engineer",
//   "Problem Solver",
//   "Avid Reader"
// ];


  return (
    <div className="flex flex-col h-screen bg-[var] text-text  py-4 px-20">
      <Navbar />
   
     <main className="flex h-full   gap-10 pt-2">
        <div className="flex-1  bg-card flex flex-col items-center  rounded-lg">
          <div className="w-50 h-50 mt-8 animate-blob overflow-hidden border border-border 
            rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
              <Image src={passport} alt="Passport Photo" className="w-full h-full object-cover" />
            </div>
          
          <h2 className="font-bold text-xl mt-2">Salami Qozeem Opeyemi</h2>
          <small className="italic text-text-secondary mt-2">Full Stack Developer</small>
          <ul className="flex mt-2 gap-4">
            <li>
              <a href="https://github.com/qozeemope" target="_blank" rel="noopener noreferrer">
                <Image src={github} alt="GitHub" className="w-8 h-8" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/salamiqozeemopeyemi266" target="_blank" rel="noopener noreferrer">
                <Image src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </a>
            </li>
          </ul>
          <button className="bg-primary flex items-center justify-center gap-4 cursor-pointer text-white mt-4 w-50 mx-auto p-2 rounded-sm hover:bg-primary-hover">
              <Image src={mail} alt="Hire Me" className="w-4 h-4 inline-block ml-1" />
              <h5>Hire Me</h5>
          </button>
          <div className="bg-card-secondary  mb-0 w-full  mt-auto flex justify-around">
            <button className="bg-card-secondary py-2 px-10 w-full cursor-pointer flex items-center justify-center gap-2 hover:bg-primary-hover/20"><h5>Download CV</h5>
            <Image src={download} alt="Download CV" className="w-4 h-4 inline-block ml-1" />
            </button>
            <button className="bg-card-secondary py-2 px-10 w-full cursor-pointer flex items-center justify-center gap-2 hover:bg-primary-hover/20"><h5>Contact Me</h5>
              <Image src={chat} alt="Contact Me" className="w-4 h-4 inline-block ml-1" />
            </button>
          </div>
        </div>


        <div className="flex flex-col flex-1 ">
         <h1 className="text-text-secondary text-2xl">
  Hello{" "}
  <span className="inline-block animate-wave origin-[70%_70%]">
    👋
  </span>
  ,
</h1>
          <h2 className="font-bold text-5xl mt-4">I am <span className="text-primary text-bold">Qozeem Salami</span></h2>
          <HeroTitle />
          <p className="mt-4 text-justify text-text-secondary">A passionate Full Stack Developer from Nigeria — building modern, scalable, and user-focused web applications with React, TypeScript, Python, and Django, combining clean frontend experiences with reliable backend systems.</p>
          <div className="flex mb-0 mt-auto gap-4 w-full">
            <div className="bg-card py-2 px-8 flex items-center justify-center gap-4 text-2xl">
              <h3 className="font-bold text-3xl">2+</h3>
              <p className="text-primary text-xl">Years of Experience</p>
            </div>
            <div className="bg-card py-2 px-8 flex items-center justify-center gap-4 text-bold text-2xl">
              <h3 className="font-bold text-3xl">10</h3>
              <p className="text-primary text-xl">Projects Completed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
