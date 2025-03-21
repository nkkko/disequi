"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  connections: number[]
  targetConnections: number[]
  transitionProgress: number
}

type NetworkState = "transitioning" | "stable"

export function NetworkNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const networkStateRef = useRef<NetworkState>("transitioning")
  const lastUpdateTimeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      initNodes()
    }

    const initNodes = () => {
      const spacing = 100 // Increased spacing to reduce the number of nodes
      const cols = Math.floor(canvas.offsetWidth / spacing)
      const rows = Math.floor(canvas.offsetHeight / spacing)
      const nodes: Node[] = []

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          nodes.push({
            x: j * spacing + spacing / 2,
            y: i * spacing + spacing / 2,
            connections: [],
            targetConnections: [],
            transitionProgress: 1,
          })
        }
      }

      nodesRef.current = nodes
      updateConnections()
    }

    const updateConnections = () => {
      networkStateRef.current = "transitioning"
      const nodes = nodesRef.current
      nodes.forEach((node) => {
        node.connections = [...node.targetConnections]
        node.targetConnections = []
        node.transitionProgress = 0

        const nearbyIndices = nodes
          .map((otherNode, i) => ({
            index: i,
            distance: Math.hypot(otherNode.x - node.x, otherNode.y - node.y),
          }))
          .filter(({ distance }) => distance > 0 && distance < 150)
          .sort(() => Math.random() - 0.5)
          .slice(0, 2) // Reduced max connections per node
          .map(({ index }) => index)

        node.targetConnections = nearbyIndices
      })
    }

    const drawNode = (x: number, y: number) => {
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(74, 222, 128, 0.5)"
      ctx.fill()
    }

    const drawConnection = (
      startX: number,
      startY: number,
      endX: number,
      endY: number,
      progress: number,
      alpha: number,
    ) => {
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(startX + (endX - startX) * progress, startY + (endY - startY) * progress)
      ctx.strokeStyle = `rgba(74, 222, 128, ${alpha})`
      ctx.lineWidth = 2
      ctx.stroke()
    }

    const animate = (currentTime: number) => {
      // Limit updates to 30 FPS
      if (currentTime - lastUpdateTimeRef.current < 33) {
        requestAnimationFrame(animate)
        return
      }
      lastUpdateTimeRef.current = currentTime

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const nodes = nodesRef.current
      let allTransitionsComplete = true

      // Update transition progress
      nodes.forEach((node) => {
        if (node.transitionProgress < 1) {
          node.transitionProgress = Math.min(1, node.transitionProgress + 0.02)
          allTransitionsComplete = false
        }
      })

      // Check if network has reached stable state
      if (allTransitionsComplete && networkStateRef.current === "transitioning") {
        networkStateRef.current = "stable"
        setTimeout(updateConnections, 3000) // Stay stable for 3 seconds
      }

      // Draw connections
      ctx.beginPath()
      nodes.forEach((node) => {
        // Draw fading old connections
        node.connections.forEach((targetIndex) => {
          if (!node.targetConnections.includes(targetIndex)) {
            const target = nodes[targetIndex]
            drawConnection(node.x, node.y, target.x, target.y, 1, Math.max(0, 0.5 - node.transitionProgress * 0.5))
          }
        })

        // Draw growing new connections
        node.targetConnections.forEach((targetIndex) => {
          const target = nodes[targetIndex]
          drawConnection(
            node.x,
            node.y,
            target.x,
            target.y,
            node.transitionProgress,
            0.2 + node.transitionProgress * 0.3,
          )
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        drawNode(node.x, node.y)
      })

      requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full opacity-30" />
}

