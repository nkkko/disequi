"use client"

import { useState, useEffect } from "react"

export function usePerformance() {
  const [isLowPowerMode, setIsLowPowerMode] = useState(false)
  const [isReducedMotion, setIsReducedMotion] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReducedMotion(motionQuery.matches)

    // Detect low-end devices based on hardware concurrency
    if (typeof navigator !== "undefined" && navigator.hardwareConcurrency) {
      setIsLowEndDevice(navigator.hardwareConcurrency <= 4)
    }

    // Check for low power mode (approximation)
    const checkBattery = async () => {
      try {
        // @ts-ignore - Battery API may not be typed
        if ("getBattery" in navigator) {
          // @ts-ignore
          const battery = await navigator.getBattery()
          if (battery.charging === false && battery.level < 0.2) {
            setIsLowPowerMode(true)
          }

          battery.addEventListener("levelchange", () => {
            setIsLowPowerMode(battery.charging === false && battery.level < 0.2)
          })

          battery.addEventListener("chargingchange", () => {
            setIsLowPowerMode(battery.charging === false && battery.level < 0.2)
          })
        }
      } catch (e) {
        console.log("Battery API not supported")
      }
    }

    checkBattery()

    // Listen for reduced motion changes
    const handleReducedMotionChange = () => setIsReducedMotion(motionQuery.matches)
    motionQuery.addEventListener("change", handleReducedMotionChange)

    return () => {
      motionQuery.removeEventListener("change", handleReducedMotionChange)
    }
  }, [])

  // Should we reduce animations/effects?
  const shouldReduceEffects = isReducedMotion || isLowPowerMode || isLowEndDevice

  return {
    isReducedMotion,
    isLowPowerMode,
    isLowEndDevice,
    shouldReduceEffects,
  }
}

