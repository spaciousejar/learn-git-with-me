'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { CoolMode } from "./magicui/cool-mode"
import { toast } from "@/hooks/use-toast"

export function DownloadButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
   <Button
   variant="ghost">
     <a
      className="flex"
      href="git-cheatsheet.pdf"
      download="git-cheatsheet.pdf"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      onClick={() => {
        toast({
          title: "Congratulations! 🎉",
          description: "You have successfully downloaded the CHEATSHEET.",
        })
      }}

     >
      <span className="inset-0 opacity-20 rounded-md animate-pulse"></span>
      <Download 
        className={`mr-2 h-4 w-4 transition-transform duration-300 ease-in-out`} 
      />
      CHEATSHEET
      
      </a>
      </Button>
      
    
  )
}