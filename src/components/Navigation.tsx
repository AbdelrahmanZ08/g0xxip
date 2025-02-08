'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import WatchSection from './WatchSection';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full bg-white overflow-x-hidden">
      <nav className="sticky top-0 w-full py-2 bg-white z-50">
        <div className="relative flex flex-col md:flex-row w-full px-4 max-w-full">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden absolute right-4 top-2 z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-black transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-black transform transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>

          {/* Links - full width on mobile, left-aligned on desktop */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center md:items-center gap-4 font-space-mono text-[0.75rem] md:text-[0.75rem] lg:text-sm md:w-1/3 md:justify-start md:pl-2 lg:pl-16 xl:pl-24 mt-4 md:mt-0 order-2 md:order-1`}>
            <Link href="https://open.spotify.com/artist/5rnwQwJlKvP03yQQVaiPab" className="hover:opacity-70 underline whitespace-nowrap">Spotify</Link>
            <Link href="https://soundcloud.com/g0xxip" className="hover:opacity-70 underline whitespace-nowrap">Soundcloud</Link>
            <Link href="https://x.com/g0xxip" className="hover:opacity-70 underline whitespace-nowrap">X</Link>
            <Link href="https://www.instagram.com/g0xxip/" className="hover:opacity-70 underline whitespace-nowrap">IG</Link>
            <Link href="https://www.tiktok.com/@g0xxip" className="hover:opacity-70 underline whitespace-nowrap">TikTok</Link>
            <Link href="https://dexscreener.com/solana/8egp8few4skyyymweck5tt1greervnewomsyvthuewfg" className="hover:opacity-70 underline whitespace-nowrap">$0x0x•</Link>
          </div>

          {/* Logo - centered on mobile and desktop */}
          <div className="flex justify-center md:w-1/3 py-2 md:py-0 order-1 md:order-2">
            <Link href="/" className="font-['Terminal'] text-[1.5rem] md:text-[1rem] lg:text-[1.25rem] no-underline whitespace-nowrap">g0xxip</Link>
          </div>

          {/* Empty div for spacing on the right */}
          <div className="hidden md:block md:w-1/3 order-3"></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full overflow-x-hidden">
        <div className="relative w-full">
          <Image
            src="/Images/ABOVE_HERO.jpeg"
            alt="Crystal banner"
            width={1920}
            height={300}
            className="w-full h-[150px] object-cover object-center"
            priority
          />
        </div>
        <Link href="https://open.spotify.com/track/7Dr4Pci8FxaoJK1eZuJt4G?si=8f6ecd38ac1a4a96" className="block w-full -mx-[2px]">
          <Image
            src="/Images/image.png"
            alt="Hero image"
            width={1920}
            height={1080}
            className="w-[calc(100%+4px)] h-auto object-cover"
            priority
            quality={100}
          />
        </Link>
        <div className="relative w-full overflow-hidden">
          <WatchSection />
        </div>
        <div className="relative w-full overflow-hidden">
          <Image
            src="/Images/0x0x records presents.png"
            alt="0x0x records presents"
            width={1920}
            height={2000}
            className="w-full h-[102%] object-cover -mt-1"
            priority
            quality={100}
          />
        </div>
        {/* Digitals Section with Spotify */}
        <div className="w-full bg-[#24A3E3] py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90%] mx-auto">
            {/* Left Side - Images and Title */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 mb-8 lg:mb-0">
              {/* Images Section */}
              <div className="flex justify-center lg:justify-start w-[90%] lg:w-auto">
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className="aspect-square relative">
                    <Image
                      src="/Images/32_00059_x1080.jpg.png"
                      alt="Digital 1"
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/Images/32_00111-2_top_x1080.jpg.png"
                      alt="Digital 2"
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square relative">
                    <Image
                      src="/Images/g0xxip2.png"
                      alt="Digital 3"
                      width={180}
                      height={180}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Title */}
              <h2 className="font-['Terminal'] text-white text-2xl lg:text-3xl">digitals.</h2>
            </div>
            {/* Spotify Player */}
            <div className="w-[90%] lg:w-[30%]">
              <div className="w-full bg-black rounded-lg overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/track/7Dr4Pci8FxaoJK1eZuJt4G?utm_source=generator&theme=0"
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="border-0"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Music Grid Section */}
        <div className="w-full">
          <div className="flex flex-wrap w-full">
            {/* Row 1 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-purple-600">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">deepseek this</p>
                <Link href="https://open.spotify.com/track/17tebOMaphmHGKq75IrbE8?si=9588d9651a4d4c4d" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-white text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative overflow-hidden">
              <Image
                src="/Images/deepseek this.png"
                alt="deepseek this"
                width={1000}
                height={1000}
                className="w-full h-[102%] object-cover -mt-1"
                priority
                quality={100}
              />
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-black">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">360noscope</p>
                <Link href="https://open.spotify.com/track/5uiKchhmCjdSciJycm4CXz?si=d2a971365a1349b2" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-red-500 text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative">
              <Image
                src="/Images/songs/360noscope.png"
                alt="360noscope"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Row 2 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-sky-300">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-red-500 text-[1rem] md:text-[1.25rem] -mb-4">jelly jelly</p>
                <Link href="https://soundcloud.com/g0xxip/jelly-jelly?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-red-500 text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative">
              <Image
                src="/Images/songs/jelly jelly.png"
                alt="jelly jelly"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-gray-200">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-black text-[1rem] md:text-[1.25rem] -mb-4">parasite</p>
                <Link href="https://soundcloud.com/g0xxip/parasite?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-black text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative">
              <Image
                src="/Images/songs/parasite.png"
                alt="parasite"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Row 3 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-black">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">vape cabal</p>
                <Link href="https://soundcloud.com/g0xxip/vape-cabal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-white text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative">
              <Image
                src="/Images/songs/vape cabal.png"
                alt="vape cabal"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-[#D4B7BE]">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-yellow-300 text-[1rem] md:text-[1.25rem] -mb-4">rumor has it<br />ft. rmr</p>
                <Link href="https://www.x.com/whatrmr" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-yellow-300 text-5xl md:text-6xl">2/14</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative overflow-hidden">
              <Image
                src="/Images/rumor has it.png"
                alt="rumor has it"
                width={1000}
                height={1000}
                className="w-full h-[102%] object-cover -mt-1"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
        {/* Platform Links */}
        <div className="flex justify-between items-center px-4 md:px-8 py-10 bg-white min-w-full">
          <Link href="https://open.spotify.com/artist/5rnwQwJlKvP03yQQVaiPab" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Spotify_logo_with_text.svg.webp" 
              alt="Spotify" 
              width={100} 
              height={30} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.amazon.co.uk/artists/B0DVBY4JDC/g0xxip" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Amazon_Music_logo.svg.png" 
              alt="Amazon Music" 
              width={100} 
              height={30} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://www.tiktok.com/@g0xxip" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/tiktok-6338432_960_720.webp" 
              alt="TikTok" 
              width={30} 
              height={30} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://soundcloud.com/g0xxip" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/SoundCloud-01.png" 
              alt="Soundcloud" 
              width={100} 
              height={30} 
              className="h-20 md:h-24 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.apple.com/us/artist/g0xxip/1793176540" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Apple-Music-Logo-2015-present.png" 
              alt="Apple Music" 
              width={100} 
              height={30} 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.youtube.com/channel/UC3ABzwHGTm_ITD3CZ5uayUQ" className="flex-shrink-0 mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/YouTube_Music-Logo.wine.png" 
              alt="YouTube Music" 
              width={100} 
              height={30} 
              className="h-[75px] md:h-[90px] w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation; 