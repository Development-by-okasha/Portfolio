"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { GiCharacter } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { VscLightbulbSparkle } from "react-icons/vsc";
const navItems = [
  {
    name: "About",
    link: "#about",
    icon: <GiCharacter className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Skills",
    link: "#skills",
    icon: (
      <VscLightbulbSparkle className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <GrProjects className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];
function Header() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="space-x-24 mob:space-x-10 " />
    </div>
  );
}

export default Header;
