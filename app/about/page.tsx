"use client"

import { Users, Target, Lightbulb } from "lucide-react"
import { PageLayout } from "../components/page-layout"
import { HeroSection } from "../components/hero-section"
import { ContentSection } from "../components/content-section"
import { CtaSection } from "../components/cta-section"
import { TeamMember } from "../components/team-member"

export default function AboutPage() {
  return (
    <PageLayout>
      {/* About Intro */}
      <HeroSection
        title="About Disequi"
        description="Disequi is a forward-thinking consulting firm dedicated to transforming businesses through innovative strategies and balanced growth. We believe in the power of equilibrium between innovation and stability."
      />

      {/* Mission */}
      <ContentSection colSpan="col-span-4 md:col-span-2">
        <Target className="w-12 h-12 mb-4 text-green-400" />
        <h2 className="text-2xl font-bold mb-4 font-mono">Our Mission</h2>
        <p className="text-green-400/80 mb-4">
          Our mission is to empower businesses to achieve sustainable growth by balancing innovation with stability.
          We strive to create transformative solutions that drive success in an ever-changing business landscape.
        </p>
      </ContentSection>

      {/* Vision */}
      <ContentSection colSpan="col-span-4 md:col-span-2">
        <Lightbulb className="w-12 h-12 mb-4 text-green-400" />
        <h2 className="text-2xl font-bold mb-4 font-mono">Our Vision</h2>
        <p className="text-green-400/80 mb-4">
          We envision a world where businesses thrive through adaptive strategies, embracing change while
          maintaining their core strengths. Our goal is to be at the forefront of this transformation, guiding
          companies towards sustainable success.
        </p>
      </ContentSection>

      {/* Team */}
      <ContentSection>
        <Users className="w-12 h-12 mb-4 text-green-400" />
        <h2 className="text-2xl font-bold mb-6 font-mono">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamMember
            name="Nikola Balić"
            role="Founder & CEO"
            bio="With extensive experience in business transformation, Nikola leads our team with vision and expertise."
          />
          <TeamMember
            name="John Smith"
            role="Chief Strategy Officer"
            bio="John's innovative approach to strategy development has helped numerous clients achieve breakthrough results."
          />
          <TeamMember
            name="Emily Chen"
            role="Head of Innovation"
            bio="Emily's passion for emerging technologies drives our cutting-edge solutions and keeps our clients ahead of the curve."
          />
        </div>
      </ContentSection>

      {/* Legal Information */}
      <ContentSection>
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
      </ContentSection>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Transform Your Business?" 
        description="Let's work together to achieve your goals and drive sustainable growth."
      />
    </PageLayout>
  )
}