"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server or a third-party service
    console.log("Subscribing email:", email)
    // Reset form after submission
    setEmail("")
    alert("Thank you for subscribing to our newsletter!")
  }

  return (
    <div className="w-full max-w-md">
      <h3 className="text-lg font-bold mb-2 font-mono">Subscribe to Our Newsletter</h3>
      <p className="text-sm text-green-400/80 mb-4">
        Get our fortnightly newsletter with top 5 resources, links, ideas, and concepts.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
        />
        <button
          type="submit"
          className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-4 py-2 flex items-center justify-center whitespace-nowrap w-full"
        >
          Subscribe
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </form>
    </div>
  )
}

