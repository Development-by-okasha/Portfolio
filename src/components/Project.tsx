"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
const products = [
  {
    title: "EzTableBooking — Restaurant reservations",
    link: "https://ez-table-booking.vercel.app/",
    thumbnail: "/projects/ez.png",
  },

  {
    title: "Personal Portfolio — Next.js site",
    link: "https://profile-web-55.vercel.app/",
    thumbnail: "/projects/profile.png",
  },
  // Ptesu
  {
    title: "PTESU — Citizen services portal",
    link: "https://ptesu.gov.pk/",
    thumbnail: "/projects/ptesu.png",
  },
  {
    title: "Rehman Foundation — Non-profit platform",
    link: "https://rehmanfoundation.org/",
    thumbnail: "/projects/rehman.png",
  },
  {
    title: "Codesandbox Clone — In-browser IDE",
    link: "https://codesandbox-55.vercel.app/",
    thumbnail: "/projects/codesand.png",
  },
  {
    title: "Ricoma — Product marketing site",
    link: "https://ricoma-55.vercel.app/",
    thumbnail: "/projects/ricoma.png",
  },
  {
    title: "Arafat Store — Ecommerce experience",
    link: "https://three-js55.netlify.app/",
    thumbnail: "/projects/arafat.png",
  },
  {
    title: "Three.js 3D Model Explorer",
    link: "https://three-js-55.vercel.app/",
    thumbnail: "/projects/threejs.png",
  },
  {
    title: "Watch Dog — Pet care landing page",
    link: "https://watch-dog-55.vercel.app/",
    thumbnail: "/projects/dog.png",
  },
];
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});
function Project() {
  return (
    <div
      className="bg-gradient-to-r from-gray-800 to-[#10131a] w-full"
      id="projects"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-5xl text-center text-white pt-10 ${space.className}  sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8`}
      >
        My Projects
      </motion.h1>
      <HeroParallax products={products} />
    </div>
  );
}

export default Project;
