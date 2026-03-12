import { TypingAnimation } from "../ui/typing-animation";
import { getPage } from "@/hooks/useGetPage";
import Link from "next/link";

export default function HeroSection() {
  const cvPath = "/Cv_Syahroni_Frontend_Dev.pdf";
  return (
    <section className="min-h-[98vh] flex flex-col items-center justify-center">
      <div className="inline-flex items-center gap-2  rounded-full border border-black/5 bg-white/50 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        Available for new opportunities
      </div>
      <h1 className="mt-8 flex flex-col items-center gap-0 text-2xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        Syahroni
        <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-blue-400">
          I&apos;m{" "}
          <TypingAnimation className="leading-0">
            Frontend Developer
          </TypingAnimation>
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
        I&apos;m a Frontend Developer specializing in building modern,
        responsive, and highly interactive web applications using React,
        Next.js, and Tailwind CSS.
      </p>

      <section className="mt-10 flex flex-wrap justify-center gap-4">
        <Link
          href="#projects"
          onClick={(e) => getPage(e, "projects")}
          className="rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          View My Work
        </Link>

        <Link
          href="#contact"
          onClick={(e) => getPage(e, "contact")}
          className="rounded-full border border-neutral-200 bg-white/50 px-8 py-3.5 text-sm font-semibold text-neutral-900 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-md hover:bg-white dark:border-white/50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        >
          Contact Me
        </Link>
        <Link
          href={cvPath}
          download="Cv_Syahroni"
          className="relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300
            bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500
            hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
            hover:-translate-y-1 hover:shadow-xl active:scale-95"
        >
          Download CV
        </Link>
      </section>
    </section>
  );
}
