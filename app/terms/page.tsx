import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GradientBackground } from "../components/gradient-background"
import { MobileMenu } from "../components/mobile-menu"

export default function TermsPage() {
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

          {/* Terms of Service Content */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">Terms of Service</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">1. Acceptance of Terms</h2>
              <p className="text-green-400/80 mb-4">
                By accessing and using the services provided by Disequi d.o.o. ("Disequi", "we", "us", or "our"), you
                agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please
                do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">2. Description of Services</h2>
              <p className="text-green-400/80 mb-4">
                Disequi provides business consulting services, including but not limited to strategic transformation,
                equilibrium optimization, and adaptive strategy development. The specific services will be agreed upon
                in a separate agreement between Disequi and the client.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">3. User Responsibilities</h2>
              <p className="text-green-400/80 mb-4">
                You agree to provide accurate, current, and complete information as required for the use of our
                services. You are responsible for maintaining the confidentiality of any account information and for all
                activities that occur under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">4. Intellectual Property</h2>
              <p className="text-green-400/80 mb-4">
                All content, trademarks, and intellectual property on this website are the property of Disequi. You may
                not use, reproduce, or distribute any content from this website without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">5. Limitation of Liability</h2>
              <p className="text-green-400/80 mb-4">
                Disequi shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">6. Governing Law</h2>
              <p className="text-green-400/80 mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of Croatia,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">7. Changes to Terms</h2>
              <p className="text-green-400/80 mb-4">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any
                significant changes. Your continued use of our services after such modifications constitutes your
                acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 font-mono">8. Contact Information</h2>
              <p className="text-green-400/80 mb-4">
                If you have any questions about these Terms of Service, please contact us at info@disequi.com.
              </p>
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
                <Link href="/privacy" className="text-sm text-green-400/40 hover:text-green-400 transition-colors">
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm text-green-400 hover:text-green-400 transition-colors">
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

