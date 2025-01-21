import React from "react";
import PromptInput from "@/components/PromptInput";
import MusicPlayer from "@/components/MusicPlayer";
import SavedTracks from "@/components/SavedTracks";

const Index = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handleGenerate = (prompt: string) => {
    console.log("Generating music with prompt:", prompt);
    // TODO: Implement music generation
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Indian Music Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

        {/* Saved Tracks */}
        <div className="flex justify-center">
          <SavedTracks />
        </div>
      </div>
    </div>
  );
};

export default Index;