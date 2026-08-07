import React from 'react'
import Image from "next/image";
import passport from "../assets/passport.jpg";
import github from "../assets/github.png";
import download from "../assets/download.png";
import mail from "../assets/mail.png";
import linkedin from "../assets/linkedin.png";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <div>
        <main className=" md:flex gap-10 pt-6 hidden">

        <div className="w-full flex flex-col lg:flex-1 bg-card flex flex-col items-center rounded-2xl">

          <div
            className="
              w-40 h-40
              md:w-50 md:h-50
              mt-8 animate-blob animate-float overflow-hidden
              border border-border
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            "
          >
            <Image
              src={passport}
              alt="Passport Photo"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="font-bold text-lg md:text-xl mt-4 text-center px-4">
            Salami Qozeem Opeyemi
          </h2>

          <small className="italic text-text-secondary mt-2">
            Full Stack Developer
          </small>

          <ul className="flex mt-4 gap-4">
            <li>
              <a
                href="https://github.com/qozeemope"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={github}
                  alt="GitHub"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/salamiqozeemopeyemi266"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            </li>
          </ul>

      
          <a
            href="mailto:qozeemopeyemi2008@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-primary flex items-center justify-center gap-3
              cursor-pointer text-white mt-6
              w-[85%] md:w-50
              p-3 rounded-lg
              hover:bg-primary-hover
              transition transition-all duration-200
hover:-translate-y-0.5
active:scale-95
            "
          >
            <Image
              src={mail}
              alt="Hire Me"
              className="w-4 h-4"
            />

            <h5>Hire Me</h5>
          </a>

          
          <div className="mt-8 bg-card-secondary rounded-2xl w-full flex">
            <a
              href="/Salami Qozeem Opeyemi_Resume.pdf"
              download
              className="
                py-3 px-4 w-full
                flex items-center justify-center gap-2
                hover:bg-primary-hover/20 transition
              "
            >
              <h5 className="text-sm md:text-base">
                Download Resume
              </h5>

              <Image
                src={download}
                alt="Download Resume"
                className="w-4 h-4"
              />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col flex-1 justify-center text-center lg:text-left items-center lg:items-start">

          <h1 className="text-text-secondary text-xl md:text-2xl animate-fade-up delay-200">
            Hello{" "}
            <span className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
            ,
          </h1>

          <h2
            className="
              font-bold
              text-3xl
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              mt-4
              leading-tight animate-fade-up
            "
          >
            I am{" "}
            <span className="text-primary">
              Qozeem Salami
            </span>
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight">
  <Typewriter
    words={[
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "Mobile Developer",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1800}
  />
</h3>

          <p
            className="
              mt-6
              text-text-secondary
              text-base
              md:text-lg
              lg:text-xl
              leading-relaxed
              max-w-2xl  animate-fade-up
  delay-400
            "
          >
           I am from Nigeria, and I love building web and mobile applications that solve real problems from the frontend to the backend.
          </p>

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-4
              mt-10
              w-full
            "
          >
            <div
              className="
                bg-card
                py-6 px-6
                rounded-2xl
                flex items-center gap-4
                justify-center
                lg:justify-start transition-all duration-300
  hover:-translate-y-1
  hover:shadow-lg
              "
            >
              <h3 className="font-bold text-3xl">
                3+
              </h3>

              <p className="text-primary text-lg">
                Years of Experience
              </p>
            </div>

            <div
              className="
                bg-card
                py-6 px-6
                rounded-2xl
                flex items-center gap-4
                justify-center
                lg:justify-start transition-all duration-300
  hover:-translate-y-1
  hover:shadow-lg
              "
            >
              <h3 className="font-bold text-3xl">
                10+
              </h3>

              <p className="text-primary text-lg">
                Projects Completed
              </p>
            </div>
          </div>

        </div>

      </main>







      {/* mobile */}
      
      <main className="flex flex-col lg:flex-row gap-10 pt-6  md:hidden">

      
        <div className="w-full lg:flex-1 flex flex-col items-center rounded-2xl overflow-hidden">

          <div
            className="
              w-40 h-40
              md:w-50 md:h-50
              mt-8 animate-blob animate-float overflow-hidden
              border border-border
              rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
            "
          >
            <Image
              src={passport}
              alt="Passport Photo"
              className="w-full h-full object-cover"
            />
          </div>

           <ul className="flex mt-4 gap-4">
            <li>
              <a
                href="https://github.com/qozeemope"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={github}
                  alt="GitHub"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/salamiqozeemopeyemi266"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-7 h-7 hover:scale-110 transition"
                />
              </a>
            </li>
          </ul>

      

           <div className="flex flex-col flex-1 justify-center text-center lg:text-left items-center lg:items-start">

          

          <h2
            className="
              font-bold
              text-3xl
              sm:text-lg
              md:text-2xl
              lg:text-3xl
              mt-4
              leading-tight animate-fade-up
            "
          >
            I am{" "}
            <span className="text-primary">
              Qozeem Salami
            </span>
          </h2>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Frontend Developer",
              "Backend Developer",
              "Mobile Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
         </h3>

          <p
            className="
              mt-6
              text-text-secondary
              text-sm
              md:text-lg
              lg:text-xl
              leading-relaxed
              max-w-2xl  animate-fade-up
  delay-400
            "
          >
           I am from Nigeria, and I love building web and mobile applications that solve real problems from the frontend to the backend.
          </p>
          </div>

          <div
            className="
              flex
              gap-2
              mt-10
              w-full
            "
          >
            <div
              className="
                bg-card
                py-2 px-2
                rounded-2xl
                flex items-center gap-4
                justify-center
                lg:justify-start text-sm
              "
            >
              <h3 className="font-bold text-lg">
                3+
              </h3>

              <p className="text-primary">
                Years of Experience
              </p>
            </div>

            <div
              className="
                bg-card
                py-2 px-2
                rounded-2xl
                flex items-center gap-4
                justify-center
                lg:justify-start text-sm
              "
            >
              <h3 className="font-bold text-lg">
                10+
              </h3>

              <p className="text-primary">
                Projects Completed
              </p>
            </div>
          </div>

          

         <div className="flex w-full gap-2 mx-auto text-sm mt-8">
          <a
            href="mailto:qozeemopeyemi2008@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-primary flex items-center justify-center gap-3
              cursor-pointer text-white
               rounded-lg w-full
              hover:bg-primary-hover
              transition py-4
            "
          >
            <Image
              src={mail}
              alt="Hire Me"
              className="w-4 h-4"
            />

            <h5>Hire Me</h5>
          </a>

          
          <div className="bg-card-secondary flex rounded-lg w-full py-2">
            <a
              href="/Salami Qozeem Opeyemi_Resume.pdf"
              download
              className="
                 px-2 w-full py-4
                flex items-center justify-center
                hover:bg-primary-hover/20 transition
              "
            >
              <h5 className='text-xs'>
                Download Resume
              </h5>

              <Image
                src={download}
                alt="Download Resume"
                className="w-4 h-4"
              />
            </a>
          </div>
          </div>
        </div>

       
       

          

       

      </main>
    </div>
  )
}

export default Hero