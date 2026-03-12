"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";

import HeroSection from "../section/HeroSection";

const AboutSection = dynamic(() => import("../section/AboutSection"));
const ExperienceSection = dynamic(() => import("../section/ExperienceSection"));
const ProjectSection = dynamic(() => import("../section/ProjectSection"));
const SkillSection = dynamic(() => import("../section/SkillSection"));
const ContactSection = dynamic(() => import("../section/ContactSection"));
const FooterSection = dynamic(() => import("../section/FooterSection"));
const Meteors = dynamic(() =>
  import("../ui/meteors").then((mod) => mod.Meteors),
);

export default function Container() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 font-sans transition-colors duration-500 dark:from-zinc-950 dark:via-black dark:to-zinc-950">
      <Navbar />

      <Meteors number={30} />
      <main className="flex max-w-4xl flex-col items-center px-6 text-center">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
