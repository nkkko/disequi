"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { NavigationLinks } from "./navigation-links"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleLinkClick = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-400 hover:text-green-300 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute left-0 right-0 top-full mt-2 bg-black/90 backdrop-blur-sm transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 border-t border-green-400/20" : "max-h-0 border-t-0"
        } overflow-hidden`}
      >
        <nav className="flex flex-col p-4">
          <NavigationLinks onClick={handleLinkClick} vertical={true} />
        </nav>
      </div>
    </div>
  )
}

