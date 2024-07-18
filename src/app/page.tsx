"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Follow from "@/components/Follow";
import { useEffect, useState } from "react";

const Loader = () => (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </div>
  );
}
