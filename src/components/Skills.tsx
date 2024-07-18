"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
export const projects = [
  {
    title: "Html",
    image: "/skills/html.png",
  },
  {
    title: "Css",
    image: "/skills/css.png",
  },
  {
    title: "Tailwind",
    image: "/skills/tailwind.png",
  },
  {
    title: "Bootstrap",
    image: "/skills/bootstrap.png",
  },
  {
    title: "Javascript",
    image: "/skills/js.png",
  },
  {
    title: "React",
    image: "/skills/react.png",
  },
  {
    title: "Next",
    image: "/skills/next.png",
  },
  {
    title: "Redux",
    image: "/skills/redux.png",
  },
  {
    title: "Firebase",
    image: "/skills/firebase.png",
  },
];

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});
function Skills() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-[#10131a]">
      <div className=" w-full bg-transparent   bg-dot-white/[0.5]  relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="  " id="skills">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`text-5xl text-center text-white pt-10 ${space.className}  sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8`}
          >
            My Skills
          </motion.h1>
          <div className="max-w-5xl mx-auto px-8 ">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                  when: "beforeChildren",
                  staggerChildren: 0.2,
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <HoverEffect items={projects} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
