"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-40">
      <Link
        href="https://fawz.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            height={700}
            width={800}
            src="/FAWZ.png"
            alt="FAWZ.png"
            className="w-full h-1/2"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">BootWala</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • BootWala is a wholesale footwear platform designed to facilitate bulk purchases of boots, shoes, and sandals.<br/><br/>
              • The platform features competitive pricing, minimum and maximum order quantities, and flexible pricing based on order size.<br/><br/>
              • Special discounts and offers are available for bulk buyers, making it an ideal choice for retailers and resellers.<br/><br/>
              • Detailed product descriptions, images, and size guides assist customers in making informed decisions.<br/><br/>
              • Technologies Used: React.js, Redux-Saga, Chakra UI, JavaScript.
            </p>
          </div>
        </motion.div>
      </Link>

      <Link
        href="https://partner.ems-ltd.global/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            height={700}
            width={800}
            src="/EMS.png"
            alt="EMS.png"
            className="w-full h-1/2"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">EMS Partner Portal</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • The EMS Partner Portal is a third-party merchant platform that enables users to apply for loans by submitting legal documentation.<br/><br/>
              • It supports business partnerships by providing tools to collaborate and apply for financing opportunities.<br/><br/>
              • The portal ensures secure document verification and processing, offering transparency and reliability throughout the application process.<br/><br/>
              • Designed for scalability and ease of use, it empowers merchants and partners to grow their businesses through strategic collaborations.<br/><br/>
              • Technologies Used: React.js, JavaScript, Charkra UI, Redux-Saga.
            </p>
          </div>
        </motion.div>
      </Link>

      <Link
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            height={700}
            width={800}
            src="/networking.jpg"
            alt="SBNET"
            className="w-full h-1/2 object-cover"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">SBNET</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • This project focuses on network management tools, including IP address tracking and subnetting.<br/><br/>
              • It provides analytics dashboards and campaign tracking features for digital marketing.<br/><br/>
              • The platform is designed for usability and data-driven insights to enhance performance.<br/><br/>
              • Technologies Used: React.js, JavaScript, HTML, CSS,BootStrap,Redux.<br/><br/>
              • Role : API intregation & UI changes.
            </p>
          </div>
        </motion.div>
      </Link>

      <Link
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            height={700}
            width={800}
            src="/ZTCPL.png"
            alt="ZTCPl"
            className="w-full h-1/2 object-cover"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">ZTCPL</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • This website, developed using Next.js, is responsive and designed for a <br/><br/>
              • company providing services to clients who choose Zolute for their needs.<br/><br/>
              • Designed to provide an interactive and comprehensive learning experience.<br/><br/>
              • Technologies Used: Next.js, Recoil for api intregation, HTML,CSS, Template using for UI, JavaScript.
            </p>
          </div>
        </motion.div>
      </Link>

      <Link
        href="https://parikshado.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            height={700}
            width={800}
            src="/parikshado.png"
            alt="ParikshaDo"
            className="w-full h-1/2 object-cover"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">ParikshaDo</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • ParikshaDo is an advanced platform for conducting mock exams, designed to simulate real test conditions.<br/><br/>
              • It provides teachers with tools to create and manage online lessons and allows students to enroll in courses and take mock exams.<br/><br/>
              • The platform focuses on enhancing the learning experience with interactive features and performance tracking.<br/><br/>
              • Technologies Used: React.js,Redux,axois, Material ui, JavaScript.
            </p>
          </div>
        </motion.div>
      </Link>

      <Link
        href="https://user.vosovyapar.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full"
      >
        <motion.div
          className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white shadow-white border border-slate-300 h-full flex flex-col"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            height={700}
            width={800}
            src="/VOSO.png"
            alt="VOSO.png"
            className="w-full h-1/2"
          />
          <div className="p-4 flex-grow">
            <h3 className="text-xl font-bold mb-2">Voso Vyapar</h3>
            <p className="text-sm overflow-auto h-60 scrollbar">
              • Voso Vyapar is a comprehensive platform for managing and selling products online, designed to enhance user experience.<br/><br/>
              • Users can list products, manage inventory, and utilize various marketing features.<br/><br/>
              • The platform generates personalized websites for products to boost online visibility and sales.<br/><br/>
              • Built with React.js and Material UI for styling, and JavaScript for development, it ensures a high-quality user experience.<br/><br/>
              • Technologies Used: React.js, Material UI, Redux Toolkit, JavaScript.
            </p>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

export default Projects;
