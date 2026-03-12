import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

export const SkillCategory = ({
  title,
  icon,
  skills,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="flex flex-col gap-6"
  >
    <div className="flex items-center gap-3 px-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
        {title}
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + index * 0.08 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="group relative "
        >
          <Card className="border w-full  border-neutral-200 bg-white/50 p-4 shadow-sm backdrop-blur-md transition-all hover:shadow-md dark:border-white/10 dark:bg-zinc-900/50">
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-br from-emerald-500/0 to-blue-500/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20" />

            <CardDescription className="flex flex-col items-center gap-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 transition-colors dark:bg-neutral-800 group-hover:bg-white dark:group-hover:bg-neutral-700">
                <skill.icon
                  className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.hex || "currentColor" }}
                />
              </div>
              <span className="text-sm font-semibold text-neutral-700 transition-colors dark:text-neutral-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                {skill.name}
              </span>
            </CardDescription>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
