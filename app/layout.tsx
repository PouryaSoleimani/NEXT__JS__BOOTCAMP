import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import "@/styles/header.css";
import "@/styles/hero-2.css";
import "@/styles/services.css";
import "@/styles/quote.css";
import "@/styles/grid-test.css";
import "@/styles/cta.css";

import "@/styles/animations.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "NEXT_JS_BOOTCAMP",
   description: "TRAINING NEXT_JS",
};

export default function RootLayout({
   children,
}: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-300`}>
            {children}
         </body>
      </html>
   );
}
