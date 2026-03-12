"use client";
import { motion } from "framer-motion";
import { Socmed } from "@/utils/WrappingData";
import LinkButton from "../ui/LinkButton";
import { LucideIcon } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 w-full border-t border-neutral-200 py-12 dark:border-white/10">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          © {currentYear} Syahroni. All rights reserved.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {Socmed.map((social, index) => (
            <LinkButton
              key={index}
              imageWeb={social.ImageWeb as LucideIcon}
              social={social.LinkWeb}
            />
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
