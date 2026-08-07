"use client";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text py-4 px-4 md:px-10 lg:px-20">

      <Navbar />

      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      <Reveal>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
      </Reveal>

      <Reveal>
        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>
      </Reveal>

      <Reveal>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
      </Reveal>

      <Footer />

    </div>
  );
}