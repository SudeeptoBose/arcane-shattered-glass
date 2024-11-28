import { useState, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio('/audio.mp3'));
  audioRef.current.volume = 1;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.volume = 0;
    } else {
      audioRef.current.play();
      audioRef.current.volume = 1;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-8 lg:right-12 right-4">
      <button
        onClick={togglePlay}
        className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
      >
        {isPlaying ? (
          <Music2 className="w-5 h-5 text-white" />
        ) : (
          <Music className="w-5 h-5 text-white opacity-50" />
        )}
      </button>
    </div>
  );
}