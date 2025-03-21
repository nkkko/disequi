import Link from "next/link"
import { GradientBackground } from "../components/gradient-background"
import { MobileMenu } from "../components/mobile-menu"
import { Footer } from "../components/footer"
import { BlogArticleCard } from "../components/blog-article-card"
import { BlogSearch } from "../components/blog-search"
import { AnimatedHero } from "../components/animated-hero"
import { getSortedPostsData } from "@/lib/blog"
import { Suspense } from "react"

export const dynamic = "force-dynamic"

export default function BlogPage() {
  const allPosts = getSortedPostsData()

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
                  <Link href="/blog" className="text-green-400 font-bold">
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

          {/* Blog Intro */}
          <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm relative overflow-hidden">
            <AnimatedHero>
              <div className="relative z-10 p-8">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-mono">Our Insights</h1>
                <p className="text-xl mb-8 text-green-400/80">
                  Explore our latest thoughts on business transformation, innovation, and achieving equilibrium in a
                  rapidly changing world.
                </p>
              </div>
            </AnimatedHero>
          </div>

          {/* Search Bar - Client Component */}
          <div className="col-span-4 border border-green-400/20 p-4 bg-black/30 backdrop-blur-sm">
            <Suspense fallback={<div className="h-10 bg-black/50 animate-pulse"></div>}>
              <BlogSearch />
            </Suspense>
          </div>

          {/* Blog Articles */}
          {allPosts.length > 0 ? (
            <>
              {allPosts.map((post, index) => (
                <div key={post.slug} className="col-span-4 md:col-span-2 lg:col-span-1 overflow-hidden">
                  <BlogArticleCard article={post} index={index} />
                </div>
              ))}
            </>
          ) : (
            <div className="col-span-4 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm text-center">
              <p className="text-green-400/80">No articles found.</p>
            </div>
          )}

          {/* Footer Component */}
          <Footer />
        </div>
      </div>
    </div>
  )
}

