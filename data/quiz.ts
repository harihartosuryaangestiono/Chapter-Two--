export type QuizQuestion = {
  id: number;
  question: string;
  options: { label: string; isCorrect: boolean }[];
};

export const loveQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is our favorite kind of date?",
    options: [
      { label: "A cozy night in, just the two of us 🧸", isCorrect: true },
      { label: "A fancy dinner and a little dress-up moment 🥂", isCorrect: false },
      { label: "A spontaneous road trip with no plans 🚗", isCorrect: false },
      { label: "A little adventure, somewhere we've never been 🌄", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Who is more likely to say 'I miss you' first?",
    options: [
      { label: "You, obviously", isCorrect: true },
      { label: "Me, with a dramatic monologue", isCorrect: false },
      { label: "Neither, we just send memes", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What is the best part of these two years?",
    options: [
      { label: "Doing life with you", isCorrect: true },
      { label: "The food we eat together", isCorrect: false },
      { label: "The random late-night voice notes", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Who is more clingy?",
    options: [
      { label: "Definitely you", isCorrect: true },
      { label: "Definitely me", isCorrect: false },
      { label: "We are equally attached", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is our favorite thing to do together?",
    options: [
      { label: "Just be together, no matter what", isCorrect: true },
      { label: "Pretend we are not being affectionate", isCorrect: false },
      { label: "Argue over what to watch", isCorrect: false },
    ],
  },
];
