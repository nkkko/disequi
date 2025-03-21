"use client"

import { useState, useEffect, useRef } from "react"

const commands = [
  "Initializing quantum algorithms...",
  "Analyzing market fluctuations...",
  "Optimizing business paradigms...",
  "Synthesizing innovation vectors...",
  "Calibrating risk matrices...",
  "Decoding industry patterns...",
  "Harmonizing divergent strategies...",
  "Projecting growth trajectories...",
  "Balancing chaos and order...",
  "Integrating disruptive technologies...",
  "Recalibrating equilibrium state...",
  "Unlocking synergistic potential...",
  "Mapping competitive landscapes...",
  "Quantifying abstract concepts...",
  "Aligning corporate DNA...",
  "Decrypting market signals...",
  "Optimizing resource allocation...",
  "Simulating future scenarios...",
  "Redefining success metrics...",
  "Initiating transformation protocols...",
]

export function AnimatedTerminal() {
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [commandIndex, setCommandIndex] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)
  const processingRef = useRef(false)

  useEffect(() => {
    if (commandIndex >= commands.length) {
      setCommandIndex(0)
      return
    }

    if (processingRef.current) return
    processingRef.current = true

    let i = 0
    const command = commands[commandIndex]
    
    const typingInterval = setInterval(() => {
      if (i < command.length) {
        setCurrentCommand(command.slice(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
        setDisplayedCommands((prev) => [...prev, command])
        setCurrentCommand("")
        processingRef.current = false

        // Move to next command after delay
        setTimeout(() => {
          setCommandIndex(prev => prev + 1)
        }, 1500)
      }
    }, 25)

    return () => clearInterval(typingInterval)
  }, [commandIndex])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [displayedCommands, currentCommand])

  return (
    <div className="bg-black/50 border border-green-400/20 p-4 font-mono text-sm rounded-md flex flex-col h-full">
      <div className="mb-2 flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div ref={terminalRef} className="flex-1 overflow-y-auto pr-2 scrollbar-none">
        {displayedCommands.map((cmd, index) => (
          <div key={index} className="mb-1">
            <span className="text-green-400">$</span> {cmd}
          </div>
        ))}
        {currentCommand && (
          <div>
            <span className="text-green-400">$</span> {currentCommand}
            <span className="animate-blink">|</span>
          </div>
        )}
      </div>
    </div>
  )
}

