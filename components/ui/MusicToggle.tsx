"use client";

import { Music2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/audio/Lany.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleRequestedPlay = () => {
      void audio.play().catch((error: unknown) => {
        console.error("Could not play the invitation music.", error);
      });
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    window.addEventListener("invitation:play-music", handleRequestedPlay);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      window.removeEventListener("invitation:play-music", handleRequestedPlay);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      console.error("Could not play the invitation music.", error);
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Pause music" : "Play music"}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#f0d2de] bg-[rgba(255,255,255,0.8)] text-[#c77795] shadow-[0_18px_35px_rgba(199,119,149,0.14)] backdrop-blur-sm transition hover:-translate-y-0.5"
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <Music2 className="absolute -right-1 -top-1 h-4 w-4 text-[#d989a5]" />
    </button>
  );
}
