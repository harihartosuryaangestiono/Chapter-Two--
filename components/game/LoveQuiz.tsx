"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { loveQuizQuestions } from "@/data/quiz";
import { Button } from "@/components/ui/Button";
import { anniversaryConfig } from "@/data/anniversary";

export function LoveQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => loveQuizQuestions.map(() => null),
  );
  const [showFeedback, setShowFeedback] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = loveQuizQuestions[currentIndex];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;

    setSelected(index);
    setShowFeedback(true);
    setAnswers((previous) => {
      const next = [...previous];
      next[currentIndex] = index;
      return next;
    });

    if (currentQuestion.options[index]?.isCorrect) {
      setScore((prev) => prev + 1);
    }

    window.setTimeout(() => {
      const isLast = currentIndex === loveQuizQuestions.length - 1;
      if (isLast) {
        setIsComplete(true);
      } else {
        setCurrentIndex((prev) => prev + 1);
      }
      setSelected(null);
      setShowFeedback(false);
    }, 1100);
  };

  const handleReplay = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setAnswers(loveQuizQuestions.map(() => null));
    setShowFeedback(false);
    setIsComplete(false);
  };

  const progress = ((currentIndex + (isComplete ? 1 : 0)) / loveQuizQuestions.length) * 100;
  const resultsMessage = [
    "Hasil kuis anniversary ♡",
    `Skor: ${score}/${loveQuizQuestions.length}`,
    "",
    ...loveQuizQuestions.map((question, index) => {
      const answerIndex = answers[index];
      const answer =
        answerIndex === null || answerIndex === undefined
          ? "Belum dijawab"
          : question.options[answerIndex]?.label ?? "Jawaban tidak tersedia";
      return `${index + 1}. ${question.question}\n   Jawaban: ${answer}`;
    }),
  ].join("\n");
  const resultsWhatsAppUrl = `https://wa.me/${anniversaryConfig.quizResultsWhatsApp}?text=${encodeURIComponent(resultsMessage)}`;

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c77795]">How well do you know us?</p>
          <h3 className="mt-3 font-display text-4xl text-[#80576A] sm:text-5xl">How well do you know us?</h3>
          <p className="mt-3 text-base text-[#80576A]/70">
            A few questions, just for fun. No pressure, pretty girl. (Okay, maybe a little.)
          </p>
        </div>

        {!isComplete ? (
          <div className="mx-auto max-w-3xl py-5 md:py-8">
            <div className="mb-6 flex items-center justify-between text-sm text-[#80576A]/70">
              <span>Question {currentIndex + 1}</span>
              <span>{Math.round(progress)}%</span>
            </div>

            <div className="mb-6 h-1 overflow-hidden bg-[#f7dde6]">
              <motion.div
                className="h-full bg-[linear-gradient(90deg,#d989a5,#c77795)]"
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <h4 className="mb-8 text-center font-display text-3xl leading-tight text-[#80576A] sm:text-[2.2rem]">
                  {currentQuestion.question}
                </h4>

                <div className="grid gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const isCorrect = option.isCorrect;
                    const showCorrect = showFeedback && isCorrect;
                    const showWrong = showFeedback && selected === index && !isCorrect;

                    return (
                      <button
                        type="button"
                        key={option.label}
                        onClick={() => handleAnswer(index)}
                        className={`border-b px-2 py-4 text-left text-base transition ${
                          showCorrect
                            ? "border-[#8ec7a2] text-[#2d7a5a]"
                            : showWrong
                              ? "border-[#f1b1c1] text-[#8d4d60]"
                              : "border-[#d989a5]/25 text-[#80576A] hover:pl-4 hover:border-[#d989a5]/70"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                {showFeedback && (
                  <div className="mt-6 text-center font-script text-3xl text-[#c77795]">
                    {currentQuestion.options[selected ?? 0]?.isCorrect ? "Aww, you know us too well ♥" : "Close, but not quite 😄"}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-12 text-center"
          >
            <div className="mb-4 text-5xl">♡</div>
            <h4 className="font-display text-4xl text-[#80576A]">Final score: {score}/{loveQuizQuestions.length}</h4>
            <p className="mt-3 text-base text-[#80576A]/75">
              {score >= 4
                ? "You definitely know this love story. Cute and impossible to fool."
                : score >= 2
                  ? "Not bad at all. You know us a little too well."
                  : "You still win because you are my favorite person, obviously."}
            </p>
            <p className="mt-5 text-sm text-[#80576A]/70">
              Mau kasih tahu aku jawabanmu? Kirim hasilnya lewat WhatsApp ♡
            </p>
            <div className="mt-4 flex justify-center">
              <Button
                href={resultsWhatsAppUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-center"
              >
                KIRIM JAWABAN KE HARI
              </Button>
            </div>
            <div className="mt-7 flex justify-center">
              <Button onClick={handleReplay}>PLAY AGAIN</Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
