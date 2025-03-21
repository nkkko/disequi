"use client"

import { useState, useEffect } from "react"

export function PerformanceMonitor() {
  const [fps, setFps] = useState(0)
  const [memory, setMemory] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return

    let frameCount = 0
    let lastTime = performance.now()
    let frameId: number

    const measureFps = () => {
      frameCount++
      const now = performance.now()

      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)))
        frameCount = 0
        lastTime = now

        // Measure memory if available
        if (window.performance && (performance as any).memory) {
          setMemory((performance as any).memory.usedJSHeapSize / (1024 * 1024))
        }
      }

      frameId = requestAnimationFrame(measureFps)
    }

    frameId = requestAnimationFrame(measureFps)

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault()
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  if (!isVisible || process.env.NODE_ENV !== "development") return null

  return (
    <div className="fixed bottom-0 left-0 bg-black/80 text-white p-2 text-xs z-50 font-mono">
      <div>FPS: {fps}</div>
      {memory !== null && <div>Memory: {memory.toFixed(1)} MB</div>}
    </div>
  )
}

