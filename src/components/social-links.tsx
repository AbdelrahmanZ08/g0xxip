import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { XLogo } from './icons/x-logo'

export function SocialLinks() {
  return (
    <div className="fixed right-6 top-16 z-20 flex items-center gap-4">
      <Link
        href="https://twitter.com/g0xxip"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-zinc-900 p-2 text-purple-400 transition-colors hover:bg-zinc-800 hover:text-purple-300"
      >
        <XLogo className="h-6 w-6" />
      </Link>
      <Link
        href="https://instagram.com/g0xxip"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-zinc-900 p-2 text-purple-400 transition-colors hover:bg-zinc-800 hover:text-purple-300"
      >
        <Instagram className="h-6 w-6" />
      </Link>
    </div>
  )
} 