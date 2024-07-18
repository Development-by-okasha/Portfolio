"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
const products = [
  {
    title: "EzTableBooking Admin Panel ",
    link: "https://eztablebooking.netlify.app/",
    thumbnail: "/projects/ez.png",
  },

  {
    title: "Profile Website",
    link: "https://profile-web-zeta.vercel.app/",
    thumbnail: "/projects/profile.png",
  },
  // Ptesu
  {
    title:
      " A robust and user-friendly government website designed to provide citizens with easy access to services, information, and resources",
    link: "https://ptesu.gov.pk/",
    thumbnail: "/projects/ptesu.png",
  },
  {
    title:
      "A robust and user-friendly website designed to provide citizens with easy access to services, information, and resources",
    link: "https://rehmanfoundation.org/",
    thumbnail: "/projects/rehman.png",
  },
  {
    title: "Codesandbox clone",
    link: "https://codesandbox55.netlify.app/",
    thumbnail: "/projects/codesand.png",
  },
  {
    title: "Ricoma",
    link: "https://ricoma55.netlify.app/",
    thumbnail: "/projects/ricoma.png",
  },
  {
    title:
      "A  user-friendly online store designed to provide ease coustomer services and resources",
    link: "https://three-js55.netlify.app/",
    thumbnail: "/projects/arafat.png",
  },
  {
    title: "Three Js 3D Model Project",
    link: "https://three-js55.netlify.app/",
    thumbnail: "/projects/threejs.png",
  },
  {
    title: "Watch Dog",
    link: "https://three-js55.netlif/",
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
