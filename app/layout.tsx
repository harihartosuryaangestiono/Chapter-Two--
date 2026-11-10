import type { Metadata } from "next";
import { Caveat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Two Years, Still You.",
  description: "A heartfelt 2nd anniversary invitation website with playful details and a romantic scrapbook feel.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[#80576A]">{children}</body>
    </html>
  );
}
