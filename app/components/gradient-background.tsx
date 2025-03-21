"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

export function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameCountRef = useRef(0)
  const animationRef = useRef<number>()
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
    initialInView: true,
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

    // Update the canvas context creation to include willReadFrequently
    const ctx = canvas.getContext("2d", { alpha: false, willReadFrequently: true })
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Throttle resize events
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(resizeCanvas, 100)
    }
    window.addEventListener("resize", handleResize)

    // Pre-render the gradient to an offscreen canvas for better performance
    const offscreenCanvas = document.createElement("canvas")
    const offscreenCtx = offscreenCanvas.getContext("2d")
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height

    if (offscreenCtx) {
      // Create the base gradient only once
      const gradient = offscreenCtx.createLinearGradient(canvas.width, 0, 0, canvas.height)
      gradient.addColorStop(0, "#034c3c")
      gradient.addColorStop(1, "#000000")
      offscreenCtx.fillStyle = gradient
      offscreenCtx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Initial render of the background
    ctx.drawImage(offscreenCanvas, 0, 0)

    // For reduced motion or when not in view, just draw the static gradient
    if (isReducedMotion || !inView) {
      if (offscreenCtx) {
        ctx.drawImage(offscreenCanvas, 0, 0)
      }
      return
    }

    // Animation frame rate control
    const targetFPS = 30
    const frameInterval = 1000 / targetFPS
    let lastFrameTime = 0

    function animate(currentTime: number) {
      // Skip frames to maintain target FPS
      if (currentTime - lastFrameTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      lastFrameTime = currentTime
      frameCountRef.current++

      // Draw the base gradient
      ctx.drawImage(offscreenCanvas, 0, 0)

      // Only update noise every few frames to reduce CPU usage
      if (frameCountRef.current % 3 === 0) {
        // Use a smaller area for noise to improve performance
        const sampleWidth = Math.min(canvas.width, 1200)
        const sampleHeight = Math.min(canvas.height, 800)
        const imageData = ctx.getImageData(0, 0, sampleWidth, sampleHeight)
        const data = imageData.data

        // Apply noise with reduced intensity
        for (let i = 0; i < data.length; i += 16) {
          // Process fewer pixels
          const noise = Math.random() * 15 - 7.5
          data[i] = Math.max(0, Math.min(255, data[i] + noise))
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
        }

        ctx.putImageData(imageData, 0, 0)

        // Apply dithering with larger grain size and less frequency
        if (frameCountRef.current % 10 === 0) {
          ctx.fillStyle = "rgba(0,0,0,0.1)"
          for (let y = 0; y < canvas.height; y += 6) {
            for (let x = 0; x < canvas.width; x += 6) {
              if (Math.random() > 0.85) {
                ctx.fillRect(x, y, 3, 3)
              }
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [inView, isReducedMotion])

  return (
    <div ref={inViewRef} className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}

