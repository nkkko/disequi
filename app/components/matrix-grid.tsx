"use client"

import { useEffect, useRef } from "react"

const matrixCharacters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ0123456789:・."

export function MatrixGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const columnDataRef = useRef<number[]>([])
  const lastUpdateTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    let animationFrameId: number

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initColumnData()
    }

    const initColumnData = () => {
      const columns = Math.floor(canvas.offsetWidth / 20)
      columnDataRef.current = new Array(columns).fill(1)
    }

    const drawMatrix = (currentTime: number) => {
      // Limit updates to 15 FPS
      if (currentTime - lastUpdateTimeRef.current < 66) {
        animationFrameId = requestAnimationFrame(drawMatrix)
        return
      }
      lastUpdateTimeRef.current = currentTime

      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      ctx.fillStyle = "rgba(74, 222, 128, 0.8)"
      ctx.font = "20px monospace"

      columnDataRef.current.forEach((y, i) => {
        const x = i * 20
        const charIndex = Math.floor(Math.random() * matrixCharacters.length)
        const char = matrixCharacters[charIndex]

        ctx.fillText(char, x, y * 20)

        if (y * 20 > canvas.offsetHeight && Math.random() > 0.975) {
          columnDataRef.current[i] = 0
        } else {
          columnDataRef.current[i]++
        }
      })

      animationFrameId = requestAnimationFrame(drawMatrix)
    }

    resize()
    window.addEventListener("resize", resize)
    animationFrameId = requestAnimationFrame(drawMatrix)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-30" />
}

