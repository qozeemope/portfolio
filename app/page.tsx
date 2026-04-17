import Navbar from "./Navbar";
import Image from "next/image";
import passport from "./assets/passport.jpg";
import github from "./assets/github.png";
import download from "./assets/download.png";
import chat from "./assets/chat.png";
import mail from "./assets/mail.png";
import linkedin from "./assets/linkedin.png";



export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white text-black py-4 px-20">
      <Navbar />
   
     <main className="flex h-full  gap-10 pt-2">
        <div className="flex-1 bg-[#e9ffe6] flex flex-col items-center  rounded-lg">
          <Image src={passport} alt="Passport Photo" className="w-50 h-60 pt-4 rounded-full" />
          <h2 className="font-bold text-xl mt-2">Salami Qozeem Opeyemi</h2>
          <small className="italic text-gray-400 mt-2">Full Stack Web Developer</small>
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
          <button className="bg-[#24b81d] flex items-center justify-center gap-4 cursor-pointer text-white mt-4 w-50 mx-auto p-2 rounded-sm">
              <Image src={mail} alt="Hire Me" className="w-4 h-4 inline-block ml-1" />
              <h5>Hire Me</h5>
          </button>
          <div className="bg-[#d1ffc9] mb-0 w-full py-2 px-20 mt-auto flex justify-between">
            <button className="cursor-pointer flex items-center justify-center gap-2"><h5>Download CV</h5>
            <Image src={download} alt="Download CV" className="w-4 h-4 inline-block ml-1" />
            </button>
            <button className="cursor-pointer flex items-center justify-center gap-2"><h5>Contact Me</h5>
              <Image src={chat} alt="Contact Me" className="w-4 h-4 inline-block ml-1" />
            </button>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h1>About me</h1>
          <h2 className="font-bold text-3xl mt-4">I am <span className="text-[#24b81d] text-bold">Qozeem Salami</span></h2>
          <p className="mt-4 text-justify">Full Stack Web Developer with experience in React, React Native, JavaScript, TypeScript, Python, and Django REST Framework, building responsive frontend interfaces and scalable backend APIs. Experienced in developing reusable UI components, integrating RESTful services, and delivering user-focused web applications across dashboard and booking platforms. Skilled in modern development workflows, performance optimization, API design, and cross-functional collaboration to build reliable digital products.</p>
          <div className="flex mb-0 mt-auto gap-4 w-full">
            <div className="bg-[#d1ffc9] py-2 px-8 flex items-center justify-center gap-4 text-2xl">
              <h3 className="font-bold text-3xl">2+</h3>
              <p className="text-[#24b81d] text-xl">Years of Experience</p>
            </div>
            <div className="bg-[#d1ffc9] py-2 px-8 flex items-center justify-center gap-4 text-bold text-2xl">
              <h3 className="font-bold text-3xl">10</h3>
              <p className="text-[#24b81d] text-xl">Projects Completed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
