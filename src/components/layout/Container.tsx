"use client";
import Navbar from "@/components/layout/Navbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Container() {
  const [darkModes, setDarkMode] = useState(true); // Default to true for premium look, user can toggle

  // Using useEffect to listen strictly on hydration to lock overflow x
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    // optionally manage class on body directly for bg color consistency if scrolled fast
    if (darkModes) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkModes]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans transition-colors duration-500 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <Navbar darkModes={darkModes} setDark={setDarkMode} />

      {/* Ambient background glows */}
      {/* <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-blue-400/30 blur-[100px] dark:bg-blue-900/20 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute right-[10%] top-[30%] h-[28rem] w-[28rem] rounded-full bg-purple-400/30 blur-[120px] dark:bg-purple-900/20 pointer-events-none"
      /> */}

      <main className="z-10  flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-7xl dark:text-white"
        >
          Syahroni <br />
          <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            I am Frontend Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          I&apos;m a Frontend Developer specializing in building modern,
          responsive, and highly interactive web applications using React,
          Next.js, and Tailwind CSS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-200 bg-white/50 px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white dark:border-white/50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>
      </main>
    </div>
  );
}
