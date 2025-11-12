"use client";
import React from "react";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

const skillCategories = [
  {
    title: "Frontend Engineering",
    blurb:
      "Reusable component systems, pixel-perfect UI, and performant SSR/SPA experiences.",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    blurb:
      "Shipping consistent UI and native-feeling flows across iOS and Android.",
    skills: ["React Native", "Expo", "Reusable design systems"],
  },
  {
    title: "Styling & UX",
    blurb:
      "Design-to-code implementation with a focus on accessibility and responsive behavior.",
    skills: ["HTML5", "CSS3", "SASS / SCSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend & CMS",
    blurb:
      "API integrations and light backend work to support full-stack delivery.",
    skills: [
      "REST APIs & JSON",
      "Laravel (CRUD, auth)",
      "Django (fundamentals)",
      "WordPress (custom themes, builders)",
    ],
  },
  {
    title: "Tooling & Workflow",
    blurb:
      "Modern collaboration stack for rapid iteration, QA, and reliable deploys.",
    skills: ["Git / GitHub / GitLab", "CI-ready workflows", "Postman", "VS Code", "Figma handoff"],
  },
];

function Skills() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-[#10131a]" id="skills">
      <div className="w-full bg-transparent bg-dot-white/[0.35] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_22%,black)]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-4xl sm:text-6xl text-center text-white font-bold ${space.className} bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500`}
          >
            Skill Stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-center text-lg text-neutral-300 max-w-3xl mx-auto"
          >
            A balanced mix of modern frameworks, strong UI fundamentals, and the
            tooling needed to deliver fast, reliable experiences across web and
            mobile.
          </motion.p>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#11141B]/80 backdrop-blur-sm p-8 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)]"
              >
                <div className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-[#0BA8E6] via-green-500 to-cyan-700 opacity-20 blur-3xl" />
                <h3 className="text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="mt-3 text-base text-neutral-300">
                  {category.blurb}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#2fb9db]/40 bg-[#1a2330]/60 px-4 py-2 text-sm font-medium text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
