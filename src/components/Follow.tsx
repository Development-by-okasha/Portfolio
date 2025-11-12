import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaArrowRight,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-okasha-83a702282/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Development-by-okasha",
    icon: FaGithub,
  },
  {
    name: "Email",
    href: "mailto:ukashafarooqi05@gmail.com",
    icon: FaEnvelope,
  },
];

function Follow() {
  return (
    <div className="bg-gradient-to-r w-full from-[#10131a] via-gray-800 to-[#0F212C]">
      <div className="relative text-white flex flex-col items-center justify-center px-8 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0BA8E6]/20 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-5xl w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div>
            <h2 className="text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-300 to-teal-400 mob:text-center">
              Let’s stay connected
            </h2>
            <p className="mt-6 text-lg text-neutral-300 max-w-xl mob:text-center lg:text-left">
              Follow along for new project drops, behind-the-scenes builds, and
              tips on building fast, user-friendly interfaces.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#11141B]/70 px-6 py-6 text-center transition hover:border-[#2fb9db] hover:bg-[#1a2330]"
                >
                  <Icon className="text-[#2fb9db] text-3xl mb-3" aria-hidden />
                  <span className="text-white font-semibold text-sm">
                    {item.name}
                  </span>
                  <FaArrowRight className="mt-3 text-sm text-white opacity-0 transition group-hover:opacity-100" />
                </a>
              );
            })}
            <a
              href="#contact"
              className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#2fb9db]/50 bg-[#11141B]/70 px-6 py-6 text-center transition hover:bg-[#2fb9db]/10"
            >
              <span className="text-[#2fb9db] font-semibold text-sm uppercase tracking-wide">
                New Project?
              </span>
              <span className="mt-3 text-white text-sm">
                Start the conversation
              </span>
              <FaArrowRight className="mt-3 text-sm text-white opacity-0 transition group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Follow;
