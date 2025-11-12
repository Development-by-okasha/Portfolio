"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Follow from "@/components/Follow";

export default function Home() {
  return (
    <div className="scroll-smooth bg-dark">
      <Header />
      <Intro />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Follow />
      <Footer />
    </div>
  );
}
