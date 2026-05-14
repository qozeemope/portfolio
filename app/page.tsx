"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import passport from "./assets/passport.jpg";
import github from "./assets/github.png";
import download from "./assets/download.png";
import mail from "./assets/mail.png";
import linkedin from "./assets/linkedin.png";
import HeroTitle from "./components/HeroTitle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text py-4 px-4 md:px-10 lg:px-20">
      
      <Navbar />

      <main className="flex flex-col lg:flex-row h-full gap-10 pt-6">

        {/* LEFT CARD */}
        <div className="flex-1 bg-card flex flex-col items-center rounded-2xl overflow-hidden">

          <div
            className="
              w-40 h-40
              md:w-50 md:h-50
              mt-8 animate-blob overflow-hidden
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

          {/* SOCIALS */}
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

          {/* BUTTON */}
          <button
            className="
              bg-primary flex items-center justify-center gap-3
              cursor-pointer text-white mt-6
              w-[85%] md:w-50
              p-3 rounded-lg
              hover:bg-primary-hover
              transition
            "
          >
            <Image
              src={mail}
              alt="Hire Me"
              className="w-4 h-4"
            />

            <h5>Hire Me</h5>
          </button>

          {/* FOOTER */}
          <div className="bg-card-secondary w-full mt-8 flex">
            <button
              className="
                py-3 px-4 w-full cursor-pointer
                flex items-center justify-center gap-2
                hover:bg-primary-hover/20 transition
              "
            >
              <h5 className="text-sm md:text-base">
                Download CV
              </h5>

              <Image
                src={download}
                alt="Download CV"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col flex-1 justify-center">

          <h1 className="text-text-secondary text-xl md:text-2xl">
            Hello{" "}
            <span className="inline-block animate-wave origin-[70%_70%]">
              👋
            </span>
            ,
          </h1>

          <h2
            className="
              font-bold
              text-4xl md:text-5xl lg:text-6xl
              mt-4 leading-tight
            "
          >
            I am{" "}
            <span className="text-primary">
              Qozeem Salami
            </span>
          </h2>

          <HeroTitle />

          <p
            className="
              mt-6
              text-text-secondary
              text-base md:text-lg lg:text-xl
              leading-relaxed
              max-w-2xl
            "
          >
            I am from Nigeria and I love to build things.
          </p>

          {/* STATS */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2
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
    </div>
  );
}