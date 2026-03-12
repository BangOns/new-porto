"use client";
import { motion } from "framer-motion";
import { LucideIcon, Mail, MessageSquare } from "lucide-react";
import { Socmed } from "@/utils/WrappingData";
import LinkButton from "../ui/LinkButton";
import { Card, CardDescription, CardHeader } from "../ui/card";
import Link from "next/link";

const contactOptions = [
  {
    icon: <Mail className="h-6 w-6 text-blue-500" />,
    label: "Email",
    value: "syahr9950@gmail.com",
    href: "mailto:syahr9950@gmail.com",
    description: "Send me an email for inquiries",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="mt-24 w-full py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400">
          <MessageSquare className="h-3 w-3" />
          Contact
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
          Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
        </h2>
        <p className="max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          Whether you have a project in mind or just want to say hi, my inbox is
          always open.
        </p>
      </motion.div>

      <div className="mt-16 flex justify-center">
        <div className="grid w-full max-w-md gap-6">
          {contactOptions.map((option, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden"
            >
              <Link href={option.href} target="_blank" rel="noreferrer">
                <Card className="p-6 shadow-sm backdrop-blur-md transition-all hover:shadow-md dark:border-white/10 dark:bg-zinc-900/50">
                  <CardHeader>
                    <section className="flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 transition-colors group-hover:bg-white dark:group-hover:bg-neutral-700">
                        {option.icon}
                      </div>
                    </section>
                  </CardHeader>
                  <CardDescription className="flex flex-col items-center gap-4 text-center">
                    <div className="space-y-1">
                      <h3 className="font-bold text-neutral-900 dark:text-white">
                        {option.label}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {option.value}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-500">
                        {option.description}
                      </p>
                    </div>
                  </CardDescription>
                </Card>
              </Link>
            </motion.section>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 flex flex-col items-center gap-6"
      >
        <div className="flex gap-4">
          {Socmed.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3, scale: 1.1 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white/50 shadow-sm backdrop-blur-md transition-all hover:border-blue-500/50 hover:bg-white dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-blue-400/50"
            >
              <LinkButton
                imageWeb={social.ImageWeb as LucideIcon}
                social={social.LinkWeb}
              ></LinkButton>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
