"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React from "react";

const Skills: React.FC = () => {
  const imagesData = [
    { title: "React JS", imageUrl: "/React.svg" },
    { title: "Next JS", imageUrl: "/nextjs.png" },
    { title: "JAVASCRIPT", imageUrl: "/JavaScript-logo.png" },
    { title: "TYPESCRIPT", imageUrl: "/Typescript.png" },
    { title: "HTML", imageUrl: "/Html.png" },
    { title: "CSS", imageUrl: "/CSS.png" },
    { title: "TAILWIND CSS", imageUrl: "/Tailwind.png" },
    { title: "MATERIAL UI", imageUrl: "/MUI.jpeg" },
    { title: "GIT", imageUrl: "/Git.png" },
    { title: "GITHUB", imageUrl: "/github.jpg" },
    { title: "NODE JS", imageUrl: "/node.jpeg" },
    { title: "EXPRESS JS", imageUrl: "/express.png" },
    { title: "MONGO DB", imageUrl: "/mongodb.jpg" },
    { title: "REDUX TOOLKIT", imageUrl: "/REDUX.png" },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center items-center text-4xl font-bold text-center mb-10 shadow-white shadow-lg p-4">
        Skills
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 py-4 mt-10 mb-10">
        {imagesData.map((image, index) => (
          <ImageCard key={index} image={image} index={index} />
        ))}
      </div>
    </div>
  );
};

const ImageCard: React.FC<{
  image: { title: string; imageUrl: string };
  index: number;
}> = ({ image, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // If you want the animation to trigger every time the element comes into view, set this to false
    threshold: 0.8, // Percentage of the element's visibility to trigger the animation
  });

  return (
    <motion.div
      ref={ref}
      className="border-animation"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={
        inView
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
      }
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <article className="overflow-hidden relative rounded-2xl">
        <div className="glow inset-0 absolute rotate-45"></div>

        <div className="space-y-2 rounded-2xl z-10 relative px-0.5 py-0.5">
          <div className="max-w-sm overflow-hidden w-[250px] h-[200px] rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out justify-center items-center flex bg-black flex-col">
            <Image
              className="w-[240px] h-[190px] bg-black rounded-2xl"
              src={image.imageUrl}
              alt={image.title}
              height={700}
              width={700}
            />
            {/* <div className="bg-black justify-center items-center flex mb-2 py-2 text-lg overflow-hidden">
            {image.title}
          </div> */}
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default Skills;
