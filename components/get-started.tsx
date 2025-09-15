"use client"

import { useToast } from "@/hooks/use-toast"
import ShinyButton from "./magicui/shiny-button"
import { page_routes } from "@/lib/routes-config"
import Link from "next/link"

export function GET() {
  const { toast } = useToast()

  return (
    <Link
      href={`/docs${page_routes[0].href}`}
      onClick={() => {
        toast({
          title: "Hey! Welcome",
          description: "Let's get started! 🌟",
        })
      }}
      className="focus:ring-2 focus:ring-primary focus:outline-none rounded-md"
      aria-label="Get started with learning Git and GitHub"
    >
     <ShinyButton>Get Started</ShinyButton> 
    
  </Link>
  )
}