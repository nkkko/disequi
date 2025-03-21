"use client"

import React from "react"
import { GradientBackground } from "./gradient-background"
import { Header } from "./header"
import { Footer } from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

export function PageLayout({ children, className = "" }: PageLayoutProps) {
  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          <Header />
          
          {/* Main content - full width by default */}
          <div className={`col-span-4 grid grid-cols-4 gap-4 ${className}`}>
            {children}
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  )
}