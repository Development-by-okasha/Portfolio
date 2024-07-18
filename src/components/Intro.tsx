"use client";
import React from "react";
import { Karla, Great_Vibes } from "next/font/google";
import { GoDownload } from "react-icons/go";
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
                FRONTEND WEB DEVELOPER
              </h1>
              <h1
                className={`text-6xl mob:text-5xl mob:text-center text-[#2fb9db] ${space.className} `}
              >
                <span className="text-white pr-2">Muhammad </span> Okasha
              </h1>
              <p
                className={`max-w-xl mob:w-full text-justify text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 `}
              >
                I&apos;m a Frontend Developer crafting seamless user experiences
                with innovative front-end solutions and transforming ideas into
                interactive and responsive web applications.
              </p>
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
                    className="bg-[#0b80e6] hover:bg-[#2d74b2] text-white py-4 px-4 rounded-full absolute w-24 h-24  mob:h-14 mob:w-14 flex items-center bottom-0 justify-center"
                    animate={{
                      y: [0, -20, 0],
                      transition: {
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }}
                  >
                    <GoDownload size={20} className="mob:hidden" />
                    <span className="ml-2">CV</span>
                  </motion.button>
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
