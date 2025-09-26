import type { Metadata } from "next";
import { Bubblegum_Sans, Fredoka, Baloo_2 } from "next/font/google";
import "./globals.css";

const bubblegumSans = Bubblegum_Sans({
  variable: "--font-bubblegum",
  subsets: ["latin"],
  weight: ["400"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Optimus Farm - Interactive Digital Library",
  description: "A magical digital library featuring interactive children's books, adult content, and merchandise. Perfect for family reading time on iPad and desktop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bubblegumSans.variable} ${fredoka.variable} ${baloo.variable} font-baloo antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
