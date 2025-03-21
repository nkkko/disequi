"use client"

import { useEffect, useRef } from "react"

export function SyncWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const lastUpdateTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Update the canvas context creation to include willReadFrequently
    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener("resize", resize)

    let time = 0
    const animate = (currentTime: number) => {
      // Limit updates to 30 FPS
      if (currentTime - lastUpdateTimeRef.current < 33) {
        animationFrameRef.current = requestAnimationFrame(animate)
        return
      }
      lastUpdateTimeRef.current = currentTime

      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      // Pre-calculate wave parameters
      const amplitude = height / 4
      const frequency = 0.01
      const speed = 0.02

      // Draw two intersecting sine waves
      const drawWave = (offset: number, color: string) => {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = 2

        for (let x = 0; x < width; x += 5) {
          // Increased step size to 5
          const y = height / 2 + Math.sin(x * frequency + time + offset) * amplitude

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      drawWave(0, "rgba(74, 222, 128, 0.6)")
      drawWave(Math.PI, "rgba(239, 68, 68, 0.4)")

      time += speed
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

