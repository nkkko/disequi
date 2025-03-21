"use client"

import React from "react"

interface ContentSectionProps {
  children: React.ReactNode
  className?: string
  colSpan?: string
}

export function ContentSection({ 
  children, 
  className = "", 
  colSpan = "col-span-4" 
}: ContentSectionProps) {
  return (
    <div className={`${colSpan} border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}