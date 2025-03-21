"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

export function WaveVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
    rootMargin: "200px",
  })

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(mediaQuery.matches)

    const handleReducedMotionChange = () => setIsReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleReducedMotionChange)

    return () => mediaQuery.removeEventListener("change", handleReducedMotionChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Throttled resize function
    let resizeTimeout: NodeJS.Timeout
    const resize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio
        canvas.height = canvas.offsetHeight * window.devicePixelRatio
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      }, 100)
    }

    resize()
    window.addEventListener("resize", resize)

    // If reduced motion is preferred or component is not in view, render a static version
    if (isReducedMotion || !inView) {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      // Draw static waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(74, 222, 128, ${0.2 + i * 0.2})`
        ctx.lineWidth = 1

        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * 0.02 + (i * Math.PI) / 3) * 20
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      return
    }

    let time = 0
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS
    let lastFrameTime = 0

    const animate = (currentTime: number) => {
      // Limit frame rate
      if (currentTime - lastFrameTime < frameInterval) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }

      lastFrameTime = currentTime
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      // Draw multiple waves with different phases
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(74, 222, 128, ${0.2 + i * 0.2})`
        ctx.lineWidth = 1

        // Optimize by drawing fewer points
        const step = Math.max(1, Math.floor(width / 200))
        for (let x = 0; x < width; x += step) {
          const y =
            height / 2 +
            Math.sin(x * 0.02 + time + (i * Math.PI) / 3) * 20 +
            Math.sin(x * 0.01 + time * 0.5 + (i * Math.PI) / 2) * 15

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      time += 0.02
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [inView, isReducedMotion])

  return (
    <div ref={inViewRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

