import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justen's Homepage",
  description: "Personal website showcasing my work and interests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col items-center min-h-screen bg-gray-500`}>
        <main className="flex flex-col items-center text-center">
          {children}
        </main>
      </body>
    </html>
  );
}
