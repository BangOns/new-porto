"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import Image from "next/image";
import { dataProject } from "@/utils/WrappingData";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section id="projects" className="mt-24 w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
          <Folder className="h-3 w-3" />
          Projects
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          My{" "}
          <span className="text-blue-600 dark:text-blue-400">
            Creative Works
          </span>
        </h2>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          A showcase of various web applications and platforms I&apos;ve built.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {dataProject.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative flex flex-col transition-all  dark:border-white/10 dark:bg-zinc-900/50"
          >
            <Card className=" w-full  dark:border-white/10 dark:bg-zinc-900/50 text-start p-4">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.imageWeb}
                    alt={project.namaWeb}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className=" flex items-center w-full flex-wrap gap-2">
                  {project.TechStack.split(",").map((tech, idx) => (
                    <Badge key={idx}>{tech.trim()}</Badge>
                  ))}
                </div>

                <CardTitle className="text-center mt-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.namaWeb}
                  </h3>
                </CardTitle>
              </CardHeader>

              <CardDescription>
                <div className="text-center">{project.description}</div>
              </CardDescription>
              <CardAction>
                <div className="flex gap-3">
                  {project.linkGithub && (
                    <Link
                      href={project.linkGithub}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.linkWeb && (
                    <Link
                      href={project.linkWeb}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardAction>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
