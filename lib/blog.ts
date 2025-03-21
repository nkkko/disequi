import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface TableOfContents {
  level: number
  text: string
  slug: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  thumbnailSeed: number
  readTime: string
  content: any // This will hold the serialized MDX content
  toc?: TableOfContents[]
}

export function getSortedPostsData(): Omit<BlogPost, "content" | "toc">[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Remove ".md" or ".mdx" from file name to get slug
      const slug = fileName.replace(/\.(md|mdx)$/, "")

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
  return fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.(md|mdx)$/, ""),
        },
      }
    })
}

// Function to extract headings from markdown content
function extractHeadings(content: string): TableOfContents[] {
  const toc: TableOfContents[] = []
  const headingRegex = /^(#{1,6})\s+(.+)$/gm
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    const slug = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")

    toc.push({
      level,
      text,
      slug,
    })
  }

  return toc
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)
  
  let filePath = ""
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  } else {
    throw new Error(`No .md or .mdx file found for slug: ${slug}`)
  }
  
  const fileContents = fs.readFileSync(filePath, "utf8")

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Extract table of contents
  const toc = extractHeadings(matterResult.content)

  // Serialize MDX content with plugins
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
    scope: matterResult.data,
  })

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
    content: mdxSource,
    toc,
    ...data,
  }
}