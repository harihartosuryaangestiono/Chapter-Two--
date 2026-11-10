"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/data/timeline";

export function RelationshipTimeline() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h3 className="text-center font-display text-4xl text-[#80576A] sm:text-5xl">Two years of us.</h3>

        <div className="relative mt-12 space-y-12 before:absolute before:left-5 before:top-0 before:h-full before:w-px before:bg-[linear-gradient(180deg,rgba(216,153,165,0.2),rgba(216,153,165,0.85),rgba(216,153,165,0.2))] md:before:left-1/2 md:before:-translate-x-1/2">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="relative ml-12 md:ml-0"
            >
              <div className={`w-full py-3 pl-2 md:max-w-[45%] ${index % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#d989a5]">Chapter {String(event.id).padStart(2, "0")}</div>
                <h4 className="font-display text-3xl text-[#80576A]">{event.title}</h4>
                <p className="mt-2 text-base leading-7 text-[#80576A]/70">{event.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
