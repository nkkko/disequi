"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { motion } from "framer-motion"
import { AnimatedHero, fadeUpVariants } from "../components/animated-hero"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
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
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error('Server responded with error:', data);
        throw new Error(data.error || data.details || 'Failed to send message')
      }

      const userEmail = formState.email; // Capture the email value before resetting the form
      setFormState({ name: "", email: "", message: "" })
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message! We\'ll respond to your inquiry at ' + userEmail + ' as soon as possible.'
      })
    } catch (error) {
      console.error('Error sending message:', error)
      // Create a more user-friendly error message
      let errorMessage = 'Sorry, we couldn\'t send your message. Please try again later or email us directly at contact@disequi.com.';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <Header />

          {/* Contact Intro */}
          <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            <AnimatedHero>
              <div className="relative z-10 p-8">
                <motion.h1
                  custom={0}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono"
                >
                  Get in Touch
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl mb-8 text-green-400/80"
                >
                  Ready to transform your business? We're here to help. Reach out to us for a consultation or to learn
                  more about our services.
                </motion.p>
              </div>
            </AnimatedHero>
          </div>

          {/* Contact Form */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 font-mono">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400"
                ></textarea>
              </div>
              {submitStatus.type && (
                <div className={`p-3 text-sm ${submitStatus.type === 'success' ? 'bg-green-400/20 text-green-400' : 'bg-red-400/20 text-red-400'}`}>
                  {submitStatus.message}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center inline-flex items-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 font-mono">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-green-400/80">contact@disequi.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-green-400/80">+385 98 500 161</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 mr-4 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-green-400/80">
                    R. Boskovica 27
                    <br />
                    21000 Split, Croatia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

