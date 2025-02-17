'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lyrics } from '../data/lyrics';

interface Song {
  title: string;
  color: string;
  bgImage: string;
}

const songs: Song[] = [
  {
    title: 'rumor has it',
    color: 'from-yellow-600 to-red-600',
    bgImage: '/Images/rumor.png'
  },
  {
    title: '15 alarms',
    color: 'from-blue-600 to-purple-600',
    bgImage: '/Images/g17.png'
  },
  {
    title: 'rug pull romance',
    color: 'from-pink-600 to-purple-600',
    bgImage: '/Images/g15.png'
  },
  {
    title: 'deepseek this',
    color: 'from-purple-600 to-blue-600',
    bgImage: '/Images/g6.png'
  },
  {
    title: 'real reel',
    color: 'from-red-600 to-pink-600',
    bgImage: '/Images/g12.png'
  },
  {
    title: 'parasite',
    color: 'from-gray-800 to-gray-600',
    bgImage: '/Images/songs/parasite.png'
  },
  {
    title: 'jelly jelly',
    color: 'from-pink-400 to-purple-400',
    bgImage: '/Images/g11.png'
  },
  {
    title: '360noscope',
    color: 'from-red-600 to-black',
    bgImage: '/Images/songs/360noscope.png'
  }
];

const getVerseTypeColor = (type: string) => {
  switch (type) {
    case 'chorus':
      return 'text-yellow-400';
    case 'verse':
      return 'text-white';
    case 'bridge':
      return 'text-purple-400';
    case 'pre-chorus':
      return 'text-blue-400';
    case 'post-chorus':
      return 'text-green-400';
    case 'outro':
      return 'text-red-400';
    default:
      return 'text-white';
  }
};

const RELEASE_DATE = new Date();
RELEASE_DATE.setDate(RELEASE_DATE.getDate() + 1); // tomorrow
RELEASE_DATE.setHours(21, 0, 0, 0); // 9 PM PST

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = RELEASE_DATE.getTime() - now.getTime();
  
  if (difference <= 0) {
    return null;
  }

  return {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

export default function LyricsPage() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (!newTimeLeft) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSongClick = (title: string) => {
    setSelectedSong(title);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-4xl md:text-6xl font-['Terminal'] text-center mb-12">lyrics.</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
        {songs.map((song) => (
          <motion.div
            key={song.title}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden rounded-xl cursor-pointer h-64 bg-gradient-to-br ${song.color}`}
            onClick={() => handleSongClick(song.title)}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40 hover:opacity-60 transition-opacity"
              style={{ backgroundImage: `url(${song.bgImage})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="font-['Terminal'] text-2xl md:text-3xl text-white text-center px-4 mb-2">
                {song.title}
              </h2>
              {song.title === 'rumor has it' && timeLeft && (
                <div className="font-['Terminal'] text-yellow-300 text-lg">
                  {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto space-y-24 pb-24">
        {songs.map((song) => (
          <motion.div
            key={song.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-4 z-10 bg-black/80 backdrop-blur-sm py-4 mb-8">
              <h2 className="font-['Terminal'] text-3xl md:text-4xl text-center">
                {song.title}
              </h2>
              {song.title === 'rumor has it' && timeLeft && (
                <div className="text-center mt-2">
                  <div className="font-['Terminal'] text-yellow-300 text-lg inline-block px-4 py-2 rounded-lg bg-black/50">
                    Coming February 18th at 9 PM PST
                  </div>
                </div>
              )}
            </div>
            
            {(!timeLeft || song.title !== 'rumor has it') && lyrics[song.title] && (
              <div className="space-y-8 font-['Terminal']">
                {lyrics[song.title].verses.map((verse, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <h4 className={`text-sm uppercase ${getVerseTypeColor(verse.type)} mb-2`}>
                      {verse.type}
                    </h4>
                    {verse.content.map((line, lineIndex) => (
                      <p 
                        key={lineIndex} 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {line}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedSong && (selectedSong !== 'rumor has it' || !timeLeft) && lyrics[selectedSong] && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedSong(null)}
          >
            <motion.div 
              className="bg-gray-900 p-6 rounded-xl max-w-3xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Terminal'] text-2xl">{selectedSong}</h3>
                <button 
                  onClick={() => setSelectedSong(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              {selectedSong === 'rumor has it' && timeLeft ? (
                <div className="text-center py-12">
                  <h4 className="font-['Terminal'] text-2xl text-yellow-300 mb-4">Releasing in</h4>
                  <div className="font-['Terminal'] text-4xl text-white">
                    {`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
                  </div>
                  <p className="mt-4 text-gray-400">Coming February 18th at 9 PM PST</p>
                </div>
              ) : (
                <div className="space-y-8 font-['Terminal']">
                  {lyrics[selectedSong]?.verses.map((verse, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <h4 className={`text-sm uppercase ${getVerseTypeColor(verse.type)} mb-2`}>
                        {verse.type}
                      </h4>
                      {verse.content.map((line, lineIndex) => (
                        <p 
                          key={lineIndex} 
                          className="text-gray-300 hover:text-white transition-colors"
                        >
                          {line}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 