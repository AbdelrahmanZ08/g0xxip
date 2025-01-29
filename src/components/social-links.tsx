import React from 'react'
import { Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <div className="fixed left-6 top-6 z-50 flex items-center gap-4">
      <Link
        href="https://www.instagram.com/g0xxip"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 transition-colors hover:text-white"
        aria-label="Follow on Instagram"
      >
        <Instagram className="h-6 w-6" />
      </Link>
      <Link
        href="https://x.com/g0xxip"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/70 transition-colors hover:text-white"
        aria-label="Follow on X (formerly Twitter)"
      >
        <Twitter className="h-6 w-6" />
      </Link>
    </div>
  )
} 