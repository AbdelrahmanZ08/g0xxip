import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
});

export const metadata: Metadata = {
  title: {
    default: 'g0xxip',
    template: '%s | g0xxip'
  },
  description: 'Official website of g0xxip - Exploring the boundaries of sound',
  keywords: ['g0xxip', 'music', 'artist', 'producer', 'soundcloud'],
  icons: {
    icon: '/Images/deepseek this.png',
    shortcut: '/Images/deepseek this.png',
    apple: '/Images/deepseek this.png',
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceMono.variable} bg-white text-black`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
