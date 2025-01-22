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
      {/* Simple gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#DAA520]/10" />
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