import { getVerseTypeColor } from '../utils/colors';

interface LyricsDisplayProps {
  lyrics: {
    type: 'verse' | 'chorus' | 'bridge' | 'pre-chorus' | 'post-chorus' | 'outro';
    content: string[];
  }[];
}

const LyricsDisplay: React.FC<LyricsDisplayProps> = ({ lyrics }) => {
  return (
    <div className="space-y-8 font-['Terminal']">
      {lyrics.map((verse, index) => (
        <div key={index} className="space-y-2">
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
        </div>
      ))}
    </div>
  );
};

export default LyricsDisplay; 