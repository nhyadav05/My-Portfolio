"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactTyped } from "react-typed";

const About: React.FC = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center items-center text-4xl font-bold text-center mb-10 shadow-white shadow-lg p-4">
        About Me
      </div>
      <div className="container mx-auto px-4">
        <AnimatedText>
          <div className="text-white text-xl leading-relaxed p-12 rounded-xl shadow-lg bg-opacity-50 bg-slate-900 border border-slate-500 shadow-violet-800 mb-10 h-[80vh] overflow-y-auto scrollbar scrollbar-track-gray-300">
            <ReactTyped
              strings={[
                "<b>Hey...<br/>Myself Neha Yadav</b></span><br/><br/>" +
                  "<b>Experienced Front-end Developer:</b> I am a highly motivated and skilled React JS Developer with 1.6 year of professional experience. My expertise lies in building efficient and scalable web applications with a focus on delivering high-quality code.<br/><br/>" +
                  "<b>Technical Proficiency:</b> I specialize in React.js, Next.js, Tailwind CSS, TypeScript, Redux Toolkit, JavaScript, and RESTful APIs. I have hands-on experience with frontend technologies including Next.js, React.js, and React Native.<br/><br/>" +
                  "<b>Team Collaboration:</b> I pride myself on working effectively in dynamic team environments, ensuring that projects are delivered on time while fostering collaboration and productivity.<br/><br/>" +
                  "<b>Education:</b> I completed my M.Sc. in Mathematics from Christian Eminent College, Indore, M.P. (2019 to 2021), and my B.Sc. in Computer Science from Christian Eminent College, Indore, M.P. (2016 to 2019).<br/><br/>" +
                  "<b>Experience:</b> I have worked as a React.js Developer at Zolute Technology and Consulting Pvt. Ltd., Indore, M.P. from September 2022 to September 2023.<br/><br/>" +
                  "<b>Portfolio Website:</b> This website itself is a showcase of my capabilities in web development, built using Next.js, Tailwind CSS, and TypeScript to create a responsive and visually appealing user experience.<br/><br/>" 
              ]}
              typeSpeed={5}
              className="text-lg md:text-xl"
            />
          </div>
        </AnimatedText>
      </div>
    </div>
  );
};

type AnimatedTextProps = {
  children: ReactNode;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time the element comes into view
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 2.5, delay: 0.5 }}
      className="h-[60%]"
    >
      {children}
    </motion.div>
  );
};

export default About;
