"use client"

import React from "react"
import { motion } from "framer-motion"
import { AnimatedHero, fadeUpVariants } from "./animated-hero"

interface HeroSectionProps {
  title: string
  description: string
  className?: string
  children?: React.ReactNode
}

export function HeroSection({ 
  title, 
  description, 
  className = "", 
  children 
}: HeroSectionProps) {
  return (
    <div className={`col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative overflow-hidden ${className}`}>
      <AnimatedHero>
        <div className="relative z-10 p-8">
          <motion.h1
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono"
          >
            {title}
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="text-xl mb-8 text-green-400/80"
          >
            {description}
          </motion.p>
          {children}
        </div>
      </AnimatedHero>
    </div>
  )
}