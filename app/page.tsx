import { LoveQuiz } from "@/components/game/LoveQuiz";
import { EnvelopeOpening } from "@/components/opening/EnvelopeOpening";
import { InvitationCard } from "@/components/invitation/InvitationCard";
import { MemoryGallery } from "@/components/memories/MemoryGallery";
import { BowlingGame } from "@/components/story/BowlingGame";
import { TripAndRunningChoices } from "@/components/story/TripAndRunningChoices";
import { MusicToggle } from "@/components/ui/MusicToggle";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[var(--background)] text-[#80576A]">
      <div className="paper-texture absolute inset-0 opacity-80" />

      <div className="relative z-10">
        <EnvelopeOpening />
        <ScrollReveal><BowlingGame /></ScrollReveal>
        <ScrollReveal delay={0.05}><TripAndRunningChoices /></ScrollReveal>
        <ScrollReveal delay={0.05}><LoveQuiz /></ScrollReveal>
        <ScrollReveal><MemoryGallery /></ScrollReveal>
        <ScrollReveal><InvitationCard /></ScrollReveal>

        <footer className="px-5 pb-12 pt-8 md:px-8">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-3 text-center">
            <p className="font-script text-3xl text-[#c77795]">made with love, just for you.</p>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#80576A]/70">14 · 11 · 2026</p>
            <div className="flex gap-4 text-[#d989a5]">
              <span>♡</span>
              <span>✦</span>
              <span>♡</span>
            </div>
          </div>
        </footer>
      </div>

      <MusicToggle />
    </main>
  );
}
