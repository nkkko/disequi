"use client"

import Link from "next/link"
import { NewsletterSubscription } from "./newsletter-subscription"

export function Footer() {
  return (
    <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-2xl font-bold tracking-wider font-mono mb-4">
            DISEQUI<span className="text-xs ml-1 opacity-60">LLC</span>
          </div>
          <p className="text-sm text-green-400/80 mb-4">
            Transforming ideas into successful ventures through innovative strategies and balanced growth.
          </p>
          <div className="text-sm text-green-400/40">
            © {new Date().getFullYear()} Disequi LLC. All rights reserved.
          </div>
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
  )
}