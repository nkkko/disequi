"use client"

import Link from "next/link"
import { ArrowRight, GitBranch, GitMerge, Lightbulb, Rocket } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { MobileMenu } from "../components/mobile-menu"
import { NewsletterSubscription } from "../components/newsletter-subscription"
import { motion } from "framer-motion"
import { AnimatedHero, fadeUpVariants } from "../components/animated-hero"

export default function ProcessPage() {
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
                  <Link href="/about" className="text-green-400/60 hover:text-green-400 transition-colors">
                    About
                  </Link>
                  <Link href="/services" className="text-green-400/60 hover:text-green-400 transition-colors">
                    Services
                  </Link>
                  <Link href="/process" className="text-green-400 font-bold">
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

          {/* Process Intro */}
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
                  Our Process
                </motion.h1>
                <motion.p
                  custom={1}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl mb-8 text-green-400/80"
                >
                  At Disequi, we employ a unique process that balances innovation with stability. Our approach is
                  designed to transform your business while maintaining equilibrium, ensuring sustainable growth and
                  success.
                </motion.p>
              </div>
            </AnimatedHero>
          </div>

          {/* Process 1: Divergence */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <GitBranch className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Divergence</h2>
            <p className="text-green-400/80 mb-4">
              We start by exploring multiple possibilities, encouraging creative thinking and innovative ideas. This
              phase is all about opening up to new perspectives and potential solutions.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Brainstorming sessions</li>
              <li>Market research and trend analysis</li>
              <li>Stakeholder interviews</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Process 2: Convergence */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <GitMerge className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Convergence</h2>
            <p className="text-green-400/80 mb-4">
              After exploring various options, we narrow down to the most promising solutions. This phase focuses on
              evaluating ideas and selecting the best path forward.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Idea evaluation and prioritization</li>
              <li>Feasibility studies</li>
              <li>Risk assessment</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Process 3: Equilibrium */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Lightbulb className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Equilibrium</h2>
            <p className="text-green-400/80 mb-4">
              We help you find the perfect balance between innovation and stability. This phase ensures that new ideas
              are integrated smoothly without disrupting your core business operations.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Change management strategies</li>
              <li>Process optimization</li>
              <li>Organizational alignment</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Process 4: Transformation */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Rocket className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Transformation</h2>
            <p className="text-green-400/80 mb-4">
              The final phase of our process focuses on implementing the chosen solutions and driving meaningful change
              in your organization. We ensure that the transformation is sustainable and aligned with your long-term
              goals.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Implementation planning</li>
              <li>Continuous improvement cycles</li>
              <li>Performance monitoring and adjustment</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* CTA Section */}
          <div id="contact" className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 font-mono text-center">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-green-400/80 text-center">
              Contact us to discuss how our proven process can help you achieve sustainable growth and innovation.
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

