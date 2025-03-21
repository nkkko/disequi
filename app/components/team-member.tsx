"use client"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  className?: string
}

export function TeamMember({ name, role, bio, className = "" }: TeamMemberProps) {
  return (
    <div className={`border border-green-400/20 p-4 ${className}`}>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-green-400/60 mb-2">{role}</p>
      <p className="text-green-400/80">{bio}</p>
    </div>
  )
}