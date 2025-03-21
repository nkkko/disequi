import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { MobileMenu } from "../components/mobile-menu"

export default function PrivacyPage() {
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

          {/* Privacy Policy Content */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">Privacy Policy</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">Data Privacy</h2>
              <p className="text-green-400/80 mb-4">
                This website (disequi.com) does not use any analytics software or cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">What We Collect</h2>
              <p className="text-green-400/80 mb-4">Nothing. We have zero tracking on this site.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">External Links</h2>
              <p className="text-green-400/80 mb-4">
                Some places in the content of the disequi.com website contains links that take you to other sites or
                portals, and if you click these links, you will be subject to the privacy policies at the destination
                site or portal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">Contact Info</h2>
              <p className="text-green-400/80 mb-4">Still have privacy concerns? Contact us at info@disequi.com.</p>
            </section>

            <Link
              href="/"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-mono"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Link>
          </div>

          {/* Footer */}
          <div className="col-span-4 border border-green-400/20 p-4 bg-black/30 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-green-400/40">© 2025 Disequi LLC. All rights reserved.</div>
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-sm text-green-400 hover:text-green-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

