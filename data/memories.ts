export type MemoryItem = {
  id: number;
  src: string;
  type: "image" | "video";
  alt: string;
};

const mediaFiles: { file: string; type: MemoryItem["type"] }[] = [
  { file: "WhatsApp Image 2026-11-10 at 10.58.07.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.07 (1).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.08.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.08 (1).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.08 (2).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.08 (3).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.09.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.09 (1).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.09 (2).jpeg", type: "image" },
  { file: "WhatsApp Video 2026-11-10 at 10.58.25.mp4", type: "video" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.27.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.27 (1).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.27 (2).jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.28.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.28 (1).jpeg", type: "image" },
  { file: "WhatsApp Video 2026-11-10 at 10.58.31.mp4", type: "video" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.34.jpeg", type: "image" },
  { file: "WhatsApp Image 2026-11-10 at 10.58.37.jpeg", type: "image" },
];

export const memoryItems: MemoryItem[] = mediaFiles.map(({ file, type }, index) => ({
  id: index + 1,
  src: `/${file}`,
  type,
  alt: type === "video" ? `Memory video ${index + 1}` : `Memory photo ${index + 1}`,
}));
