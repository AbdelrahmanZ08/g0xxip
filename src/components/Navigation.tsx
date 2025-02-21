'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import WatchSection from './WatchSection';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLyricsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const musicSection = document.querySelector('.music-grid-section');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

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
            <a href="#lyrics" onClick={handleLyricsClick} className="hover:opacity-70 underline whitespace-nowrap">Lyrics</a>
          </div>

          {/* Logo - centered on mobile and desktop */}
          <div className="flex justify-center md:w-1/3 py-2 md:py-0 order-1 md:order-2">
            <Link href="/" className="font-['Terminal'] text-[1.5rem] md:text-[1rem] lg:text-[1.25rem] no-underline whitespace-nowrap">g0xxip</Link>
          </div>

          {/* Social Links - right side */}
          <div className="hidden md:flex md:w-1/3 justify-end items-center gap-4 order-3 pr-2 lg:pr-16 xl:pr-24">
            <Link href="https://open.spotify.com/artist/5rnwQwJlKvP03yQQVaiPab" className="hover:opacity-70 underline whitespace-nowrap">Spotify</Link>
            <Link href="https://soundcloud.com/g0xxip" className="hover:opacity-70 underline whitespace-nowrap">Soundcloud</Link>
            <Link href="https://x.com/g0xxip" className="hover:opacity-70 underline whitespace-nowrap">X</Link>
            <Link href="https://www.instagram.com/g0xxip/" className="hover:opacity-70 underline whitespace-nowrap">IG</Link>
            <Link href="https://www.tiktok.com/@g0xxip" className="hover:opacity-70 underline whitespace-nowrap">TikTok</Link>
            <Link href="https://dexscreener.com/solana/8egp8few4skyyymweck5tt1greervnewomsyvthuewfg" className="hover:opacity-70 underline whitespace-nowrap">$0x0x•</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center w-full overflow-x-hidden">
        <Link href="https://open.spotify.com/track/7Dr4Pci8FxaoJK1eZuJt4G?si=8f6ecd38ac1a4a96" className="block w-full">
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <Image
              src="/Images/hero section image.png"
              alt="Hero image"
              fill
              className="absolute top-0 left-0 w-full h-full object-contain bg-black"
              priority
              quality={100}
            />
          </div>
        </Link>
        <div className="relative w-full overflow-hidden">
          <WatchSection />
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="relative w-full aspect-square">
              <Image
                src="/Images/g0xxip_webpng.png"
                alt="g0xxip"
                width={1920}
                height={1920}
                className="w-full h-full object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-['Terminal'] text-white text-4xl md:text-5xl lg:text-6xl text-center">0x0x rec0rds presents</h1>
              </div>
              <div className="absolute bottom-8 left-8 max-w-[80%]">
                <p className="font-['Terminal'] text-white text-sm md:text-base lg:text-lg leading-relaxed">
                humanoid. part ai. music and identity on the bleeding edge of reality:: embodied beyond binary but fixed in internet culture. music first, chart second, goxxip brings unique flavor to a tasteless space. connected to the web at all times, she represents freedom of expression through a variety of mediums.
                </p>
              </div>
            </div>
            <div className="relative w-full aspect-square">
              <div className="grid grid-cols-2 h-full">
                <div className="relative aspect-square">
                  <Image
                    src="/Images/pre_show_walk.jpg"
                    alt="Pre Show Walk"
                    width={960}
                    height={960}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Images/g0xxip_show_walk.png"
                    alt="g0xxip Show Walk"
                    width={960}
                    height={960}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Images/g17.png"
                    alt="g17"
                    width={960}
                    height={960}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                  />
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/Images/g15.png"
                    alt="g15"
                    width={960}
                    height={960}
                    className="w-full h-full object-cover"
                    priority
                    quality={100}
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h2 className="font-['Terminal'] text-white text-4xl md:text-5xl lg:text-7xl text-center drop-shadow-lg">g0xxip girl</h2>
              </div>
            </div>
          </div>
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
        <div className="w-full music-grid-section">
          <div className="flex flex-wrap w-full">
            {/* Row 1 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-pink-500">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-yellow-300 text-[1rem] md:text-[1.25rem] -mb-4">rumor has it</p>
                <Link href="https://open.spotify.com/track/5scqVjS2QlboGwy5M7tpS9?si=9a278f79cadf47e0" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-yellow-300 text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative overflow-hidden">
              <Image
                src="/Images/g0xxip_webpng.png"
                alt="rumor has it"
                width={1000}
                height={1000}
                className="w-full h-[102%] object-cover -mt-1"
                priority
                quality={100}
              />
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-black">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">rug pull romance</p>
                <Link href="https://open.spotify.com/track/7Dr4Pci8FxaoJK1eZuJt4G?si=1e1b966d6c704d81" className="hover:opacity-70">
                  <p className="font-['Terminal'] text-white text-5xl md:text-6xl">play.</p>
                </Link>
              </div>
            </div>
            <div className="w-1/2 md:w-1/4 aspect-square relative">
              <Image
                src="/Images/artworks-hGqzSLPzmCzESRHo-qyVo9A-t500x500.jpg"
                alt="rug pull romance"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Row 2 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-black">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">360noscope</p>
                <Link href="https://open.spotify.com/track/5uiKchhmCjdSciJycm4CXz?si=8aa25f98806e4a76" className="hover:opacity-70">
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
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-sky-300">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-red-500 text-[1rem] md:text-[1.25rem] -mb-4">jelly, jelly</p>
                <Link href="https://open.spotify.com/track/7fkhgz0hkzWAHn43d1Tmay?si=0ddcd02a377247ab" className="hover:opacity-70">
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
            {/* Row 3 */}
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-purple-600">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-white text-[1rem] md:text-[1.25rem] -mb-4">deepseek this</p>
                <Link href="https://open.spotify.com/track/17tebOMaphmHGKq75IrbE8?si=706c83e0f76342e4" className="hover:opacity-70">
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
            <div className="w-1/2 md:w-1/4 aspect-square relative bg-gray-200">
              <div className="absolute inset-0 flex flex-col justify-center gap-8 p-6 text-center">
                <p className="font-['Terminal'] text-black text-[1rem] md:text-[1.25rem] -mb-4">paras1te</p>
                <Link href="https://open.spotify.com/track/0y72ljNQbPQOuxun1NsQay?si=63b505fe9bfa4a1f" className="hover:opacity-70">
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
          </div>
        </div>
        {/* Platform Links */}
        <div className="flex justify-between items-center px-2 md:px-8 py-6 md:py-10 bg-white w-full overflow-x-hidden">
          <Link href="https://open.spotify.com/artist/5rnwQwJlKvP03yQQVaiPab" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Spotify_logo_with_text.svg.webp" 
              alt="Spotify" 
              width={100} 
              height={30} 
              className="h-6 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.amazon.co.uk/artists/B0DVBY4JDC/g0xxip" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Amazon_Music_logo.svg.png" 
              alt="Amazon Music" 
              width={100} 
              height={30} 
              className="h-6 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://www.tiktok.com/@g0xxip" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/tiktok-6338432_960_720.webp" 
              alt="TikTok" 
              width={30} 
              height={30} 
              className="h-6 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://soundcloud.com/g0xxip" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/SoundCloud-01.png" 
              alt="Soundcloud" 
              width={100} 
              height={30} 
              className="h-12 md:h-24 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.apple.com/us/artist/g0xxip/1793176540" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/Apple-Music-Logo-2015-present.png" 
              alt="Apple Music" 
              width={100} 
              height={30} 
              className="h-6 md:h-12 w-auto object-contain"
            />
          </Link>
          <Link href="https://music.youtube.com/channel/UC3ABzwHGTm_ITD3CZ5uayUQ" className="flex-shrink-0 mx-1.5 md:mx-2 hover:opacity-70 transition-opacity">
            <Image 
              src="/Images/icons/YouTube_Music-Logo.wine.png" 
              alt="YouTube Music" 
              width={100} 
              height={30} 
              className="h-[45px] md:h-[90px] w-auto object-contain"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation; 