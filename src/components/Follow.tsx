import React from "react";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";
function Follow() {
  return (
    <div className="bg-gradient-to-r w-full from-[#10131a] via-gray-800 to-[#0F212C]">
      <div className="text-7xl flex  justify-start  text-left font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 cursor-pointer pb-10 ">
        &times;
      </div>
      <div className=" text-white flex flex-col items-center justify-center p-6">
        <div className=" w-full flex mob:flex-col items-center px-20  justify-between ">
          <div className="text-9xl font-bold mob:text-5xl">
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400">
              Follow me
            </span>
            <div className="mt-10 mb-6 flex  space-x-2">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full  bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 ${
                    i < 6 ? "bg-pink-500" : "bg-purple-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mob:flex justify-items-center mt-4">
            <a
              href="https://www.linkedin.com/in/muhammad-okasha-83a702282/"
              className="text-blue-400   hover:text-white"
            >
              <FaLinkedin size={40} />
            </a>
            <a href="" className="text-blue-300   hover:text-white">
              <FaTwitter size={40} />
            </a>
            <a
              href="https://www.instagram.com/invites/contact/?igsh=idk7ll1bvdsv&utm_content=kuigdh5  "
              className="text-blue-300   hover:text-white"
            >
              <FaInstagram size={40} />
            </a>
            <a href="" className="text-blue-300   hover:text-white">
              <FaFacebook size={40} />
            </a>
            <a href="" className="text-blue-300   hover:text-white">
              <FaYoutube size={40} />
            </a>
            <a href="https://github.com/Development-by-okasha" className="text-blue-300   hover:text-white">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follow;
