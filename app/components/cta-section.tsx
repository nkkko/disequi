"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ContentSection } from "./content-section"

interface CtaSectionProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  className?: string
}

export function CtaSection({
  title,
  description,
  buttonText = "Get in Touch",
  buttonLink = "/contact",
  className = ""
}: CtaSectionProps) {
  return (
    <ContentSection className={className}>
      <h2 className="text-3xl font-bold mb-6 font-mono text-center">{title}</h2>
      <p className="text-xl mb-8 text-green-400/80 text-center">{description}</p>
      <div className="flex justify-center">
        <Link
          href={buttonLink}
          className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center inline-flex items-center"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </ContentSection>
  )
}