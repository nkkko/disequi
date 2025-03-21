"use client"

import { memo, lazy, Suspense } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { GradientBackground } from "./components/gradient-background"
import { AnimatedHero, fadeUpVariants } from "./components/animated-hero"
import { Header } from "./components/header"
import { useInView } from "react-intersection-observer"
import { ErrorBoundary } from "./components/error-boundary"
import { SuppressConsoleErrors } from "./components/suppress-console-errors"
import { Footer } from "./components/footer"

// Lazy load heavy components
const WaveVisualization = lazy(() =>
  import("./components/wave-visualization").then((mod) => ({ default: mod.WaveVisualization })),
)
const SyncWaves = lazy(() => import("./components/sync-waves").then((mod) => ({ default: mod.SyncWaves })))

// Header is now imported at the top of the file

// Use our shared Footer component instead

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-green-400/20 border-t-green-400 rounded-full animate-spin"></div>
  </div>
)

export default function LandingPage() {
  const { ref: processRef, inView: processInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      <SuppressConsoleErrors />
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          <Header />

          {/* Hero Section */}
          <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            <AnimatedHero>
              <div className="relative z-10 flex flex-col md:flex-row gap-8 h-[calc(70vh-140px)] p-8">
                <div className="w-full flex flex-col justify-center">
                  <motion.h1
                    custom={0}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight font-mono break-words"
                  >
                    Transforming Ideas Into Successful Ventures
                  </motion.h1>
                  <motion.p
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-xl mb-8 text-green-400/80"
                  >
                    We help businesses achieve equilibrium between innovation and stability through our proven process
                    of divergence and convergence.
                  </motion.p>
                  <motion.div
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link
                      href="/contact"
                      className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center"
                    >
                      Start Your Transformation
                      <ArrowRight className="ml-2 inline-block" />
                    </Link>
                    <Link
                      href="/process"
                      className="border border-green-400/20 text-green-400 hover:bg-green-400/10 font-mono px-6 py-3 text-center"
                    >
                      View Our Process
                    </Link>
                  </motion.div>
                </div>
              </div>
            </AnimatedHero>
          </div>

          {/* Process Section */}
          <div
            ref={processRef}
            className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-30">
              {processInView && (
                <Suspense fallback={<LoadingFallback />}>
                  <WaveVisualization />
                </Suspense>
              )}
            </div>
            <div className="relative z-10">
              <motion.h2
                custom={3}
                variants={fadeUpVariants}
                initial="hidden"
                animate={processInView ? "visible" : "hidden"}
                className="text-3xl font-bold mb-6 font-mono"
              >
                Our Process
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  custom={4}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                >
                  <h3 className="text-xl font-bold mb-2 font-mono">Divergence → Convergence</h3>
                  <p className="text-green-400/80">
                    We explore multiple possibilities before converging on the most effective solution, ensuring
                    innovation is balanced with practicality.
                  </p>
                </motion.div>
                <motion.div
                  custom={5}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={processInView ? "visible" : "hidden"}
                >
                  <h3 className="text-xl font-bold mb-2 font-mono">Equilibrium → Disequilibrium</h3>
                  <p className="text-green-400/80">
                    We help you navigate change while maintaining stability, creating sustainable growth through
                    controlled transformation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Metrics Section */}
          <div
            ref={metricsRef}
            className="col-span-4 md:col-span-2 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              {metricsInView && (
                <Suspense fallback={<LoadingFallback />}>
                  <SyncWaves />
                </Suspense>
              )}
            </div>
            <div className="relative z-10">
              <motion.h2
                custom={6}
                variants={fadeUpVariants}
                initial="hidden"
                animate={metricsInView ? "visible" : "hidden"}
                className="text-3xl font-bold mb-6 font-mono"
              >
                Our Impact
              </motion.h2>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  custom={7}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={metricsInView ? "visible" : "hidden"}
                  className="border border-green-400/20 p-4 bg-black/50"
                >
                  <div className="text-4xl font-bold mb-2">85%</div>
                  <div className="text-sm text-green-400/60">Success Rate</div>
                </motion.div>
                <motion.div
                  custom={8}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={metricsInView ? "visible" : "hidden"}
                  className="border border-green-400/20 p-4 bg-black/50"
                >
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm text-green-400/60">Clients Served</div>
                </motion.div>
                <motion.div
                  custom={9}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={metricsInView ? "visible" : "hidden"}
                  className="border border-green-400/20 p-4 bg-black/50"
                >
                  <div className="text-4xl font-bold mb-2">3x</div>
                  <div className="text-sm text-green-400/60">Average Growth</div>
                </motion.div>
                <motion.div
                  custom={10}
                  variants={fadeUpVariants}
                  initial="hidden"
                  animate={metricsInView ? "visible" : "hidden"}
                  className="border border-green-400/20 p-4 bg-black/50"
                >
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-green-400/60">Support</div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Suspense fallback={<LoadingFallback />}>
                <WaveVisualization />
              </Suspense>
            </div>
            <div className="relative z-10">
              <motion.h2
                custom={11}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl font-bold mb-4 font-mono"
              >
                Ready to Transform?
              </motion.h2>
              <motion.p
                custom={12}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="mb-6 text-green-400/80"
              >
                Let's discuss how we can help you achieve your goals.
              </motion.p>
              <motion.div custom={13} variants={fadeUpVariants} initial="hidden" animate="visible">
                <Link
                  href="/contact"
                  className="bg-green-400 text-black hover:bg-green-300 transition-colors font-mono px-6 py-3 text-center inline-block w-full sm:w-auto"
                >
                  Contact Us
                  <ArrowRight className="ml-2 inline-block" />
                </Link>
              </motion.div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}

