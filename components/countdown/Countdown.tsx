"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { anniversaryConfig } from "@/data/anniversary";

function getTimeLeft() {
  const target = new Date(anniversaryConfig.anniversaryDate).getTime();
  const now = Date.now();
  const distance = target - now;

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
    expired: false,
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getTimeLeft());
    updateCountdown();

    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="px-0 py-4">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">The countdown is on!</p>
        <h3 className="font-display text-4xl text-[#80576A] sm:text-5xl">The countdown is on!</h3>
        <p className="mt-3 text-base text-[#80576A]/70">Counting down to more memories with you ♡</p>

        <div className="mt-10 grid grid-cols-2 divide-x divide-y divide-[#d989a5]/25 sm:grid-cols-4 sm:divide-y-0">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((unit) => (
            <motion.div
              key={unit.label}
              layout
              className="px-4 py-6"
            >
              <div className="font-display text-4xl text-[#80576A] sm:text-5xl">{String(unit.value).padStart(2, "0")}</div>
              <div className="mt-3 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-[#80576A]/70">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 font-script text-3xl text-[#c77795]">
          {timeLeft.expired ? "We have already made the memory. Let’s keep making more." : "Still counting our favorite minutes together."}
        </div>
      </div>
    </section>
  );
}
