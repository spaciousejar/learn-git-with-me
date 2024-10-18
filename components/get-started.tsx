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
        description: "Let’s get started! 🌟",
      })
    }}
  >
     <ShinyButton>Get Started</ShinyButton> 
    
  </Link>
  )
}
