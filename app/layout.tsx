import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trenton Findley Jr. | Portfolio",
  description: "Computer science portfolio featuring software, product, and creative technology projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
