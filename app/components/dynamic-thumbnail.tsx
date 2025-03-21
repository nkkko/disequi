"use client"

import { useRef, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { generateThumbnailConfig, seededRandom } from "../utils/thumbnail-generator"

interface DynamicThumbnailProps {
  seed: number
  width?: number
  height?: number
  className?: string
  animated?: boolean
}

export function DynamicThumbnail({
  seed,
  width = 300,
  height = 200,
  className = "",
  animated = true,
}: DynamicThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const config = generateThumbnailConfig(seed, Math.max(width, height))
  const controls = useAnimation()

  // Initialize the random generator with the seed
  const getRandom = seededRandom(seed)

  // Animation effect
  useEffect(() => {
    if (!animated) return

    // Start animation sequence
    controls.start({
      opacity: [0.9, 1],
      scale: [0.98, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    })
  }, [animated, controls])

  // Canvas drawing effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    let time = 0
    const drawFrame = () => {
      // Draw background
      ctx.fillStyle = config.backgroundColor
      ctx.fillRect(0, 0, width, height)

      // Draw shapes with slight animation
      config.shapes.forEach((shape, index) => {
        ctx.save()

        // Apply subtle movement based on time
        const offsetX = Math.sin(time * 0.5 + index) * 2
        const offsetY = Math.cos(time * 0.3 + index * 0.7) * 2

        if (shape.type === "circle") {
          ctx.beginPath()
          ctx.arc(shape.x + offsetX, shape.y + offsetY, shape.radius + Math.sin(time + index) * 2, 0, Math.PI * 2)
          ctx.fillStyle = shape.color
          ctx.fill()
        } else if (shape.type === "line") {
          ctx.beginPath()
          ctx.moveTo(shape.x1 + offsetX, shape.y1 + offsetY)
          ctx.lineTo(shape.x2 - offsetX, shape.y2 - offsetY)
          ctx.strokeStyle = shape.color
          ctx.lineWidth = shape.width
          ctx.stroke()
        } else if (shape.type === "rect") {
          ctx.fillStyle = shape.color
          ctx.fillRect(
            shape.x + offsetX,
            shape.y + offsetY,
            shape.width + Math.sin(time * 0.2 + index) * 3,
            shape.height + Math.cos(time * 0.2 + index) * 3,
          )
        }

        ctx.restore()
      })

      // Add dynamic noise
      if (animated) {
        const imageData = ctx.getImageData(0, 0, width, height)
        const data = imageData.data

        for (let i = 0; i < data.length; i += 16) {
          // Process fewer pixels for performance
          const noise = (Math.random() * 2 - 1) * 10 * config.noise.opacity
          data[i] = Math.max(0, Math.min(255, data[i] + noise))
          data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
          data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
        }

        ctx.putImageData(imageData, 0, 0)
      }

      // Increment time for animation
      if (animated) {
        time += 0.01
        animationRef.current = requestAnimationFrame(drawFrame)
      }
    }

    drawFrame()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [seed, width, height, config, animated])

  return (
    <motion.div className={`relative overflow-hidden ${className}`} animate={controls}>
      <canvas ref={canvasRef} width={width} height={height} className="w-full h-full object-cover" />
      <motion.div
        className="absolute inset-0 bg-green-400 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.15, transition: { duration: 0.3 } }}
      />
    </motion.div>
  )
}

