"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Mountain, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { storyChapters } from "@/data/story";

export function OurStory() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const answerOptions = [
    "They were just enjoying the conversation.",
    "There was definitely something sweet there.",
    "Maybe both, and that is exactly the charm.",
  ];

  return (
    <section className="px-5 py-18 md:px-8">
      <div className="mx-auto max-w-6xl rounded-[2.75rem] border border-[#f5dfe8] bg-[rgba(255,255,255,0.72)] p-6 shadow-[0_26px_75px_rgba(216,153,165,0.14)] md:p-10">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">Our story</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">
            From One Circle to My Favorite Person ♡
          </h3>
          <p className="mt-4 text-base text-[#80576A]/75">Somehow, our story became my favorite adventure.</p>
        </div>

        <div className="space-y-7">
          {storyChapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative overflow-hidden rounded-[2rem] border border-[#f1d9e3] bg-[#fffaf7] p-5 shadow-[0_18px_36px_rgba(216,153,165,0.08)] md:p-7"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-80" style={{ background: chapter.accent }} />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex items-center gap-3 text-[#c77795]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
                    {chapter.icon}
                  </div>
                  <div>
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#d989a5]">
                      {chapter.chapter}
                    </p>
                    <h4 className="mt-2 font-display text-3xl text-[#80576A]">{chapter.title}</h4>
                  </div>
                </div>
                <div className="text-[#d989a5]">
                  <Sparkles size={22} />
                </div>
              </div>

              <div className="relative mt-6 grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-start">
                <div className="space-y-3 text-base leading-8 text-[#80576A]/75">
                  {chapter.narrative.map((sentence) => (
                    <p key={sentence}>{sentence}</p>
                  ))}
                </div>

                <div className="relative h-64 overflow-hidden rounded-[1.8rem] border border-[#f2dfe8] bg-[#f7dde6] shadow-[0_15px_28px_rgba(216,153,165,0.12)] md:h-[300px]">
                  <Image src={chapter.image} alt={chapter.title} fill className="object-cover" />
                  <div className="absolute inset-x-5 bottom-5 rounded-full bg-[rgba(255,255,255,0.66)] px-3 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#80576A] shadow-sm backdrop-blur-sm">
                    {chapter.chapter}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#f0d5df] bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)] p-5 md:p-8">
          <div className="mb-6 flex items-center gap-3 text-[#c77795]">
            <Mountain size={22} />
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em]">Little question</p>
          </div>
          <h4 className="font-display text-3xl text-[#80576A] md:text-4xl">What do you think was happening back then?</h4>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {answerOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedAnswer(option)}
                className={`rounded-[1.25rem] border px-4 py-4 text-left text-sm text-[#80576A] transition hover:-translate-y-0.5 hover:border-[#d989a5]/70 ${
                  selectedAnswer === option
                    ? "border-[#d989a5] bg-[#fff1f7]"
                    : "border-[#f1d9e3] bg-white/80"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {selectedAnswer && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="mt-6 flex items-center gap-3 rounded-[1.25rem] border border-[#f5dfe8] bg-[#fff8fb] p-4 text-[#80576A]"
              >
                <Heart className="text-[#d989a5]" size={18} />
                <p className="text-base">Maybe our hearts already knew something we hadn&apos;t figured out yet. ♡</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
