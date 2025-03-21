"use client"

import Link from "next/link"
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { MobileMenu } from "../components/mobile-menu"
import { NewsletterSubscription } from "../components/newsletter-subscription"
import { motion } from "framer-motion"
import { AnimatedHero, fadeUpVariants } from "../components/animated-hero"

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative z-40">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-wider font-mono">
                  DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                  <Link href="/" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-green-400 font-bold">
                    About
                  </Link>
                  <Link href="/services" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Services
                  </Link>
                  <Link href="/process" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Process
                  </Link>
                  <Link href="/blog" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Blog
                  </Link>
                  <Link href="/contact" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Contact
                  </Link>
                </nav>
                <MobileMenu />
              </div>
            </div>
          </div>

          {/* About Intro */}
          <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            <AnimatedHero>
              <div className="relative z-10 p-8">
                <motion.h1
                  custom={0}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-mono break-words"
                >
                  About Disequi
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl mb-8 text-green-400/80"
                >
                  Disequi is a forward-thinking consulting firm dedicated to transforming businesses through innovative
                  strategies and balanced growth. We believe in the power of equilibrium between innovation and
                  stability.
                </motion.p>
              </div>
            </AnimatedHero>
          </div>

          {/* Mission */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Target className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Our Mission</h2>
            <p className="text-green-400/80 mb-4">
              Our mission is to empower businesses to achieve sustainable growth by balancing innovation with stability.
              We strive to create transformative solutions that drive success in an ever-changing business landscape.
            </p>
          </div>

          {/* Vision */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Lightbulb className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Our Vision</h2>
            <p className="text-green-400/80 mb-4">
              We envision a world where businesses thrive through adaptive strategies, embracing change while
              maintaining their core strengths. Our goal is to be at the forefront of this transformation, guiding
              companies towards sustainable success.
            </p>
          </div>

          {/* Team */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Users className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-6 font-mono">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border border-green-400/20 p-4">
                <h3 className="text-xl font-bold mb-2">Nikola Balić</h3>
                <p className="text-green-400/60 mb-2">Founder & CEO</p>
                <p className="text-green-400/80">
                  With extensive experience in business transformation, Nikola leads our team with vision and expertise.
                </p>
              </div>
              <div className="border border-green-400/20 p-4">
                <h3 className="text-xl font-bold mb-2">John Smith</h3>
                <p className="text-green-400/60 mb-2">Chief Strategy Officer</p>
                <p className="text-green-400/80">
                  John's innovative approach to strategy development has helped numerous clients achieve breakthrough
                  results.
                </p>
              </div>
              <div className="border border-green-400/20 p-4">
                <h3 className="text-xl font-bold mb-2">Emily Chen</h3>
                <p className="text-green-400/60 mb-2">Head of Innovation</p>
                <p className="text-green-400/80">
                  Emily's passion for emerging technologies drives our cutting-edge solutions and keeps our clients
                  ahead of the curve.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6 font-mono">Legal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Company Details</h3>
                <p className="text-green-400/80 mb-2">Disequi d.o.o.</p>
                <p className="text-green-400/80 mb-2">Headquarter: R. Boškovića 27, 21000 Split, Croatia</p>
                <p className="text-green-400/80 mb-2">VAT: HR55950527428</p>
                <p className="text-green-400/80 mb-4">
                  The company is registered at the Commercial Court in Split under registration number (MBS) 060484565.
                </p>
                <p className="text-green-400/80 mb-2">Share capital: 2.500,00 EUR (paid in full)</p>
                <p className="text-green-400/80 mb-2">Board member: Nikola Balić</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Bank Details</h3>
                <p className="text-green-400/80 mb-2">RAIFFEISENBANK AUSTRIA d.d.</p>
                <p className="text-green-400/80 mb-2">IBAN: HR2024840081135402740</p>
                <p className="text-green-400/80 mb-2">SWIFT: RZBHHR2X</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 font-mono text-center">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-green-400/80 text-center">
              Let's work together to achieve your goals and drive sustainable growth.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-2xl font-bold tracking-wider font-mono mb-4">
                  DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
                </div>
                <p className="text-sm text-green-400/80 mb-4">
                  Transforming ideas into successful ventures through innovative strategies and balanced growth.
                </p>
                <div className="text-sm text-green-400/40">© 2025 Disequi LLC. All rights reserved.</div>
              </div>
              <div>
                <NewsletterSubscription />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-green-400/20 flex justify-center space-x-6">
              <Link href="/privacy" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

