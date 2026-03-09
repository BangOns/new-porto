import { LucideIcon } from "lucide-react";
import Link from "next/link";

export default function LinkButton({
  social,
  imageWeb: Icon,
  darkModes,
  text,
}: {
  social: string;
  imageWeb?: LucideIcon;
  text?: string;
  darkModes: boolean;
}) {
  return (
    <Link
      href={social}
      target="_blank"
      rel="noreferrer"
      className={`transition-transform hover:scale-110 ${darkModes ? "invert" : ""}`}
    >
      {Icon && !text && <Icon size={25} className="dark:invert" />}
      {text && !Icon && <span className="ml-2">{text}</span>}
      {text && Icon && (
        <section className="flex gap-2">
          <p className="dark:invert">{text}</p>
          <Icon size={25} className="dark:invert" />
        </section>
      )}
    </Link>
  );
}
