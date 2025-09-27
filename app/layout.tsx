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
  title: "Optimist Farm - Interactive Digital Library",
  description: "A magical digital library featuring interactive children's books, adult content, and merchandise. Perfect for family reading time on mobile, tablet and desktop.",
  keywords: "children's books, digital library, interactive stories, mobile reading, educational content",
  authors: [{ name: "Optimist Farm" }],
  creator: "Optimist Farm",
  publisher: "Optimist Farm",
  metadataBase: new URL('https://www.optimistfarm.com'),
  openGraph: {
    title: "Optimist Farm - Interactive Digital Library",
    description: "A magical digital library where stories come to life",
    url: "https://www.optimistfarm.com",
    siteName: "Optimist Farm",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimist Farm - Interactive Digital Library",
    description: "A magical digital library where stories come to life",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#10b981",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Optimist Farm",
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
        className={`${bubblegumSans.variable} ${fredoka.variable} ${baloo.variable} font-bubblegum antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
