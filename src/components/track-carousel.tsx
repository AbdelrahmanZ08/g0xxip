import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'

const tracks = [
  {
    title: '360noscope',
    url: 'https://soundcloud.com/g0xxip/360noscope'
  },
  {
    title: 'deepseek-this',
    url: 'https://soundcloud.com/g0xxip/deepseek-this'
  },
  {
    title: 'rugpull-romance',
    url: 'https://soundcloud.com/g0xxip/rugpull-romance-mp3'
  }
]

export function TrackCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {tracks.map((track) => (
            <div key={track.title} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
              <div className="mr-4 rounded-lg border-2 border-purple-900/50 bg-zinc-900 p-4 shadow-xl shadow-purple-900/10">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${track.url}&color=%23a855f7&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center gap-4 md:hidden">
        <button
          onClick={scrollPrev}
          className="rounded-lg border-2 border-purple-500 bg-purple-600/20 px-4 py-2 text-purple-300 transition-all hover:bg-purple-600 hover:text-white"
        >
          Previous
        </button>
        <button
          onClick={scrollNext}
          className="rounded-lg border-2 border-purple-500 bg-purple-600/20 px-4 py-2 text-purple-300 transition-all hover:bg-purple-600 hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  )
} 