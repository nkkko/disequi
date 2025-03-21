export interface BlogArticle {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  thumbnailSeed: number
  slug: string
  readTime: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: "1",
    title: "The Balance Between Innovation and Stability",
    excerpt:
      "Discover how successful businesses maintain equilibrium between pushing boundaries and maintaining core strengths.",
    date: "2024-03-10",
    author: "Nikola Balić",
    thumbnailSeed: 12345,
    slug: "balance-innovation-stability",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Divergence-Convergence: A Framework for Problem Solving",
    excerpt: "Learn how our unique approach to problem-solving can help your business navigate complex challenges.",
    date: "2024-02-28",
    author: "John Smith",
    thumbnailSeed: 67890,
    slug: "divergence-convergence-framework",
    readTime: "7 min read",
  },
  {
    id: "3",
    title: "Digital Transformation: Beyond the Buzzword",
    excerpt: "What digital transformation really means and how to implement it effectively in your organization.",
    date: "2024-02-15",
    author: "Emily Chen",
    thumbnailSeed: 24680,
    slug: "digital-transformation-beyond-buzzword",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "The Art of Strategic Pivoting",
    excerpt: "How to recognize when your business needs to pivot and strategies for doing it successfully.",
    date: "2024-01-30",
    author: "Nikola Balić",
    thumbnailSeed: 13579,
    slug: "art-strategic-pivoting",
    readTime: "8 min read",
  },
  {
    id: "5",
    title: "Building Resilient Business Models",
    excerpt: "Strategies for creating business models that can withstand market disruptions and economic uncertainty.",
    date: "2024-01-15",
    author: "John Smith",
    thumbnailSeed: 97531,
    slug: "building-resilient-business-models",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "The Future of Work: Balancing Automation and Human Talent",
    excerpt: "How to prepare your organization for the changing landscape of work in the age of AI and automation.",
    date: "2023-12-20",
    author: "Emily Chen",
    thumbnailSeed: 86420,
    slug: "future-work-automation-human-talent",
    readTime: "9 min read",
  },
]

