"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { dataExperience } from "@/utils/WrappingData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-24 w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-600 dark:text-purple-400">
          <Briefcase className="h-3 w-3" />
          Experience
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          My <span className="text-purple-600 dark:text-purple-400">Professional Journey</span>
        </h2>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          A timeline of my professional experience and growth as a developer.
        </p>
      </motion.div>

      <div className="relative mt-16 max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800 sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {dataExperience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex flex-col sm:flex-row ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } items-start sm:items-center`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 top-1.5 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-purple-600 dark:border-neutral-950 sm:left-1/2" />

              {/* Card Container */}
              <div className={`w-full pl-12 sm:w-[calc(50%-1.5rem)] sm:pl-0 ${
                index % 2 === 0 ? "sm:pr-0" : "sm:pl-0"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-neutral-200 bg-white/50 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex flex-col gap-2 text-left">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-purple-400">
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="font-medium text-neutral-700 dark:text-neutral-300">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Empty Space for opposite side */}
              <div className="hidden sm:block sm:w-[calc(50%-1.5rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
