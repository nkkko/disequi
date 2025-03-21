"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, firstName }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        console.error('Server responded with error:', data);
        throw new Error(data.error || data.details || 'Failed to subscribe')
      }
      
      setEmail("")
      setFirstName("")
      setIsExpanded(false)
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for subscribing to our newsletter!'
      })
    } catch (error) {
      console.error('Error subscribing:', error)
      // Create a more user-friendly error message
      let errorMessage = 'Sorry, we couldn\'t subscribe you to our newsletter. Please try again later.';
      
      // Add technical details for debugging if available
      if (error instanceof Error && error.message) {
        console.error('Technical error details:', error.message);
      }
      
      setSubmitStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const handleEmailFocus = () => {
    setIsExpanded(true)
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
          onFocus={handleEmailFocus}
          placeholder="Enter your email"
          required
          className="flex-grow p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
        />
        
        {isExpanded && (
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name (optional)"
            className="flex-grow p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
          />
        )}
        
        {submitStatus.type && (
          <div className={`p-2 text-sm ${submitStatus.type === 'success' ? 'bg-green-400/20 text-green-400' : 'bg-red-400/20 text-red-400'}`}>
            {submitStatus.message}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-4 py-2 flex items-center justify-center whitespace-nowrap w-full ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </button>
      </form>
    </div>
  )
}

