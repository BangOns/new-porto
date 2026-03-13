"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layout, Sparkles } from "lucide-react";
import { Card, CardDescription, CardHeader } from "../ui/card";

const skills = [
  {
    icon: <Layout className="h-5 w-5 text-blue-500" />,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web applications with React and Next.js.",
  },
  {
    icon: <Code2 className="h-5 w-5 text-purple-500" />,
    title: "Modern Styling",
    description:
      "Crafting beautiful interfaces using Tailwind CSS and modern CSS techniques.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    title: "State Management",
    description:
      "Managing complex application states efficiently with modern hooks and libraries.",
  },
  {
    icon: <Globe className="h-5 w-5 text-orange-500" />,
    title: "Web Standards",
    description:
      "Ensuring accessibility, SEO, and cross-browser compatibility across all projects.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className=" w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
          <Sparkles className="h-3 w-3" />
          About Me
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Passion for{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Digital Craft
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          I am a dedicated Frontend Developer with 1 year of professional
          experience in building modern web applications and creating seamless
          user experiences. My approach combines technical precision with
          creative problem-solving to develop applications that are not only
          functional but also enjoyable to use.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden  transition-all  dark:border-white/40 dark:bg-white/5"
          >
            <Card className=" p-3 gap-0 w-full dark:border-white/40 dark:bg-white/5 border border-neutral-200 bg-white/50">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition-all group-hover:bg-blue-500/10" />

              <CardHeader className="p-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 transition-colors group-hover:bg-white dark:group-hover:bg-neutral-700">
                  {skill.icon}
                </div>
              </CardHeader>
              <CardDescription className="space-y-2 text-left ">
                <h3 className="text-start font-semibold text-neutral-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-start text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {skill.description}
                </p>
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
