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
      {/* Animated Geometric Mandala Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#DAA520]/10" />
        
        {/* Central Mandala */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-[800px] h-[800px] animate-spin-slow"
              style={{
                transform: `rotate(${i * 60}deg)`,
                animation: `spin-slow ${30 + i * 5}s linear infinite`,
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-radial-gradient(
                      circle at 50% 50%,
                      #DAA520 0%,
                      #D4AF37 5%,
                      transparent 5.5%,
                      #800020 6%,
                      transparent 6.5%,
                      #B8860B 7%,
                      transparent 7.5%,
                      #FFD700 8%,
                      transparent 8.5%
                    )
                  `,
                  opacity: 0.2,
                  animation: `pulse-slow ${4 + i * 0.5}s infinite ease-in-out`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `rotate(${i * 45}deg)`,
                backgroundImage: `
                  repeating-conic-gradient(
                    from ${i * 45}deg,
                    #DAA520 0deg 10deg,
                    transparent 10deg 30deg,
                    #D4AF37 30deg 40deg,
                    transparent 40deg 60deg,
                    #800020 60deg 70deg,
                    transparent 70deg 90deg
                  )
                `,
                opacity: 0.1,
                animation: `pulse-slow ${6 + i * 0.3}s infinite ease-in-out`,
                animationDelay: `${i * 0.2}s`,
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