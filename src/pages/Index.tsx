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
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/10 relative overflow-hidden">
      {/* Decorative Mandala Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      {/* Mandala Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `
               radial-gradient(circle at 50% 50%, transparent 20%, rgba(139, 69, 19, 0.1) 21%, transparent 22%),
               radial-gradient(circle at 50% 50%, transparent 30%, rgba(218, 165, 32, 0.1) 31%, transparent 32%),
               radial-gradient(circle at 50% 50%, transparent 40%, rgba(139, 69, 19, 0.1) 41%, transparent 42%),
               radial-gradient(circle at 50% 50%, transparent 50%, rgba(218, 165, 32, 0.1) 51%, transparent 52%)
             `,
             backgroundSize: '100px 100px',
             backgroundPosition: 'center center'
           }}
      />

      {/* Content */}
      <div className="container py-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Dhwanify AI
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