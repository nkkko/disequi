import { useMDXComponent } from "next-contentlayer/hooks"

export function MDX({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)

  return <MDXContent />
}

