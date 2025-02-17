import { Metadata } from 'next'
import Image from 'next/image'
import LyricsSection from '@/components/LyricsSection'

export const metadata: Metadata = {
  title: 'g0xxip - Music Portfolio',
  description: 'Explore the latest tracks and music from g0xxip',
}

export default function HomePage() {
  return (
    <main className="w-full">
      <LyricsSection />
      
      {/* Footer */}
      <footer className="w-full border-t border-zinc-800">
        <div className="mx-auto max-w-6xl px-6 py-2">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} g0xxip. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
