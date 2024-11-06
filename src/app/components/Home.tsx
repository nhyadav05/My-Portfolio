"use client";

import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { saveAs } from "file-saver";

const HomePage: React.FC = () => {
  const handleDownload = () => {
    fetch("/Neha-Yadav-Resume.pdf")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        saveAs(blob, "neha_resume.pdf");
      })
      .catch((error) => {
        console.error("Error downloading the resume:", error);
      });
  };

  return (
    <div className="text-white flex flex-col items-center justify-center">
      <div className="relative w-full h-full bg-cover bg-center">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full p-8 mt-[100px]">
          <div className="text-center md:text-clip md:w-full">
            <h1 className="leading-10 text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-500 bg-clip-text ">
              Welcome To My Portfolio
            </h1>
            <div className="h-[50px] md:h-[80px] flex items-center justify-center">
              <ReactTyped
                strings={[
                  "Build your own website with the best developer",
                  "I create modern and responsive web applications",
                  "Transforming your ideas into reality with code",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
                className="text-lg md:text-2xl"
              />
            </div>
            <button
              onClick={handleDownload}
              className=" justify-center items-center text-3xl font-bold text-center mb-10 ml-[20%] shadow-white shadow-lg p-4"
            >
              Get Resume
            </button>
          </div>

          <div className="flex justify-center md:w-[400px] md:h-[300px] rounded-full p-1 mt-8 md:mt-0 overflow-hidden relative">
            <div className="glow inset-0 absolute rotate-45"></div>
            {/* <div className="bg-black rounded-full p-1"> */}
            <Image
              src="/my-profile.jpeg"
              height={500}
              width={500}
              alt="Your Description"
              className="w-[300px] h-full rounded-full z-10 overflow-hidden"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
