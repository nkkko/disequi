"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { generateThumbnailConfig } from "../utils/thumbnail-generator"

interface BlogThumbnailProps {
  seed: number
  width?: number
  height?: number
  className?: string
}

export function BlogThumbnail({ seed, width = 300, height = 200, className = "" }: BlogThumbnailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const config = generateThumbnailConfig(seed, Math.max(width, height))

  // Draw the initial thumbnail
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = width
    canvas.height = height

    // Draw background
    ctx.fillStyle = config.backgroundColor
    ctx.fillRect(0, 0, width, height)

    // Draw shapes
    config.shapes.forEach((shape) => {
      ctx.save()

      if (shape.type === "circle") {
        ctx.beginPath()
        ctx.arc(shape.x, shape.y, shape.radius, 0, Math.PI * 2)
        ctx.fillStyle = shape.color
        ctx.fill()
      } else if (shape.type === "line") {
        ctx.beginPath()
        ctx.moveTo(shape.x1, shape.y1)
        ctx.lineTo(shape.x2, shape.y2)
        ctx.strokeStyle = shape.color
        ctx.lineWidth = shape.width
        ctx.stroke()
      } else if (shape.type === "rect") {
        ctx.fillStyle = shape.color
        ctx.fillRect(shape.x, shape.y, shape.width, shape.height)
      }

      ctx.restore()
    })

    // Add noise
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data
    const random = () => Math.random()

    for (let i = 0; i < data.length; i += 4) {
      const noise = (random() * 2 - 1) * 15 * config.noise.opacity
      data[i] = Math.max(0, Math.min(255, data[i] + noise))
      data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + noise))
      data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + noise))
    }

    ctx.putImageData(imageData, 0, 0)
  }, [seed, width, height, config])

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(74, 222, 128, 0.3)",
      transition: { duration: 0.3 },
    },
  }

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: {
      opacity: 0.2,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
    >
      <canvas ref={canvasRef} width={width} height={height} className="w-full h-full object-cover" />
      <motion.div className="absolute inset-0 bg-green-400" variants={overlayVariants} initial="initial" />
    </motion.div>
  )
}

