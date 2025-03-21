import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  thumbnailSeed: number
  readTime: string
  content: string
}

export function getSortedPostsData(): Omit<BlogPost, "content">[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, "")

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)

      // Ensure the frontmatter has all required fields
      const data = matterResult.data as {
        title: string
        date: string
        author: string
        excerpt: string
        thumbnailSeed: number
        readTime: string
      }

      // Validate required fields
      if (!data.title || !data.date || !data.author || !data.excerpt) {
        throw new Error(`Missing required frontmatter in ${fileName}`)
      }

      // Use a default thumbnailSeed if not provided
      if (!data.thumbnailSeed) {
        data.thumbnailSeed = Math.floor(Math.random() * 100000)
      }

      // Use a default readTime if not provided
      if (!data.readTime) {
        const wordCount = matterResult.content.split(/\s+/).length
        const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute
        data.readTime = `${readingTime} min read`
      }

      // Combine the data with the slug
      return {
        slug,
        ...data,
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    }
  })
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content)
  const content = processedContent.toString()

  // Ensure the frontmatter has all required fields
  const data = matterResult.data as {
    title: string
    date: string
    author: string
    excerpt: string
    thumbnailSeed: number
    readTime: string
  }

  // Validate required fields
  if (!data.title || !data.date || !data.author || !data.excerpt) {
    throw new Error(`Missing required frontmatter in ${slug}.md`)
  }

  // Use a default thumbnailSeed if not provided
  if (!data.thumbnailSeed) {
    data.thumbnailSeed = Math.floor(Math.random() * 100000)
  }

  // Use a default readTime if not provided
  if (!data.readTime) {
    const wordCount = matterResult.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200) // Assuming 200 words per minute
    data.readTime = `${readingTime} min read`
  }

  // Combine the data with the id and contentHtml
  return {
    slug,
    content,
    ...data,
  }
}

