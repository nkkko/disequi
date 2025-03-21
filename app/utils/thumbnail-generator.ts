// A simple seeded random number generator
export function seededRandom(seed: number) {
  let state = seed
  return () => {
    state = (state * 9301 + 49297) % 233280
    return state / 233280
  }
}

// Generate a color based on the site's green palette
export function generateColor(random: () => number, alpha = 1) {
  // Base green color: #4ade80 (74, 222, 128)
  const r = Math.floor(74 * (0.5 + random() * 0.5))
  const g = Math.floor(222 * (0.8 + random() * 0.2))
  const b = Math.floor(128 * (0.7 + random() * 0.3))
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

// Generate shape parameters for a circle
export function generateCircle(random: () => number, canvasSize: number) {
  return {
    type: "circle",
    x: random() * canvasSize,
    y: random() * canvasSize,
    radius: 10 + random() * 50,
    color: generateColor(random, 0.3 + random() * 0.4),
  }
}

// Generate shape parameters for a line
export function generateLine(random: () => number, canvasSize: number) {
  return {
    type: "line",
    x1: random() * canvasSize,
    y1: random() * canvasSize,
    x2: random() * canvasSize,
    y2: random() * canvasSize,
    width: 1 + random() * 3,
    color: generateColor(random, 0.2 + random() * 0.3),
  }
}

// Generate shape parameters for a rectangle
export function generateRect(random: () => number, canvasSize: number) {
  const width = 20 + random() * 80
  const height = 20 + random() * 80
  return {
    type: "rect",
    x: random() * canvasSize,
    y: random() * canvasSize,
    width,
    height,
    color: generateColor(random, 0.2 + random() * 0.3),
  }
}

// Generate noise parameters
export function generateNoise(random: () => number) {
  return {
    opacity: 0.05 + random() * 0.1,
    scale: 1 + random() * 4,
    speed: 0.001 + random() * 0.003,
  }
}

// Generate a complete thumbnail configuration based on a seed
export function generateThumbnailConfig(seed: number, canvasSize = 300) {
  const random = seededRandom(seed)

  // Determine how many of each shape to generate
  const circleCount = Math.floor(random() * 5) + 2
  const lineCount = Math.floor(random() * 8) + 5
  const rectCount = Math.floor(random() * 3) + 1

  // Generate shapes
  const circles = Array.from({ length: circleCount }, () => generateCircle(random, canvasSize))
  const lines = Array.from({ length: lineCount }, () => generateLine(random, canvasSize))
  const rects = Array.from({ length: rectCount }, () => generateRect(random, canvasSize))

  // Generate noise configuration
  const noise = generateNoise(random)

  // Generate animation parameters
  const animation = {
    duration: 10 + random() * 20,
    delay: random() * 5,
  }

  return {
    shapes: [...circles, ...lines, ...rects],
    noise,
    animation,
    backgroundColor: `rgba(0, 10, 8, ${0.8 + random() * 0.2})`,
  }
}

