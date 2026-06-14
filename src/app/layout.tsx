// noinspection SpellCheckingInspection

import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({subsets: ["latin"],});

export const metadata: Metadata = {
  title: "Shashwat's Space Odyssey",
  description: "Interactive Portfolio",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={orbitron.className}>
      {children}
      </body>
      </html>
  );
}