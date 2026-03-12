"use client";
import { SocmedTop } from "@/utils/WrappingData";
import NavLink from "../ui/NavLink";
import LinkButton from "../ui/LinkButton";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        dark:bg-zinc-950/70 dark:backdrop-blur-xl 
        bg-transparent backdrop-blur-xl `}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <h1
            className={`font-bold text-2xl tracking-tighter dark:text-white text-neutral-900`}
          >
            Syahroni<span className="text-blue-500">.</span>
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["about", "experience", "projects", "skills", "contact"].map(
            (item) => (
              <NavLink key={item} item={item} />
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <AnimatedThemeToggler />
          <section className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button className={"bg-transparent cursor-pointer"}>
                    <RxHamburgerMenu className="text-black " />
                  </Button>
                }
              />
              <DropdownMenuContent>
                <DropdownMenuGroup>
                  {["about", "experience", "projects", "skills", "contact"].map(
                    (item) => (
                      <DropdownMenuItem key={item}>
                        <NavLink item={item} />
                      </DropdownMenuItem>
                    ),
                  )}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <div className="hidden md:flex items-center gap-3">
            {SocmedTop.map((social, index) => (
              <LinkButton
                key={index}
                social={social.LinkWeb}
                imageWeb={social.ImageWeb}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
