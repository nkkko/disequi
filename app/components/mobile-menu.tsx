"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

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
          <Link
            href="/"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/process"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link
            href="/blog"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-green-400 hover:text-green-300 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}

