import React from "react";
import PromptInput from "@/components/PromptInput";
import MusicPlayer from "@/components/MusicPlayer";
import SavedTracks from "@/components/SavedTracks";
import ExploreStyles from "@/components/ExploreStyles";

const Index = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleGenerate = (prompt: string) => {
    console.log("Generating music with prompt:", prompt);
    // TODO: Implement music generation
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Mandala Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#DAA520]/10" />
        
        {/* Floral Mandala Pattern */}
        <div className="absolute inset-0 animate-spin-slow opacity-20">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `rotate(${i * 45}deg)`,
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, #800020 2%, transparent 2.5%),
                  radial-gradient(circle at 50% 50%, #DAA520 4%, transparent 4.5%),
                  radial-gradient(circle at 50% 50%, #E6B8B8 6%, transparent 6.5%),
                  radial-gradient(circle at 50% 50%, #D4AF37 8%, transparent 8.5%),
                  radial-gradient(circle at 50% 50%, #800020 10%, transparent 10.5%)
                `,
                backgroundSize: '100% 100%',
                animation: `pulse-slow ${3 + i * 0.5}s infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>

        {/* Floral Elements */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full origin-center"
              style={{
                transform: `rotate(${i * 30}deg)`,
                backgroundImage: `
                  radial-gradient(circle at 50% 0%, #DAA520 1%, transparent 2%),
                  radial-gradient(circle at 50% 0%, #800020 3%, transparent 4%),
                  radial-gradient(circle at 50% 0%, #D4AF37 5%, transparent 6%)
                `,
                backgroundSize: '50% 50%',
                animation: `pulse-slow ${4 + i * 0.3}s infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#800020] mb-4">
            Dhwanify AI
          </h1>
          <p className="text-lg text-[#800020]/80 max-w-2xl mx-auto">
            Create unique Indian music by describing your vision. Blend traditional styles
            with modern creativity.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="flex justify-center mb-12">
          <PromptInput onGenerate={handleGenerate} />
        </div>

        {/* Music Player */}
        <div className="flex justify-center mb-12">
          <MusicPlayer
            isPlaying={isPlaying}
            onPlayPause={() => setIsPlaying(!isPlaying)}
          />
        </div>

        {/* Explore Styles and Saved Tracks */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <ExploreStyles />
          <SavedTracks />
        </div>
      </div>
    </div>
  );
};

export default Index;