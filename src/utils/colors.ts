export const getVerseTypeColor = (type: string) => {
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