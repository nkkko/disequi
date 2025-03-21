import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GradientBackground } from "./components/gradient-background"
import { MobileMenu } from "./components/mobile-menu"

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <div className="col-span-4 border border-green-400/20 p-4 bg-black/30 backdrop-blur-sm relative z-40">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold tracking-wider font-mono">
                DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/services" className="text-green-400/60 hover:text-green-400 transition-colors">
                  Services
                </Link>
                <Link href="#process" className="text-green-400/60 hover:text-green-400 transition-colors">
                  Process
                </Link>
                <Link href="#contact" className="text-green-400/60 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </nav>
              <MobileMenu />
            </div>
          </div>

          {/* Hero Section */}
          <div className="col-span-4 md:col-span-3 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">
              Transforming Ideas Into Successful Ventures
            </h1>
            <p className="text-xl mb-8 text-green-400/80">
              We help businesses achieve equilibrium between innovation and stability through our proven process of
              divergence and convergence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 inline-block" />
              </Link>
              <Link
                href="#process"
                className="border border-green-400/20 text-green-400 hover:bg-green-400/10 font-mono px-6 py-3 text-center"
              >
                View Our Process
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="col-span-4 md:col-span-1 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 font-mono">Ready to Transform?</h2>
            <p className="mb-6 text-green-400/80">Let's discuss how we can help you achieve your goals.</p>
            <Link
              href="mailto:contact@disequi.com"
              className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center"
            >
              Contact Us
              <ArrowRight className="ml-2 inline-block" />
            </Link>
          </div>

          {/* Process Section */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 font-mono">Our Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 font-mono">Divergence → Convergence</h3>
                <p className="text-green-400/80">
                  We explore multiple possibilities before converging on the most effective solution, ensuring
                  innovation is balanced with practicality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 font-mono">Equilibrium → Disequilibrium</h3>
                <p className="text-green-400/80">
                  We help you navigate change while maintaining stability, creating sustainable growth through
                  controlled transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 font-mono">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-green-400/20 p-4">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-sm text-green-400/60">Success Rate</div>
              </div>
              <div className="border border-green-400/20 p-4">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-green-400/60">Clients Served</div>
              </div>
              <div className="border border-green-400/20 p-4">
                <div className="text-4xl font-bold mb-2">3x</div>
                <div className="text-sm text-green-400/60">Average Growth</div>
              </div>
              <div className="border border-green-400/20 p-4">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm text-green-400/60">Support</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="col-span-4 border border-green-400/20 p-4 bg-black/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-green-400/40">© 2025 Disequi LLC. All rights reserved.</div>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

