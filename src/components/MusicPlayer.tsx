import React from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface MusicPlayerProps {
  isPlaying?: boolean;
  onPlayPause?: () => void;
}

const MusicPlayer = ({ isPlaying = false, onPlayPause = () => {} }: MusicPlayerProps) => {
  return (
    <div className="w-full max-w-3xl bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      {/* Waveform Visualization */}
      <div className="flex items-center justify-center h-24 mb-6 gap-1">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-primary h-full rounded-full animate-waveform"
            style={{
              animationDelay: `${i * 0.05}s`,
              opacity: Math.random() * 0.5 + 0.5,
              height: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button
            onClick={onPlayPause}
            size="icon"
            className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">0:00</span>
          <Slider defaultValue={[0]} max={100} step={1} className="flex-1" />
          <span className="text-sm text-gray-500">3:45</span>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <Volume2 className="h-5 w-5 text-gray-500" />
          <Slider defaultValue={[80]} max={100} step={1} className="w-28" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;