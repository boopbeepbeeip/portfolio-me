import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const profaFont = localFont({
  src: "../fonts/ProfaTrial-Bold.ttf",
  variable: "--font-profa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salak Studio | Portfolio",
  description: "Independent Game Development Studio & Software Portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${profaFont.variable}`}>
      <body className="antialiased bg-[#08080a] text-white font-sans relative">
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}