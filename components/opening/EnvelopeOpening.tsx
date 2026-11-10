"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { anniversaryConfig } from "@/data/anniversary";

export function EnvelopeOpening() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden px-5 py-12">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="floating-heart left-[12%] top-[16%]">♡</div>
        <div className="floating-heart left-[20%] top-[40%] delay-[0.8s]">✦</div>
        <div className="floating-heart right-[18%] top-[20%] delay-[1.2s]">♡</div>
        <div className="floating-heart right-[14%] top-[60%] delay-[1.8s]">✿</div>
        <div className="floating-heart left-[46%] bottom-[18%] delay-[2.2s]">✧</div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex w-full max-w-[760px] flex-col items-center text-center"
      >
        <p className="mb-3 font-script text-2xl text-[#d989a5]">{anniversaryConfig.openingLine}</p>
        <h1 className="mb-4 max-w-sm text-balance font-display text-5xl leading-[0.95] text-[#80576A] sm:text-6xl">
          {anniversaryConfig.openingTitle}
        </h1>
        <p className="max-w-md text-base leading-7 text-[#80576A]/70">
          {anniversaryConfig.openingText}
        </p>

        <div className="mt-10 w-full max-w-[540px]">
          {!opened ? (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => setOpened(true)}
              className="group relative block w-full cursor-pointer rounded-[2rem] border border-[#f0d2de] bg-[rgba(255,255,255,0.7)] p-1 shadow-[0_25px_60px_rgba(199,119,149,0.18)] backdrop-blur-sm"
              aria-label="Open the anniversary letter"
            >
              <motion.div
                animate={{ rotateX: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "center bottom" }}
                className="relative overflow-hidden rounded-[1.8rem] border border-[#f0d2de] bg-[#fffaf7] p-6"
              >
                <div className="absolute inset-x-8 top-0 h-3 rounded-b-full bg-[#f7dde6]" />
                <div className="absolute inset-x-6 top-3 h-1 rounded-full bg-[#f6dce5] opacity-80" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(247,221,230,0.65),_rgba(255,255,255,0)_52%)]" />
                <div className="relative pt-6">
                  <div className="mb-4 flex items-center justify-center gap-2 text-[#d989a5]">
                    <Mail size={18} />
                    <Sparkles size={14} />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">
                    Letter from my heart
                  </p>
                  <div className="mx-auto h-28 w-full max-w-[300px] rounded-[1.2rem] border-2 border-dashed border-[#d989a5]/60 bg-[#fff9fb]" />
                  <p className="mt-5 text-center font-script text-3xl text-[#80576A]">
                    {anniversaryConfig.envelopeLabel}
                  </p>
                </div>
              </motion.div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-[2rem] border border-[#f7dde6] bg-white/85 p-4 text-left shadow-[0_22px_60px_rgba(199,119,149,0.14)] md:p-6"
            >
              <div className="rounded-[1.6rem] border border-[#f7dde6] bg-[linear-gradient(180deg,#fffaf7_0%,#fff_100%)] p-5 md:p-6">
                <p className="font-script text-4xl text-[#c77795]">for you</p>
                <p className="mt-6 text-base leading-8 text-[#80576A] md:text-lg">
                  A little letter, a lot of love. I saved a tiny surprise for the person who makes the little things feel big.
                </p>
                <p className="mt-5 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#d989a5]">
                  {anniversaryConfig.eventDateLabel}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
