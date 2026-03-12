import { getPage } from "@/hooks/useGetPage";
import Link from "next/link";

export default function NavLink({ item }: { item: string }) {
  return (
    <Link
      href={`#${item}`}
      onClick={(e) => getPage(e, item)}
      className={`capitalize font-medium text-neutral-600 font-sans  dark:text-neutral-300 transition-colors hover:text-blue-500 `}
    >
      {item}
    </Link>
  );
}
