"use client";
import React from "react";
import Image from "next/image";
import aboutimg from "../../public/About.jpg";
import { motion } from "framer-motion";
function About() {
  return (
    <div className="relative bg-[#11141B]  py-20  text-white" id="about">
      <div className="flex items-center justify-between mob:flex-col  tab:flex-col py-16 mob:px-4 px-20">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="relative w-[40%]  mob:w-full flex justify-center"
        >
          <div className="relative z-10">
            <div className="overflow-hidden rounded-full">
              <motion.div className="relative">
                <Image
                  src={aboutimg}
                  alt="Profile"
                  className="object-cover rounded-full"
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </motion.div>
            </div>
          </div>
          <div className="absolute top-0 z-0 left-0">
            <motion.div
              className="h-32 w-32 rounded-full from-[#0BA8E6] via-green-500 to-cyan-700 bg-gradient-to-tr"
              animate={{ y: ["0%", "10%", "0%"] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
          <div className="absolute top-0 z-0 right-0">
            <motion.div
              className="h-32 w-32 rounded-full from-[#0BA8E6] via-green-500 to-cyan-700 bg-gradient-to-tr"
              animate={{ y: ["0%", "10%", "0%"] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
        <div className="mt-8 lg:mt-0">
          <motion.h1
            className="text-6xl font-bold"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            About me
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-justify max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            I’m a frontend developer with 3+ years of experience building
            performant, user-friendly products across web and mobile. From
            marketing sites to data-heavy dashboards, I rely on React, Next.js,
            Vue.js, and React&nbsp;Native to deliver accessible interfaces that feel
            fast and intuitive. I’m comfortable jumping into WordPress for
            custom themes, connecting REST APIs, or standing up light Laravel /
            Django backends when projects need full-stack support.
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-justify max-w-2xl text-neutral-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
          >
            Every build starts with design collaboration—translating Figma files
            into pixel-perfect layouts, documenting reusable component patterns,
            and baking in performance budgets from the first commit. I love
            iterating with teams, pairing with backend engineers, and shipping
            incremental improvements that make a measurable impact.
          </motion.p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#contact"
              className="bg-[#2fb9db] hover:bg-[#1b8aa5] text-white py-4 px-6 rounded-full text-lg font-semibold transition-colors inline-block"
            >
              Contact me
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
