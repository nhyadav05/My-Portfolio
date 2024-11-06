import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons8-owl-16.png" className="h-full w-full" />
      </head>
      <body className={`${inter.className} font-serif`}>{children}</body>
    </html>
  );
}






// education :- 
// 2019 – 2021 M.Sc. [Mathematics],Christain Eminent College, Indore, M.P.
//  2016 – 2019B.Sc. [CS],Christain Eminent College, Indore, M.P.

// expirence :- 
// 09/2022 – 09/2023 React js Developer, Zolute Technology & Consulting Pvt. Ltd. Indore, M.P.

// Projects 

// FAWZ:- This website is optimized exclusively for mobile users, catering to footwear wholesalers. It enables users to purchase footwear in bulk effortlessly, ensuring increased satisfaction through timely deliveries.

// Link - https://fawz.in

// SBNET :- 
// It's used for networking . we can fetch all device ip address like smartwatch,desktop & laptop etc.a logical subdivision of an IP network that's created by dividing a network into smaller segments. The process of creating subnets is called subnetting

// ZTCPL:-
// This website, developed using Next.js, is responsive and designed for a company providing services to clients who choose Zolute for their needs.

// ParikshaDo :-
// The project offers a platform for mock exams, simulating real test conditions. Teachers can conduct lessons on the app, and students can enroll in the available courses.
// https://parikshado.com/

// Voso Vyapar :-
// This project is a user-friendly panel allowing users to list, sell, and manage their products
//  online. It also offers marketing features, with websites generated from the product details provided.
// https://user.vosovyapar.com/

// EMS Partner Portal :-
//  The EMS Partner Portal is designed as a third-party merchant
//               platform, allowing users to apply for loans by submitting legal
//               documentation.The portal facilitates partnerships, providing businesses with
//               the tools to collaborate and apply for financing opportunities
//               seamlessly It ensures that all documents are verified and processed
//               securely, offering transparency and reliability throughout the
//               application process. With a focus on scalability and ease of use, the EMS
//               Partner Portal empowers merchants and partners to grow their
//               businesses through strategic collaborations.
// https://partner.ems-ltd.global/
