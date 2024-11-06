import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div
      className="bg-opacity-40 w-[100%] h-[100%] bg-black"
      style={{
        backgroundImage: "url('/background5.jpg')",
      }}
    >
      <Navbar />

      <section id="home">
        <HomePage />
      </section>

      <section id="about" className="pt-24">
        <About />
      </section>

      <section id="skills" className="pt-24">
        <Skills />
      </section>

      <section
        id="projects"
        className="h-[60%] text-white pt-24 min-h-screen flex flex-col items-center justify-center"
      >
        <div className="text-4xl font-bold text-center shadow-white shadow-lg mb-10 p-4 flex justify-center items-center">
          Projects
        </div>
        <Projects />
      </section>

      <section id="contact" className="pt-24">
        <Contact />
      </section>
    </div>
  );
}
