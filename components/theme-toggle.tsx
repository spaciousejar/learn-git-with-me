"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className={cn("px-2 focus:ring-2 focus:ring-primary focus:outline-none", className)}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
      {...props}
    >
      <SunIcon 
        className="size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" 
        aria-hidden="true"
      />
      <MoonIcon 
        className="hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" 
        aria-hidden="true"
      />
      <span className="sr-only">Toggle theme between light and dark mode</span>
    </Button>
  );
});

ModeToggle.displayName = "ModeToggle";