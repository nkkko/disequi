"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { DynamicThumbnail } from "./dynamic-thumbnail"
import { CalendarIcon, Clock } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogArticleCardProps {
  article: Omit<BlogPost, "content">
  index: number
}

export function BlogArticleCard({ article, index }: BlogArticleCardProps) {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="border border-green-400/20 bg-black/30 backdrop-blur-sm overflow-hidden h-full"
    >
      <Link href={`/blog/${article.slug}`} className="flex flex-col h-full">
        <div className="flex flex-col h-full">
          <DynamicThumbnail
            seed={article.thumbnailSeed}
            width={400}
            height={220}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex-1 flex flex-col overflow-hidden">
            <div className="flex items-center text-xs text-green-400/60 mb-2 space-x-4">
              <div className="flex items-center">
                <CalendarIcon size={12} className="mr-1" />
                <span>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock size={12} className="mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 font-mono break-words">{article.title}</h3>
            <p className="text-green-400/80 text-sm mb-4 flex-1 break-words">{article.excerpt}</p>
            <div className="text-xs text-green-400/60">By {article.author}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

