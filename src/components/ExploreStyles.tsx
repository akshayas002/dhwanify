import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Music4 } from "lucide-react";

const MUSIC_STYLES = [
  {
    id: 1,
    name: "Carnatic",
    description: "Classical music tradition from South India",
    instruments: "Veena, Mridangam, Violin",
  },
  {
    id: 2,
    name: "Hindustani",
    description: "Classical music tradition from North India",
    instruments: "Sitar, Tabla, Sarod",
  },
  {
    id: 3,
    name: "Bhajan",
    description: "Devotional songs in praise of deities",
    instruments: "Harmonium, Dholak, Manjira",
  },
  {
    id: 4,
    name: "Folk",
    description: "Traditional music from various regions",
    instruments: "Dhol, Ektara, Pungi",
  },
  {
    id: 5,
    name: "Fusion",
    description: "Blend of Indian classical and modern elements",
    instruments: "Mixed traditional and modern",
  },
];

const ExploreStyles = () => {
  return (
    <div className="w-full max-w-2xl bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">Explore Styles</h2>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {MUSIC_STYLES.map((style) => (
            <div
              key={style.id}
              className="p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-lg text-primary">{style.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {style.description}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Key Instruments:</span>{" "}
                    {style.instruments}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-primary/80"
                >
                  <Music4 className="w-4 h-4 mr-2" />
                  Try Style
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ExploreStyles;