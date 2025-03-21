"use client"

import { useState } from "react"
import Link from "next/link"
import Head from "next/head"
import { GradientBackground } from "../../components/gradient-background"
import { Header } from "../../components/header"
import { NewsletterSubscription } from "../../components/newsletter-subscription"
import { Footer } from "../../components/footer"
import { DynamicThumbnail } from "../../components/dynamic-thumbnail"
import { ArrowLeft, CalendarIcon, Clock, List, Share2, User } from "lucide-react"
import { MDXRemoteClient } from "../../components/mdx-components"
import { BlogPost, TableOfContents } from "@/lib/blog"
import { BlogSchema } from "../../components/blog-schema"

interface BlogArticleContentProps {
  post: BlogPost
  recentPosts: Omit<BlogPost, "content" | "toc">[]
  canonicalUrl: string
  imageUrl: string
}

export default function BlogArticleContent({ post, recentPosts, canonicalUrl, imageUrl }: BlogArticleContentProps) {
  const [showToc, setShowToc] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  // Handle social sharing
  const handleShare = (platform: string) => {
    const shareUrl = encodeURIComponent(canonicalUrl)
    const shareTitle = encodeURIComponent(post.title)
    const shareText = encodeURIComponent(post.excerpt)
    
    let shareLink = ''
    
    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`
        break
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`
        break
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`
        break
      case 'email':
        shareLink = `mailto:?subject=${shareTitle}&body=${shareText}%0A%0A${shareUrl}`
        break
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank')
    }
  }

  return (
    <div className="min-h-screen font-sans selection:bg-green-400/20 text-green-400 relative">
      {/* Add Schema.org structured data */}
      <BlogSchema post={post} url={canonicalUrl} imageUrl={imageUrl} />
      
      <GradientBackground />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-4 gap-4">
          {/* Header */}
          <Header />

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
                {/* Social Share Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowShareOptions(!showShareOptions)}
                    className="flex items-center text-green-400/60 hover:text-green-400 transition-colors"
                    aria-label="Share this article"
                  >
                    <Share2 size={16} className="mr-2" />
                    Share
                  </button>
                  
                  {/* Share Options Popup */}
                  {showShareOptions && (
                    <div className="absolute top-full left-0 mt-2 p-2 bg-black/80 border border-green-400/20 rounded shadow-lg z-10 flex flex-col min-w-36 text-sm">
                      <button
                        onClick={() => handleShare('twitter')}
                        className="px-3 py-2 hover:bg-green-800/20 text-left rounded flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 5.8a8.49 8.49 0 0 1-2.36.64 4.13 4.13 0 0 0 1.81-2.27 8.21 8.21 0 0 1-2.61 1 4.1 4.1 0 0 0-7 3.74 11.64 11.64 0 0 1-8.45-4.29 4.16 4.16 0 0 0-.55 2.07 4.09 4.09 0 0 0 1.82 3.41 4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4 3.93 3.93 0 0 1-1.1.17 4.27 4.27 0 0 1-.75-.07 4.15 4.15 0 0 0 3.85 2.87 8.22 8.22 0 0 1-5.09 1.75A8.73 8.73 0 0 1 2 18.14 11.58 11.58 0 0 0 8.28 20c7.57 0 11.7-6.27 11.7-11.7 0-.17 0-.35-.01-.53A8.4 8.4 0 0 0 22 5.8z"/>
                        </svg>
                        Twitter
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="px-3 py-2 hover:bg-green-800/20 text-left rounded flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </button>
                      <button
                        onClick={() => handleShare('facebook')}
                        className="px-3 py-2 hover:bg-green-800/20 text-left rounded flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/>
                        </svg>
                        Facebook
                      </button>
                      <button
                        onClick={() => handleShare('email')}
                        className="px-3 py-2 hover:bg-green-800/20 text-left rounded flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        Email
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-64 md:h-96">
              <DynamicThumbnail 
                seed={post.thumbnailSeed} 
                width={1200} 
                height={600} 
                className="w-full h-full" 
                alt={`Cover image for ${post.title}`}
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="col-span-4 md:col-span-3 border border-green-400/20 p-8 bg-black/30 backdrop-blur-sm overflow-hidden">
            <div className="prose prose-invert prose-green max-w-none break-words">
              {/* Mobile Table of Contents Toggle */}
              {post.toc && post.toc.length > 0 && (
                <div className="md:hidden mb-6">
                  <button
                    onClick={() => setShowToc(!showToc)}
                    className="flex items-center px-4 py-2 text-sm border border-green-400/20 bg-black/30 rounded w-full"
                  >
                    <List className="h-4 w-4 mr-2" />
                    {showToc ? "Hide Table of Contents" : "Show Table of Contents"}
                  </button>
                  
                  {showToc && (
                    <div className="mt-4 p-4 border border-green-400/20 bg-black/30 rounded">
                      <h3 className="text-lg font-bold mb-3 font-mono">Table of Contents</h3>
                      <ul className="space-y-2">
                        {post.toc && post.toc.map((heading: TableOfContents) => (
                          <li 
                            key={heading.slug}
                            className={`${heading.level === 2 ? 'font-semibold' : ''}`}
                            style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
                          >
                            <a 
                              href={`#${heading.slug}`}
                              className="hover:text-green-300 transition-colors"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <p className="text-xl text-green-400/80 mb-6">{post.excerpt}</p>
              <MDXRemoteClient source={post.content} />
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4 md:col-span-1 border border-green-400/20 p-6 bg-black/30 backdrop-blur-sm overflow-hidden">
            {/* Table of Contents (Desktop) */}
            {post.toc && post.toc.length > 0 && (
              <div className="hidden md:block mb-8">
                <h3 className="text-xl font-bold mb-4 font-mono">Table of Contents</h3>
                <ul className="space-y-2">
                  {post.toc.map((heading: TableOfContents) => (
                    <li 
                      key={heading.slug}
                      className={`${heading.level === 2 ? 'font-semibold' : ''}`}
                      style={{ marginLeft: `${(heading.level - 1) * 0.5}rem` }}
                    >
                      <a 
                        href={`#${heading.slug}`}
                        className="text-green-400/70 hover:text-green-300 transition-colors"
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
                      alt={`Thumbnail for ${recentPost.title}`}
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
}