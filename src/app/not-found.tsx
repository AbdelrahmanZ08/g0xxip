import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-purple-400">404</h1>
        <p className="mb-8 text-xl">Page not found</p>
        <Link
          href="/"
          className="rounded-lg border-2 border-purple-500 bg-purple-600/20 px-6 py-3 text-purple-300 transition-all hover:bg-purple-600 hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 