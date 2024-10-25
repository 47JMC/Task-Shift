import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Fredoka } from "next/font/google";

const fredokaFont = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskShift",
  description: "A todo-list manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredokaFont} antialiased`}>{children}</body>
    </html>
  );
}
