"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation'

// Define our navigation menu structure
export const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/process', label: 'Process' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

interface NavigationLinksProps {
  onClick?: () => void // For mobile menu to close after click
  vertical?: boolean // For mobile menu's vertical layout
}

export function NavigationLinks({ onClick, vertical = false }: NavigationLinksProps) {
  const pathname = usePathname()

  // Function to determine if a path is active
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    if (path !== '/' && pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`
            ${isActive(item.path) 
              ? 'text-green-400 font-bold' 
              : 'text-green-400/60 hover:text-green-400'
            } 
            transition-colors
            ${vertical ? 'py-2' : ''}
          `}
          onClick={onClick}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}