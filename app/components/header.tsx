"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { NavigationLinks } from "./navigation-links"

export function Header() {
  return (
    <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative z-40">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-wider font-mono">
            DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <NavigationLinks />
          </nav>
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}