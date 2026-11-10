export type TimelineEvent = {
  id: number;
  title: string;
  subtitle: string;
  emoji: string;
};

export const timelineEvents: TimelineEvent[] = [
  { id: 1, title: "The beginning", subtitle: "A little hello turned into a favorite person.", emoji: "💌" },
  { id: 2, title: "First date", subtitle: "The first time our world felt a little brighter.", emoji: "🌷" },
  { id: 3, title: "First trip together", subtitle: "New memories, bigger laughter, better stories.", emoji: "✈️" },
  { id: 4, title: "Favorite memories", subtitle: "All the tiny moments we keep replaying in our heads.", emoji: "✨" },
  { id: 5, title: "Today", subtitle: "Two years of us, and still so much to celebrate.", emoji: "♡" },
  { id: 6, title: "Many more memories to come", subtitle: "Forever is looking pretty lovely so far.", emoji: "🌙" },
];
