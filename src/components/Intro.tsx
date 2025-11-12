"use client";
import React from "react";
import { Karla, Great_Vibes } from "next/font/google";
import profileImage from "../../public/file.png";
import codeImg from "../../public/code.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Meteors } from "./ui/meteors";
const KARLA = Karla({
  subsets: ["latin"],
  weight: ["400"],
});

const space = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

function Intro() {
  return (
    <div className="w-full">
      <Meteors number={30} />
      <div className="bg-gradient-to-r w-full from-[#10131a] via-gray-800 to-[#0F212C]">
        <motion.div
          initial={{ opacity: 0, y: 130 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <div className="flex justify-between mob:flex-col-reverse tab:flex-col-reverse  px-20 mob:px-6 pt-44 mob:pt-32 pb-20">
            <motion.div className="space-y-10">
              <h1
                className={`text-3xl text-[#878a89] mob:text-center ${KARLA.className} `}
              >
                FRONTEND ENGINEER · UI SPECIALIST
              </h1>
              <h1
                className={`text-6xl mob:text-5xl mob:text-center text-[#2fb9db] ${space.className} `}
              >
                <span className="text-white pr-2">Muhammad </span> Okasha
              </h1>
              <p
                className={`max-w-xl mob:w-full text-justify text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 `}
              >
                I design and build responsive web and mobile interfaces with a
                focus on performance, accessibility, and maintainable code.
                Over the last 3+ years I&apos;ve shipped React, Next.js, Vue, and
                React&nbsp;Native products, integrated REST APIs, and partnered
                with designers to ship pixel-perfect experiences that scale.
              </p>
              <div className="flex gap-4 mob:justify-center">
                <a
                  href="#projects"
                  className="bg-[#2fb9db] hover:bg-[#1b8aa5] text-white py-3 px-6 rounded-full text-base font-semibold transition-colors"
                >
                  View Recent Work
                </a>
                <a
                  href="#contact"
                  className="border border-[#2fb9db] hover:bg-[#2fb9db]/10 text-white py-3 px-6 rounded-full text-base font-semibold transition-colors"
                >
                  Let&apos;s Collaborate
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1, delay: 0.5 },
              }}
            >
              <div className="border-x rounded-full p-2 md:w-fit border-l-green-400 border-r-neutral-50 ">
                <motion.div
                  className="h-[30rem] w-[30rem] mob:h-[19rem] mob:w-full  rounded-full from-[#0BA8E6] via-green-500 to-cyan-700 bg-gradient-to-r relative"
                  variants={{ visible: { scale: 1 }, hidden: { scale: 0.8 } }}
                >
                  <Image
                    src={profileImage}
                    alt="Muhammmad Okasha"
                    className="  h-[34rem] mob:h-[23rem]  rounded-full   absolute -top-16 left-0  "
                  />
                  <motion.button
                    className=" py-4 px-4 rounded-full absolute  flex -right-20  mob:-right-0.5 -top-20 items-center  justify-center"
                    animate={{
                      y: [0, 10, 0],
                      transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                  >
                    <Image
                      src={codeImg}
                      alt="Icon"
                      className="h-36 w-36 mob:hidden "
                    />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
