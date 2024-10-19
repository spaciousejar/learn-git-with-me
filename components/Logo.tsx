'use client'

import { GitBranch } from "lucide-react"
import { useState } from "react"

export function LogoI() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="inline-flex items-center space-x-3 bg-gradient-to-br"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative transition-transform duration-300 ease-in-out ${isHovered ? 'rotate-180' : ''}`}>
        <GitBranch className="h-6 w-6" />
      </div>
      
      </div>
    
  )
}