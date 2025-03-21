import Link from "next/link"
import { GradientBackground } from "../../components/gradient-background"
import { MobileMenu } from "../../components/mobile-menu"
import { NewsletterSubscription } from "../../components/newsletter-subscription"
import { Footer } from "../../components/footer"
import { DynamicThumbnail } from "../../components/dynamic-thumbnail"
import { ArrowLeft, CalendarIcon, Clock, User } from "lucide-react"
import { getAllPostSlugs, getPostData, getSortedPostsData } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export default async function BlogArticlePage({ params }: { params: { slug: string } }) {
  try {
    // Await the params object before accessing its properties
    const resolvedParams = await Promise.resolve(params)
    const slug = resolvedParams.slug
    const post = await getPostData(slug)
    const recentPosts = getSortedPostsData()
      .filter((p) => p.slug !== slug)
      .slice(0, 3)

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

            {/* Article Header */}
            <div className="col-span-4 border border-green-400/20 bg-black/30 backdrop-blur-sm overflow-hidden">
              <div className="p-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-green-400/60 hover:text-green-400 transition-colors font-mono mb-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-mono">{post.title}</h1>
                <div className="flex flex-wrap items-center text-sm text-green-400/60 mb-8 gap-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-64 md:h-96">
                <DynamicThumbnail seed={post.thumbnailSeed} width={1200} height={600} className="w-full h-full" />
              </div>
            </div>

            {/* Article Content */}
            <div className="col-span-4 md:col-span-3 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm overflow-hidden">
              <div className="prose prose-invert prose-green max-w-none break-words">
                <p className="text-xl text-green-400/80 mb-6">{post.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-4 md:col-span-1 border border-green-400/20 p-6 bg-black/30 backdrop-blur-sm overflow-hidden">
              <h3 className="text-xl font-bold mb-4 font-mono">Recent Articles</h3>
              <div className="space-y-4">
                {recentPosts.map((recentPost) => (
                  <Link key={recentPost.slug} href={`/blog/${recentPost.slug}`} className="block group">
                    <div className="flex flex-col space-y-2">
                      <DynamicThumbnail
                        seed={recentPost.thumbnailSeed}
                        width={300}
                        height={160}
                        className="w-full h-32 flex-shrink-0"
                        animated={false}
                      />
                      <div>
                        <h4 className="text-sm font-bold group-hover:text-green-300 transition-colors break-words">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-green-400/60 mt-1">{recentPost.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-green-400/20">
                <h3 className="text-xl font-bold mb-4 font-mono">Subscribe</h3>
                <p className="text-sm text-green-400/80 mb-4">
                  Get our latest insights delivered directly to your inbox.
                </p>
                <NewsletterSubscription />
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    )
  } catch (error) {
    notFound()
  }
}

