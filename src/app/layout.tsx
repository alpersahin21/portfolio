import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Alper Sahin',
    default: 'Alper Sahin | Computer Engineering & Economics Student',
  },
  description: "Personal portfolio of Alper Sahin, showcasing projects and skills in software development",
  keywords: ["Alper Sahin", "Portfolio", "Computer Engineering", "Economics", "Software Development", "React", "Next.js", "Spring Boot"],
  authors: [{ name: "Alper Sahin" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#FBFCFC] text-black`}
      >
        <Header />
        <main className="flex-grow pt-16 md:pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
