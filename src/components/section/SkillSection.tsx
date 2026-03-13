"use client";
import { motion } from "framer-motion";
import { Cpu, Sparkles, Terminal } from "lucide-react";
import { SiReact, SiExpress, SiMongodb } from "react-icons/si";
import {
  dataTekno,
  dataOther,
  frameworkFrontend,
  frameworkBackend,
  Database,
} from "@/utils/WrappingData";
import { SkillCategory } from "../features/SkillSection/SkillCategory";

export default function SkillSection() {
  return (
    <section id="skills" className="mt-24 w-full py-12">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <Sparkles className="h-3 w-3" />
          Technical Stack
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          My{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Expertise
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          A comprehensive toolkit of technologies and platforms I use to build
          premium digital experiences.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="mt-16 space-y-4">
        <SkillCategory
          title="Language Programming"
          icon={<Cpu className="h-4 w-4 text-blue-500" />}
          skills={dataTekno}
          delay={0.2}
        />
        <SkillCategory
          title="Frontend Framework"
          icon={<SiReact className="h-4 w-4 text-blue-500" />}
          skills={frameworkFrontend}
          delay={0.2}
        />
        <SkillCategory
          title="Backend Framework"
          icon={<SiExpress className="h-4 w-4 text-black" />}
          skills={frameworkBackend}
          delay={0.2}
        />
        <SkillCategory
          title="Database"
          icon={<SiMongodb className="h-4 w-4 text-[#42B883]" />}
          skills={Database}
          delay={0.2}
        />
        <SkillCategory
          title="Tools & Environment"
          icon={<Terminal className="h-4 w-4 text-emerald-500" />}
          skills={dataOther}
          delay={0.4}
        />
      </div>
    </section>
  );
}
