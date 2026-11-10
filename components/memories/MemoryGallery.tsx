"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { memoryItems } from "@/data/memories";

const rotations = [-7, 6, -5, 8, -4, 7];

export function MemoryGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight") setSelectedIndex((prev) => (prev === null ? 0 : (prev + 1) % memoryItems.length));
      if (event.key === "ArrowLeft") setSelectedIndex((prev) => (prev === null ? memoryItems.length - 1 : (prev - 1 + memoryItems.length) % memoryItems.length));
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedIndex]);

  const selectedMemory = selectedIndex === null ? null : memoryItems[selectedIndex];

  return (
    <section className="px-5 py-18 md:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <h3 className="font-display text-4xl text-[#80576A] sm:text-5xl">Little pieces of us</h3>
        <p className="mx-auto mt-3 max-w-2xl text-base text-[#80576A]/70">
          Every little moment with you becomes a memory worth keeping.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {memoryItems.map((memory, index) => (
            <motion.button
              key={memory.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`Open ${memory.type} ${index + 1}`}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
              whileHover={{ y: -7, scale: 1.025, rotate: 0 }}
              className="group relative mx-auto block w-full max-w-[260px] cursor-pointer border-[10px] border-b-[34px] border-white bg-white shadow-[0_20px_40px_rgba(128,87,106,0.2)] transition-shadow hover:shadow-[0_26px_48px_rgba(128,87,106,0.25)]"
              style={{ rotate: rotations[index % rotations.length] }}
            >
              <div className="absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2 rotate-[-3deg] bg-[#f6dce5]/90 shadow-sm" />
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7dde6]">
                {memory.type === "image" ? (
                  <Image
                    src={memory.src}
                    alt=""
                    fill
                    unoptimized
                    loading={index < 6 ? "eager" : "lazy"}
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 260px"
                  />
                ) : (
                  <>
                    <video
                      src={memory.src}
                      className="h-full w-full object-cover"
                      muted
                      playsInline
                      preload="metadata"
                      aria-hidden="true"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-[#80576A]/10">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#c77795] shadow-lg">
                        <Play size={19} fill="currentColor" />
                      </span>
                    </span>
                  </>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(80,55,65,0.65)] p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[#fffaf7] p-4 shadow-[0_24px_60px_rgba(69,45,58,0.24)]"
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#fff] text-[#80576A] shadow-sm"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>

              <div className="relative flex max-h-[75vh] min-h-[50vh] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#30262b]">
                {selectedMemory.type === "image" ? (
                  <Image
                    src={selectedMemory.src}
                    alt={selectedMemory.alt}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="90vw"
                  />
                ) : (
                  <video
                    key={selectedMemory.id}
                    src={selectedMemory.src}
                    className="max-h-[75vh] w-full object-contain"
                    controls
                    autoPlay
                    playsInline
                    preload="auto"
                    aria-label={selectedMemory.alt}
                  >
                    Your browser does not support video playback.
                  </video>
                )}
              </div>

              <div className="absolute bottom-7 right-7 flex gap-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-full border border-[#f3d9e5] bg-white p-3 text-[#80576A]"
                    onClick={() => setSelectedIndex((selectedIndex ?? 0) === 0 ? memoryItems.length - 1 : (selectedIndex ?? 0) - 1)}
                    aria-label="Previous photo"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-[#f3d9e5] bg-white p-3 text-[#80576A]"
                    onClick={() =>
                      setSelectedIndex(((selectedIndex ?? 0) + 1) % memoryItems.length)
                    }
                    aria-label="Next photo"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
