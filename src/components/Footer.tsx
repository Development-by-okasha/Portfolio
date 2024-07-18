import React from "react";
import { Lobster, Dancing_Script, Kanit } from "next/font/google";
const lobster = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});
function Footer() {
  return (
    <div>
      <div className=" pt-10 px-20 mob:px-0 flex justify-center bg-gradient-to-r w-full from-[#10131a] via-gray-800 to-[#0F212C]">
        <div className="flex  border-t justify-center space-x-32 mob:space-x-0 max-w-2xl items-center mob:flex-col  py-4">
          <h1
            className={` ${lobster.className}  tracking-widest text-white font-bold text-xl nameFont`}
          >
            Muhammad Okasha
          </h1>
          <ul className="flex gap-x-3 text-justify  text-lg  font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 ">
            <li>
              <a href="#about"> About</a>
            </li>
            <li>
              <a href="#skills"> Skills</a>
            </li>
            <li>
              <a href="#projects">Project</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
