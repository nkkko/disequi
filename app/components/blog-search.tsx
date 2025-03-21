"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export function BlogSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400/60" size={18} />
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 bg-black/50 border border-green-400/20 focus:border-green-400 outline-none text-green-400 placeholder-green-400/40"
      />
    </div>
  )
}