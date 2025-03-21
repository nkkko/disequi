"use client"

import { useEffect } from "react"

export function SuppressConsoleErrors() {
  useEffect(() => {
    // Store original console methods
    const originalConsoleError = console.error
    const originalConsoleWarn = console.warn

    // Filter out specific error messages
    console.error = (...args) => {
      // Filter out asm.js errors
      if (
        args[0] &&
        typeof args[0] === "string" &&
        (args[0].includes("Invalid asm.js") || args[0].includes("Undefined global variable"))
      ) {
        return
      }

      // Pass through other errors
      originalConsoleError.apply(console, args)
    }

    console.warn = (...args) => {
      // Filter out specific warnings
      if (
        args[0] &&
        typeof args[0] === "string" &&
        (args[0].includes("Canvas2D") || args[0].includes("willReadFrequently"))
      ) {
        return
      }

      // Pass through other warnings
      originalConsoleWarn.apply(console, args)
    }

    // Restore original console methods on cleanup
    return () => {
      console.error = originalConsoleError
      console.warn = originalConsoleWarn
    }
  }, [])

  return null
}

