import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trenton Findley Jr. | Software Engineer & Product Builder",
  description:
    "Portfolio of Trenton Findley Jr. featuring BECOMR, full-stack software engineering, AI-enabled applications, product design, cloud deployment, and responsive web development.",
  keywords: [
    "Trenton Findley Jr.",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Supabase",
    "OpenAI API",
    "Product Engineering",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
