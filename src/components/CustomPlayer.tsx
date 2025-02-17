import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Play, Pause } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const songs = [
  {
    title: 'deepseek this',
    url: 'https://open.spotify.com/track/17tebOMaphmHGKq75IrbE8',
    image: '/Images/g6.png'
  },
  {
    title: 'jelly jelly',
    url: 'https://soundcloud.com/g0xxip/jelly-jelly',
    image: '/Images/g11.png'
  },
  {
    title: 'rumor has it',
    url: '#',
    image: '/Images/rumor.png'
  },
  {
    title: '360noscope',
    url: 'https://open.spotify.com/track/5uiKchhmCjdSciJycm4CXz',
    image: '/Images/songs/360noscope.png'
  },
  {
    title: 'vape cabal',
    url: 'https://soundcloud.com/g0xxip/vape-cabal',
    image: '/Images/songs/vape cabal.png'
  },
  {
    title: 'parasite',
    url: 'https://soundcloud.com/g0xxip/parasite',
    image: '/Images/songs/parasite.png'
  }
];

export default function CustomPlayer() {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        const index = emblaApi.selectedScrollSnap();
        setCurrentSong(index);
      });
    }
  }, [emblaApi]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    window.open(songs[currentSong].url, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-black to-purple-900/20 rounded-3xl p-8">
      {/* Swipeable song carousel */}
      <div className="overflow-hidden mb-8" ref={emblaRef}>
        <div className="flex">
          {songs.map((song, index) => (
            <div key={song.title} className="flex-[0_0_100%] min-w-0">
              <div className="relative aspect-square">
                <Image
                  src={song.image}
                  alt={song.title}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
                {/* Song title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-lg font-['Terminal'] text-white truncate text-center">
                    {song.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Play/Pause button */}
      <div className="flex justify-center">
        <button 
          onClick={handlePlayPause}
          className="p-6 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
        >
          {isPlaying ? <Pause size={40} /> : <Play size={40} className="ml-1" />}
        </button>
      </div>
    </div>
  );
} 