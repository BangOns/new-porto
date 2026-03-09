"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SocmedTop } from "@/utils/WrappingData";
import NavLink from "../ui/NavLink";
import LinkButton from "../ui/LinkButton";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar({
  darkModes,
  setDark,
}: {
  darkModes: boolean;
  setDark: (val: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function GetPage(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const NavHeight = 80;
      const Position = element.offsetTop - NavHeight;
      window.scrollTo({
        left: 0,
        top: Position,
        behavior: "smooth",
      });
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkModes
            ? "bg-zinc-950/70 backdrop-blur-xl shadow-md border-b border-white border-opacity-5"
            : "bg-white/70 backdrop-blur-xl shadow-md border-b border-black border-opacity-5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1
            className={`font-bold text-2xl tracking-tighter ${darkModes ? "text-white" : "text-neutral-900"}`}
          >
            Syahroni<span className="text-blue-500">.</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["experience", "projects", "certificates", "skills", "contact"].map(
            (item) => (
              <NavLink
                key={item}
                item={item}
                darkModes={darkModes}
                GetPage={GetPage}
              />
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle darkModes={darkModes} setDark={setDark} />
          <div className="hidden sm:flex items-center gap-3">
            {SocmedTop.map((social, index) => (
              <LinkButton
                key={index}
                social={social.LinkWeb}
                imageWeb={social.ImageWeb}
                darkModes={darkModes}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
