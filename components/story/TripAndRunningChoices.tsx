"use client";

import { useState } from "react";
import { roadTripOptions, runningGoals } from "@/data/story";

export function TripAndRunningChoices() {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">Pick our next trip</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A]">Where should our next adventure take us?</h3>

          <div className="mt-6 grid gap-3">
            {roadTripOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedTrip(option)}
                className={`border-b px-1 py-3 text-left text-base transition ${
                  selectedTrip === option
                      ? "border-[#d989a5] text-[#c77795]"
                      : "border-[#d989a5]/20 text-[#80576A] hover:pl-3"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedTrip && (
            <div className="mt-5 border-l-2 border-[#d989a5] pl-4 text-[#80576A]">
              Noted! As long as it&apos;s with you, I&apos;m in. ♡
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">Running goal</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A]">What&apos;s our next running goal?</h3>

          <div className="mt-6 grid gap-3">
            {runningGoals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => setSelectedGoal(goal)}
                className={`border-b px-1 py-3 text-left text-base transition ${
                  selectedGoal === goal
                      ? "border-[#d989a5] text-[#c77795]"
                      : "border-[#d989a5]/20 text-[#80576A] hover:pl-3"
                }`}
              >
                {goal}
              </button>
            ))}
          </div>

          {selectedGoal && (
            <div className="mt-5 border-l-2 border-[#d989a5] pl-4 text-[#80576A]">
              Whatever the distance, I&apos;m happy to run alongside you. ♡
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
