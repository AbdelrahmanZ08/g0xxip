import CustomPlayer from './CustomPlayer';

export default function WatchSection() {
  return (
    <div className="relative w-full min-h-screen bg-black -mt-1 -mb-1 flex items-center justify-center">
      {/* Background with cyberpunk gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black">
        {/* Animated glow effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>
      
      {/* Player container */}
      <div className="relative w-full max-w-xl mx-auto px-4">
        <CustomPlayer />
      </div>
    </div>
  );
} 