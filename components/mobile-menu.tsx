"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-400 hover:text-green-300 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 border border-green-400/20 bg-black/90 backdrop-blur-sm z-50">
          <nav className="flex flex-col p-4">
            <Link
              href="/"
              className="text-green-400 hover:text-green-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-green-400 hover:text-green-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-green-400 hover:text-green-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-green-400 hover:text-green-300 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

