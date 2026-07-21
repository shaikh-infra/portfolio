"use client";

import { motion, type Variants } from "framer-motion";
import ScrollToProjects from "./ScrollToProjects";
import ScrollToContact from "./ScrollToContact";
import ScrollIndicator from "./ScrollIndicator";
import SocialSection from "./SocialSection";

const hero: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={hero}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen pt-32 md:pt-40 lg:pt-48"
    >
      <div className="flex flex-col items-center px-6 text-center">

        <motion.h1
          variants={item}
          className="text-5xl font-extralight leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-[95px]"
        >
          SOHEL SHAIKH
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-lg text-gray-400 sm:text-xl md:text-2xl md:translate-x-4"
        >
          Architect | Civil Engineer
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 md:-translate-x-4"
        >
          <ScrollToProjects className="w-64 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 transition duration-300 hover:border-white/60 sm:w-auto">
            Explore Projects
          </ScrollToProjects>

          <ScrollToContact className="w-64 rounded-xl border border-white/20 bg-white/[0.03] px-6 py-3 transition duration-300 hover:border-white/60 sm:w-auto">
            Get Connected
          </ScrollToContact>
        </motion.div>

        <div className="-py-2 translate-x-2 md:translate-x-0 md:mt-6">
          <ScrollIndicator />
        </div>

        <div className="-py-2 mt-0 md:mt-2">
          <SocialSection />
        </div>

      </div>
    </motion.section>
  );
}