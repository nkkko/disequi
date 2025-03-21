"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-green-400/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  const prefersReducedMotion = useReducedMotion()
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? { opacity: 1, y: 0, rotate } : { opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={inView ? { opacity: 1, y: 0, rotate } : { opacity: 0, y: -150, rotate: rotate - 15 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 2.4,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: prefersReducedMotion ? 0 : 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={prefersReducedMotion ? {} : { y: [0, 15, 0] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-green-400/[0.15] shadow-[0_8px_32px_0_rgba(74,222,128,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(74,222,128,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  )
}

export function AnimatedHero({ children }: { children: ReactNode }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="relative overflow-hidden">
      {children}
      {inView && (
        <>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-green-400/[0.15]"
            className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          />
          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-green-400/[0.15]"
            className="absolute right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          />
          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-green-400/[0.15]"
            className="absolute left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          />
        </>
      )}
    </div>
  )
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
}

