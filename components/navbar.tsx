"use client"; // Corrected "clien" to "client"
import { ModeToggle } from "@/components/theme-toggle";
import { MoveUpRightIcon } from "lucide-react";
import { StarIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import NumberTicker from "./ui/number-ticker";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import { LogoI } from "./Logo";
import { Icons } from "./icons";

export const NAVLINKS = [
  {
    title: "Learn",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Community",
    href: "https://app.daily.dev/squads/gitmelive",
    external: true,
  },
];

export function Navbar() {
  const [stars, setStars] = useState<number>(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/spaciousejar/learn-git-with-me');
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching stars:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="max-w-[1300px] sm:px-0 px-3 mx-auto h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            className={cn(
              buttonVariants({
                variant: "rainbow",
              }),
              "hidden md:inline-flex",
            )}
            target="_blank"
            href="https://github.com/spaciousejar/learn-git-with-me"
          >
            <div className="flex items-center">
              <Icons.gitHub className="size-4" />
              <span className="ml-1 lg:hidden">Star</span>
              <span className="ml-1 hidden lg:inline">Star on GitHub</span>{" "}
            </div>
            <div className="ml-2 flex items-center gap-1 text-sm md:flex">
              <StarIcon className="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300" />
              <NumberTicker
                value={stars}
                className="font-display font-medium text-black dark:text-white"
              />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/spaciousejar/learn-git-with-me.git"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.gitHub className="size-5" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <LogoI />
      <h2 className="text-md font-bold">GIT ME</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}{" "}
            {item.external && (
              <MoveUpRightIcon
                className="w-3 h-3 align-super"
                strokeWidth={3}
              />
            )}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
