"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Volume2 } from "lucide-react";
import { useMemo, useRef, useState } from "react";

export function BowlingGame() {
  const [throws, setThrows] = useState<number[]>([]);
  const [rolling, setRolling] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalScore = useMemo(
    () => throws.reduce((sum, value) => sum + value, 0),
    [throws],
  );

  const handleRoll = () => {
    if (rolling) return;

    setRolling(true);
    const nextScore = Math.floor(Math.random() * 10) + 1;

    window.setTimeout(() => {
      setThrows((prev) => [...prev, nextScore]);
      setRolling(false);
    }, 500);
  };

  const startSoundtrack = () => {
    window.dispatchEvent(new Event("invitation:play-music"));
    void videoRef.current?.play().catch((error: unknown) => {
      console.error("Could not start the timelapse video.", error);
    });
  };

  const resultText =
    totalScore >= 10 ? "Strike or not, you're still my favorite win. ♡" : "A playful little throw, a very sweet memory already.";

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">Interactive mini game</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">Our First Bowling Date 🎳</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="p-3 md:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d989a5]">Lane score</div>
              <div className="rounded-full bg-[#f7dde6] px-3 py-2 text-sm font-semibold text-[#80576A]">
                {totalScore} pts
              </div>
            </div>

            <div className="relative mb-6 flex h-48 items-end justify-center overflow-hidden border-b-2 border-dashed border-[#d989a5]/50 bg-[radial-gradient(ellipse_at_bottom,_rgba(247,221,230,0.55),_transparent_68%)]">
              {[...Array(10)].map((_, index) => (
                <div
                  key={index}
                  className="absolute bottom-8 h-5 w-5 rounded-full border border-[#c77795]/60 bg-[#fff]"
                  style={{
                    left: `${18 + (index % 5) * 16}%`,
                    bottom: `${18 + Math.floor(index / 5) * 18}px`,
                  }}
                />
              ))}

              <motion.div
                animate={rolling ? { x: [0, 120, 220], y: [0, -30, -70], rotate: [0, 8, 12] } : { x: 0, y: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-10 top-8 h-10 w-10 rounded-full bg-[linear-gradient(135deg,#d989a5,#c77795)] shadow-[0_12px_25px_rgba(199,119,149,0.25)]"
              />
            </div>

            <button
              type="button"
              onClick={handleRoll}
              disabled={rolling}
              className="inline-flex items-center gap-2 rounded-full border border-[#d989a5] bg-[#f7dde6] px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#80576A] disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Sparkles size={16} />
              {rolling ? "Rolling..." : "Throw the ball"}
            </button>
          </div>

          <div className="flex flex-col justify-between border-l border-[#d989a5]/30 px-5 py-3 md:px-8">
            <div>
              <div className="mb-2 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[#d989a5]">
                Recent throws
              </div>
              <div className="flex flex-wrap gap-2">
                {throws.length === 0 ? (
                  <span className="text-sm text-[#80576A]/60">No throw yet. Your first perfect shot is coming.</span>
                ) : (
                  throws.map((value, index) => (
                    <span key={`${value}-${index}`} className="border-b border-[#d989a5]/40 px-2 py-1 font-display text-2xl text-[#80576A]">
                      {value}
                    </span>
                  ))
                )}
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-[#80576A]/75">{resultText}</p>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c77795]">A little keepsake</p>
            <h4 className="mt-3 font-display text-3xl text-[#80576A] sm:text-4xl">Our timelapse since we got together</h4>
            <p className="mt-3 text-sm text-[#80576A]/65">A little look back at all the moments we have shared.</p>
          </div>

          <div className="relative mx-auto w-full max-w-4xl">
            <div className="absolute -inset-3 rounded-[2rem] bg-[linear-gradient(135deg,rgba(247,221,230,0.75),rgba(232,224,245,0.55),rgba(248,233,184,0.42))] blur-xl" />
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-[#3e3439] p-2 shadow-[0_28px_80px_rgba(128,87,106,0.2)] sm:rounded-[1.8rem] sm:p-3">
              <div className="pointer-events-none absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full bg-[#fff9f5]/85 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#80576A] shadow-sm backdrop-blur">
                <Heart size={12} className="fill-[#d989a5] text-[#d989a5]" />
                Hari &amp; Dinda
              </div>
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-[1rem] bg-[#2f292c] object-contain sm:rounded-[1.25rem]"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
                aria-label="Timelapse of our moments together"
              >
                <source src="/videos/our-timelapse.mp4" type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center gap-3 text-center">
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={startSoundtrack}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#d989a5]/50 bg-white/70 px-6 py-3 text-sm font-semibold text-[#80576A] shadow-[0_12px_28px_rgba(199,119,149,0.12)] transition hover:bg-white"
            >
              <Volume2 size={17} />
              Play our video with music
              <Heart size={14} className="text-[#d989a5]" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
