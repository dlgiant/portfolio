import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full-Stack Engineer | nunes.work",
  description: "Experienced full-stack engineer with 9+ years of expertise in Python, JavaScript/TypeScript, React, Ruby on Rails, and AWS. Proven track record in leading cross-functional teams and driving complex projects to successful completion.",
  keywords: "Full-Stack Engineer, React, TypeScript, Python, Ruby on Rails, AWS, Cypress, Software Development",
  authors: [{ name: "Ricardo Nunes" }],
  openGraph: {
    title: "Full-Stack Engineer | nunes.work",
    description: "Experienced full-stack engineer with 9+ years of expertise in modern web technologies",
    url: "https://nunes.work",
    siteName: "nunes.work",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
