import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    default: 'g0xxip',
    template: '%s | g0xxip'
  },
  description: 'Official website of g0xxip - Exploring the boundaries of sound',
  keywords: ['g0xxip', 'music', 'artist', 'producer', 'soundcloud'],
  icons: {
    icon: [
      {
        url: '/favicon/favicon.webp',
        type: 'image/webp',
        sizes: '32x32'
      },
      {
        url: '/favicon/favicon.webp',
        type: 'image/webp',
        sizes: '16x16'
      }
    ],
    apple: {
      url: '/favicon/favicon.webp',
      type: 'image/webp',
      sizes: '180x180'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" type="image/webp" sizes="32x32" href="/favicon/favicon.webp" />
        <link rel="icon" type="image/webp" sizes="16x16" href="/favicon/favicon.webp" />
        <link rel="apple-touch-icon" type="image/webp" sizes="180x180" href="/favicon/favicon.webp" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-black font-sans antialiased",
          geist.variable
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
