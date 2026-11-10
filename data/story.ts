export type StoryChapter = {
  id: number;
  chapter: string;
  title: string;
  narrative: string[];
  accent: string;
  icon: string;
  image: string;
};

export const storyChapters: StoryChapter[] = [
  {
    id: 1,
    chapter: "Chapter 01",
    title: "Where It All Started",
    narrative: [
      "We started from the same circle.",
      "Just two people, sharing stories, laughing at little things, and slowly getting to know each other.",
      "There was no big plan. Just a beginning we didn't know would become something special.",
    ],
    accent: "#F6DCE5",
    icon: "♡",
    image: "/images/memories/memory-1.svg",
  },
  {
    id: 2,
    chapter: "Chapter 02",
    title: "A Little Adventure in the Mountains",
    narrative: [
      "Then came our little mountain adventure.",
      "Somewhere along the way, between the conversations, the journey, and the little moments...",
      "Maybe there was already something there.",
      "Not everything had to be figured out just yet.",
    ],
    accent: "#E8E0F5",
    icon: "⛰️",
    image: "/images/memories/memory-2.svg",
  },
  {
    id: 3,
    chapter: "Chapter 03",
    title: "Our First Official Little Date 🎳",
    narrative: [
      "From all those little conversations...",
      "To finally having our first date.",
      "And guess what? We went bowling!",
      "PVJ Bandung became part of our little story.",
    ],
    accent: "#F8E9B8",
    icon: "🎳",
    image: "/images/memories/memory-3.svg",
  },
  {
    id: 4,
    chapter: "Chapter 04",
    title: "More Places, More Memories",
    narrative: [
      "We went on a little adventure at Taman Safari.",
      "We also made another memory together at JXB.",
      "More places, more stories, more reasons to keep choosing each other.",
    ],
    accent: "#F7DDE6",
    icon: "✦",
    image: "/images/memories/memory-4.svg",
  },
  {
    id: 5,
    chapter: "Chapter 05",
    title: "A Trip to Surabaya, and Something More",
    narrative: [
      "Then came 2025.",
      "You came all the way to Surabaya and joined a special family occasion.",
      "It meant a little more than just another trip.",
      "Thank you for being there and becoming part of my world.",
    ],
    accent: "#D989A5",
    icon: "✈️",
    image: "/images/memories/memory-5.svg",
  },
  {
    id: 6,
    chapter: "Chapter 06",
    title: "Just Us, the Road, and Endless Stories",
    narrative: [
      "From Jakarta to Surabaya...",
      "To another little road trip to Yogyakarta.",
      "Different roads, different places, countless little moments.",
      "Turns out, the journey is even better when I'm with you.",
    ],
    accent: "#E8E0F5",
    icon: "🚗",
    image: "/images/memories/memory-6.svg",
  },
  {
    id: 7,
    chapter: "Chapter 07",
    title: "Same Pace, Same Direction",
    narrative: [
      "And lately, we've found another little thing to share.",
      "Running.",
      "Maybe we're still finding our rhythm, one step at a time.",
      "But there's something special about having another journey to enjoy together.",
    ],
    accent: "#F8E9B8",
    icon: "🏃",
    image: "/images/memories/memory-2.svg",
  },
];

export const memoryMoments = [
  {
    id: 1,
    title: "Road trip to Surabaya",
    caption: "Our road trip together to Surabaya.",
    tag: "Road trip",
    emoji: "🚗",
  },
  {
    id: 2,
    title: "A little trip to the waterfall",
    caption: "A trip together to a curug.",
    tag: "Chasing waterfalls",
    emoji: "🏞️",
  },
];

export const roadTripOptions = [
  "Mountains",
  "Beach",
  "City escape",
  "Somewhere we've never been",
];

export const runningGoals = [
  "Another 5K together",
  "A new running route",
  "Our first 10K together",
  "Just run and have fun!",
];
