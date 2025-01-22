import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Music4, Mic2, Radio, Heart, Sparkles } from "lucide-react";

const MUSIC_STYLES = [
  {
    id: 1,
    name: "Carnatic",
    description: "Classical music tradition from South India",
    instruments: "Veena, Mridangam, Violin",
    icon: <Music4 className="w-8 h-8" />,
  },
  {
    id: 2,
    name: "Hindustani",
    description: "Classical music tradition from North India",
    instruments: "Sitar, Tabla, Sarod",
    icon: <Mic2 className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Bhajan",
    description: "Devotional songs in praise of deities",
    instruments: "Harmonium, Dholak, Manjira",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 4,
    name: "Folk",
    description: "Traditional music from various regions",
    instruments: "Dhol, Ektara, Pungi",
    icon: <Radio className="w-8 h-8" />,
  },
  {
    id: 5,
    name: "Fusion",
    description: "Blend of Indian classical and modern elements",
    instruments: "Mixed traditional and modern",
    icon: <Sparkles className="w-8 h-8" />,
  },
];

const ExploreStyles = () => {
  return (
    <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg relative overflow-hidden">
      {/* Animated Mandala Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="absolute inset-0 animate-spin-slow">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute inset-0 border-2 border-primary/20 rounded-full
                transform origin-center scale-${i + 1} animate-pulse-slow-${i}`}
              style={{
                animationDelay: `${i * 0.5}s`,
                rotate: `${i * 30}deg`,
              }}
            />
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Explore Styles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MUSIC_STYLES.map((style) => (
          <div
            key={style.id}
            className="group relative bg-white/40 backdrop-blur-sm p-6 rounded-xl border border-primary/20 
                     hover:border-primary/40 transition-all duration-300 hover:shadow-lg 
                     hover:transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 
                          transition-colors duration-300">
                {style.icon}
              </div>
              <h3 className="font-bold text-xl text-primary">{style.name}</h3>
              <p className="text-sm text-gray-600">{style.description}</p>
              <p className="text-xs text-gray-500">
                <span className="font-medium">Key Instruments:</span> {style.instruments}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="w-full text-primary hover:text-primary/80 hover:bg-primary/10"
              >
                Try Style
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreStyles;