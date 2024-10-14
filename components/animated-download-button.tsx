'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
   
    
     <a
      className="flex"
      href="git-cheatsheet.pdf"
      download="git-cheatsheet.pdf"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
     >
      <span className="inset-0 opacity-20 rounded-md animate-pulse"></span>
      <Download 
        className={`mr-2 h-4 w-4 transition-transform duration-300 ease-in-out ${
          isHovered ? 'transform -translate-y-1' : ''
        }`} 
      />
      CHEATSHEET
      
      </a>
    
      
    
  )
}