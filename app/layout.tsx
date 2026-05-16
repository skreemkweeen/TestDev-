import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-init";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Element UX — Creative Technology Studio",
  description:
    "Immersive digital experiences for visionary brands. Cinematic WebGL, 3D interaction, and scroll storytelling.",
  keywords: ["WebGL", "Three.js", "Immersive", "UI/UX", "Creative Studio", "3D"],
  authors: [{ name: "Element UX" }],
  openGraph: {
    title: "Element UX — Creative Technology Studio",
    description: "Where technology meets emotion.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-obsidian text-silver-300 antialiased grain cursor-none overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
