import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Wand2 } from "lucide-react";

interface PromptInputProps {
  onGenerate?: (prompt: string) => void;
}

const PromptInput = ({ onGenerate = () => {} }: PromptInputProps) => {
  const [prompt, setPrompt] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(prompt);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="pr-32 h-14 text-lg bg-white/80 backdrop-blur-sm"
          placeholder="Describe your music idea..."
        />
        <Button
          type="submit"
          className="absolute right-2 top-2 bg-primary hover:bg-primary/90"
        >
          <Wand2 className="mr-2 h-4 w-4" /> Generate
        </Button>
      </div>
    </form>
  );
};

export default PromptInput;