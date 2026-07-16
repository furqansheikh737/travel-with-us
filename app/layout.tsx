import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Travel With Us | Travel Co.",
  description: "Creating unforgettable travel experiences, one journey at a time. Specializing in Disney vacations, family trips, and Texas road trips.",
  keywords: ["travel agency", "Disney vacation", "family trips", "Texas road trips", "travel planner"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-brand-cream text-foreground">
        {children}
      </body>
    </html>
  );
}