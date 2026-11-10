"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { memoryMoments } from "@/data/story";

export function MemoryMoments() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedMemory = memoryMoments.find((memory) => memory.id === selectedId) ?? null;

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">More memories</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">A little adventure, a lot of love</h3>
        </div>

        <div className="divide-y divide-[#d989a5]/25">
          {memoryMoments.map((memory) => (
            <button
              key={memory.id}
              type="button"
              onClick={() => setSelectedId(memory.id)}
              className="group grid w-full items-center gap-6 py-8 text-left transition md:grid-cols-[0.8fr_1.2fr] md:gap-12"
            >
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_45%_45%,rgba(247,221,230,0.72),transparent_65%)] text-6xl transition-transform group-hover:scale-[1.03]">
                <span aria-hidden="true">{memory.emoji}</span>
                <span className="absolute right-8 top-8 text-2xl text-[#d989a5]/70">✦</span>
                <span className="absolute bottom-8 left-8 text-xl text-[#e8e0f5]">♡</span>
              </div>
              <div className="py-2">
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d989a5]">
                  {memory.tag}
                </div>
                <h4 className="font-display text-3xl text-[#80576A] md:text-4xl">{memory.title}</h4>
                <p className="mt-3 max-w-lg text-base leading-7 text-[#80576A]/70">{memory.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(80,55,65,0.6)] p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl rounded-[2rem] bg-[#fffaf7] p-5 shadow-[0_24px_55px_rgba(80,55,65,0.16)]"
            >
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#f3dbe4] bg-white text-[#80576A]"
                aria-label="Close memory detail"
              >
                <X size={18} />
              </button>
              <div className="rounded-[1.5rem] border border-[#f3dbe4] bg-[radial-gradient(circle_at_top,_rgba(247,221,230,0.75),_rgba(255,255,255,0)_60%)] p-5 text-center">
                <div className="mb-4 text-5xl">{selectedMemory.emoji}</div>
                <h4 className="font-display text-4xl text-[#80576A]">{selectedMemory.title}</h4>
                <p className="mt-4 text-base leading-7 text-[#80576A]/75">{selectedMemory.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
