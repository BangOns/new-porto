import { LucideIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  social: string;
  imageWeb?: LucideIcon;
  text?: string;
};

export default function LinkButton({ social, imageWeb: Icon, text }: Props) {
  return (
    <Link
      href={social}
      target="_blank"
      rel="noreferrer"
      aria-label={text ? undefined : social} // fallback kalau text kosong
      className="flex items-center gap-2 transition-transform hover:scale-110 text-black dark:text-white"
    >
      {Icon && <Icon aria-hidden={text ? true : false} size={25} />}
      {text && <span>{text}</span>}
    </Link>
  );
}
