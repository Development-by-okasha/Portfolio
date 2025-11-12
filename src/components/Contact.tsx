"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../utils/cn";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function Contact() {
  return (
    <div
      className="h-full relative w-full overflow-hidden bg-[#11141B] flex flex-col items-center justify-center rounded-lg"
      id="contact"
    >
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="max-w-4xl w-full mx-auto rounded-none z-30 md:rounded-2xl p-6 mt-36 mb-20 md:p-12 shadow-input bg-white/5 backdrop-blur-lg border border-white/10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl text-white">
              Let’s build something remarkable
            </h2>
            <p className="mt-4 text-neutral-300 text-base leading-relaxed">
              Whether you have a product ready to refine or an idea that needs a
              frontend specialist, I’d love to hear about it. Share your vision
              and I’ll get back within one business day.
            </p>
            <div className="mt-8 space-y-4 text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2fb9db]/20 text-[#2fb9db] font-semibold">
                  01
                </span>
                <p>High-performing web & mobile interfaces built with React, Next.js, Vue, and React Native.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2fb9db]/20 text-[#2fb9db] font-semibold">
                  02
                </span>
                <p>REST API integrations, WordPress customization, and lightweight Laravel/Django backends.</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2fb9db]/20 text-[#2fb9db] font-semibold">
                  03
                </span>
                <p>Design-to-code collaboration, component libraries, and performance-focused delivery.</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <LabelInputContainer>
                <Label htmlFor="fullname">Name</Label>
                <Input id="fullname" placeholder="Your full name" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="you@example.com" type="email" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer>
              <Label htmlFor="projectScope">Project scope</Label>
              <Input
                id="projectScope"
                placeholder="Website redesign, mobile app, component library..."
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="message">How can I help?</Label>
              <textarea
                id="message"
                className="flex h-32 w-full border border-transparent bg-gray-50/80 dark:bg-zinc-800/80 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] transition duration-400"
              ></textarea>
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-[#2fb9db] to-[#1b8aa5] block w-full text-white rounded-md h-12 font-semibold tracking-wide shadow-[0px_1px_0px_0px_#ffffff20_inset,0px_-1px_0px_0px_#ffffff10_inset]"
              type="submit"
            >
              Send message →
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
