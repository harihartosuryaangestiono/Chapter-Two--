"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import { useState } from "react";
import { anniversaryConfig } from "@/data/anniversary";

export function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="px-5 py-18 md:px-8">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-[#f4dfe9] bg-[rgba(255,255,255,0.72)] p-6 text-center shadow-[0_24px_65px_rgba(216,153,165,0.12)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">One last thing...</p>
        <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">One last thing...</h3>
        <p className="mt-3 text-base text-[#80576A]/70">I saved something for you.</p>

        <div className="relative mt-10 flex min-h-[220px] items-center justify-center">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Heart className="absolute left-[20%] top-[18%] text-[#f6dce5] opacity-60" size={24} />
            <Heart className="absolute right-[18%] top-[28%] text-[#f8e9b8] opacity-60" size={18} />
            <Heart className="absolute left-[35%] bottom-[14%] text-[#e8e0f5] opacity-60" size={20} />
            <Heart className="absolute right-[28%] bottom-[16%] text-[#f6dce5] opacity-60" size={24} />
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setOpened(true)}
            className="relative z-10 flex h-40 w-40 flex-col items-center justify-center rounded-[2rem] border border-[#f0d2de] bg-[linear-gradient(180deg,#fffaf7_0%,#f7dde6_100%)] shadow-[0_20px_46px_rgba(216,153,165,0.17)]"
            aria-label="Open your surprise"
          >
            <Gift className="text-[#c77795]" size={34} />
            <span className="mt-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#80576A]">
              OPEN
            </span>
            <span className="mt-1 font-script text-2xl text-[#80576A]">YOUR SURPRISE ♡</span>
          </motion.button>
        </div>

        <AnimatePresence>
          {opened && (
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.5 }}
              className="mt-8 rounded-[2rem] border border-[#f0d2de] bg-[linear-gradient(180deg,#fffaf7_0%,#fff_100%)] p-6 text-left shadow-[0_20px_35px_rgba(216,153,165,0.14)]"
            >
              <p className="whitespace-pre-line text-base leading-8 text-[#80576A] sm:text-lg">
                {anniversaryConfig.finalLetter}
              </p>
              <div className="mt-6 border-t border-[#f0d2de] pt-4">
                <p className="font-script text-3xl text-[#c77795]">{anniversaryConfig.finalSignature}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
