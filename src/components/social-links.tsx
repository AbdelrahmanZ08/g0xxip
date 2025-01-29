import React from 'react'
import { Instagram } from 'lucide-react'
import Link from 'next/link'
import { XLogo } from './icons/x-logo'

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
        aria-label="Follow on X"
      >
        <XLogo className="h-5 w-5" />
      </Link>
    </div>
  )
} 