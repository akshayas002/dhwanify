import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Play, Clock } from "lucide-react";

const SAMPLE_TRACKS = [
  {
    id: 1,
    title: "Soothing Carnatic Meditation",
    duration: "3:45",
    style: "Carnatic",
  },
  {
    id: 2,
    title: "Upbeat Punjabi Folk",
    duration: "4:20",
    style: "Punjabi",
  },
  {
    id: 3,
    title: "Classical Sitar Symphony",
    duration: "5:15",
    style: "Hindustani",
  },
];

const SavedTracks = () => {
  return (
    <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Saved Tracks</h2>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {SAMPLE_TRACKS.map((track) => (
            <div
              key={track.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Play className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{track.title}</h3>
                  <p className="text-sm text-gray-500">{track.style}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{track.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default SavedTracks;