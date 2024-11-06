"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center max-h-screen text-white p-6 flex-col">
      <div className="flex justify-center items-center text-4xl font-bold text-center mb-10 shadow-white shadow-lg p-4">
      Contact Links
      </div>
      <div className="md:w-[50%] w-[100%] p-6 rounded-xl shadow-lg bg-opacity-0 flex justify-center items-center gap-10 border border-slate-500 shadow-violet-800 mb-10">
        <div className="flex flex-col max-w-screen gap-8 pb-3 text-center">
          <AnimatedLink
            href="https://www.linkedin.com/in/neha-yadav-57744a242/"
            delay={0.2}
            direction="left"
          >
            <div className="flex flex-row gap-2 items-center px-14">
              <FaLinkedin />
              LinkedIn
            </div>
          </AnimatedLink>

          <AnimatedLink
            href="https://github.com/nhyadav05"
            delay={0.4}
            direction="right"
          >
            <div className="flex flex-row gap-2 items-center">
              <FaGithub />
              GitHub
            </div>
          </AnimatedLink>

          <AnimatedLink
            href="mailto:nehainduyadav@gmail.com"
            delay={0.6}
            direction="left"
          >
            <div className="flex flex-row gap-2 items-center">
              <MdEmail />
              Gmail
            </div>
          </AnimatedLink>

          <AnimatedLink href="tel:+918964850575" delay={0.8} direction="right">
            <div className="flex flex-row gap-2 items-center">
              <FaPhoneAlt />
              Phone
            </div>
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
};

const AnimatedHeading: React.FC<{ text: string }> = ({ text }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="text-3xl font-bold text-center items-center"
    >
      {text}
    </motion.h2>
  );
};

const AnimatedLink: React.FC<{
  href: string;
  delay: number;
  direction: "left" | "right";
  children: React.ReactNode;
}> = ({ href, delay, direction, children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      animate={
        inView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: direction === "left" ? -50 : 50 }
      }
      transition={{ duration: 0.5, delay }}
      className="text-white hover:text-gray-700 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 justify-center items-center flex py-2 rounded-xl md:w-[350px]"
    >
      {children}
    </motion.a>
  );
};

export default Contact;
