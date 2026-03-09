import Link from "next/link";
import React from "react";

export default function NavLink({
  item,
  darkModes,
  GetPage,
}: {
  item: string;
  darkModes: boolean;
  GetPage: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}) {
  return (
    <Link
      href={`#${item}`}
      onClick={(e) => GetPage(e, item)}
      className={`capitalize font-medium transition-colors hover:text-blue-500 ${
        darkModes ? "text-neutral-300" : "text-neutral-600"
      }`}
    >
      {item}
    </Link>
  );
}
