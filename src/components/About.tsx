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
            I am a passionate Frontend Web Developer dedicated to creating
            engaging and dynamic user interfaces. My journey in the tech
            industry has equipped me with a strong foundation in HTML, CSS, and
            JavaScript, along with expertise in modern frontend frameworks like
            React. I thrive on transforming innovative ideas into seamless and
            responsive web applications, ensuring a top-notch user experience.
            My dedication to staying updated with the latest industry trends
            allows me to continually refine my skills and deliver cutting-edge
            solutions. Whether collaborating with a team or working
            independently, I am committed to crafting web experiences that are
            not only visually appealing but also highly functional.
          </motion.p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            <button className="bg-[#2fb9db] hover:bg-[#3299b3] text-white py-4 px-6 rounded-full text-lg">
              Contact me
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
