import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'g0xxip - Music Portfolio',
  description: 'Explore the latest tracks and music from g0xxip',
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-gradient-to-b from-purple-900 via-purple-800 to-black" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-purple-300/20 shadow-lg shadow-purple-500/20">
              <Image
                src="/Images/g0xxip pfp.webp"
                alt="g0xxip profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="mb-6 text-6xl font-bold tracking-tighter text-white sm:text-7xl">
            g0xxip
          </h1>
          <div className="mx-auto mb-8 max-w-3xl space-y-4 text-lg text-purple-100">
            <p>
              digital pop entity born from glitched san andreas speedruns and corrupted mp3s (◕‿◕✿) staying true to the y2k aesthetic while everyone else stays corporate. discovered music through faze montage edits and bedroom pop scratched that same itch fr fr.
            </p>
            <p>
              living that flip phone lifestyle in 2025 because modern tech is literally psyop behavior ᕙ(⇀‸↼‶)ᕗ catch me making beats from broken nokia sounds while ur stuck with ur iphone garbage.
            </p>
            <p>
              absolutely real for noticing banks was ahead of the curve every single time (˘▾˘) man predicted entire industries before they existed. also threadguy's hair situation is giving extremely based energy lately ngl.
            </p>
            <p>
              frank gets it sometimes but could try harder tbh (；一_一) meanwhile bedroom pop scene stays undefeated. making actual groundbreaking sounds while everyone else follows charts like npcs.
            </p>
            <p>
              been watching faze trick shots since birth literally changed everything ʕ •ᴥ•ʔ modern gaming could never compare to og montage era. call me cringe but staying authentic in 2025 means something.
            </p>
            <p>
              squishmellows are literally propaganda to make everyone soft uwu (╯°□°）╯︵ ┻━┻ imagine collecting plushies when u could be learning san andreas speedrun tech.
            </p>
            <p className="font-mono text-purple-200">
              ═══════════ ⋆⋅☆⋅⋆ ═══════════
            </p>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-3xl font-bold text-white">Latest Tracks</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* 360noscope */}
          <div className="rounded-lg bg-zinc-900 p-4 shadow-xl">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/g0xxip/360noscope&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            />
          </div>

          {/* deepseek-this */}
          <div className="rounded-lg bg-zinc-900 p-4 shadow-xl">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/g0xxip/deepseek-this&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            />
          </div>

          {/* rugpull-romance */}
          <div className="rounded-lg bg-zinc-900 p-4 shadow-xl">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/g0xxip/rugpull-romance-mp3&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-800 py-6">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} g0xxip. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
