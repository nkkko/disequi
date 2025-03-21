"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  // Function to determine if a path is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative z-40">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider font-mono">
            DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className={`${isActive('/services') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              Services
            </Link>
            <Link 
              href="/process" 
              className={`${isActive('/process') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              Process
            </Link>
            <Link 
              href="/blog" 
              className={`${isActive('/blog') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-green-400 font-bold' : 'text-green-400/60 hover:text-green-400'} transition-colors`}
            >
              Contact
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}