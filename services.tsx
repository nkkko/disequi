import Link from "next/link"
import { ArrowRight, Zap, RatioIcon as Balance, RefreshCwIcon as Refresh, Target } from "lucide-react"
import { GradientBackground } from "./components/gradient-background"
import { MobileMenu } from "./components/mobile-menu"

export default function ServicesPage() {
  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <div className="col-span-4 border border-green-400/20 p-4 bg-black/30 backdrop-blur-sm relative z-40">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold tracking-wider font-mono">
                DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
              </Link>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-green-400/60 hover:text-green-400 transition-colors">
                  Home
                </Link>
                <Link href="#" className="text-green-400 font-bold">
                  Services
                </Link>
                <Link href="#contact" className="text-green-400/60 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </nav>
              <MobileMenu />
            </div>
          </div>

          {/* Services Intro */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">Our Services</h1>
            <p className="text-xl mb-8 text-green-400/80">
              At Disequi, we offer a range of services designed to transform your business, balancing innovation with
              stability to achieve sustainable growth.
            </p>
          </div>

          {/* Service 1: Strategic Transformation */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Zap className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Strategic Transformation</h2>
            <p className="text-green-400/80 mb-4">
              We guide your organization through comprehensive change, aligning your business model, processes, and
              technology with your strategic goals.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Business model innovation</li>
              <li>Digital transformation roadmaps</li>
              <li>Change management and adoption</li>
            </ul>
            <Link
              href="#contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Service 2: Equilibrium Optimization */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Balance className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Equilibrium Optimization</h2>
            <p className="text-green-400/80 mb-4">
              We help you find the perfect balance between innovation and stability, ensuring your business can adapt
              without losing its core strengths.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Risk-reward analysis</li>
              <li>Innovation portfolio management</li>
              <li>Stability-enhancing strategies</li>
            </ul>
            <Link
              href="#contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Service 3: Divergence-Convergence Consulting */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Refresh className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Divergence-Convergence Consulting</h2>
            <p className="text-green-400/80 mb-4">
              Our unique approach explores multiple possibilities before converging on the most effective solutions,
              driving innovation and practical outcomes.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Ideation workshops</li>
              <li>Solution evaluation and selection</li>
              <li>Implementation planning</li>
            </ul>
            <Link
              href="#contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Service 4: Adaptive Strategy Development */}
          <div className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <Target className="w-12 h-12 mb-4 text-green-400" />
            <h2 className="text-2xl font-bold mb-4 font-mono">Adaptive Strategy Development</h2>
            <p className="text-green-400/80 mb-4">
              We craft flexible, responsive strategies that allow your business to thrive in dynamic environments and
              capitalize on emerging opportunities.
            </p>
            <ul className="list-disc list-inside text-green-400/80 mb-6">
              <li>Scenario planning</li>
              <li>Agile strategy formulation</li>
              <li>Continuous strategy refinement</li>
            </ul>
            <Link
              href="#contact"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* CTA Section */}
          <div id="contact" className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-6 font-mono text-center">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-green-400/80 text-center">
              Contact us to discuss how our services can help you achieve your goals.
            </p>
            <div className="flex justify-center">
              <Link
                href="mailto:contact@disequi.com"
                className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
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

