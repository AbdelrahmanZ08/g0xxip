import Image from 'next/image';

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ lyrics }) => {
  return (
    <div className="space-y-8">
      {lyrics.map((lyric, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start gap-6">
            {lyric.coverImage && (
              <div className="flex-shrink-0">
                <Image
                  src={lyric.coverImage}
                  alt={`Cover for ${lyric.title}`}
                  width={120}
                  height={120}
                  className="rounded-md"
                />
              </div>
            )}
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-4">{lyric.title}</h2>
              <p className="whitespace-pre-line">{lyric.lyrics}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}; 