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
  title: {
    default: "Optimist Farm - Interactive Digital Library",
    template: "%s | Optimist Farm"
  },
  description: "A magical digital library featuring interactive children's books, stories, and educational content. Perfect for family reading time on mobile, tablet, and desktop devices.",
  keywords: [
    "children's books",
    "digital library",
    "interactive stories",
    "mobile reading",
    "educational content",
    "family reading",
    "kids books",
    "bedtime stories",
    "learning",
    "literacy"
  ],
  authors: [{ name: "Optimist Farm", url: "https://www.optimistfarm.com" }],
  creator: "Optimist Farm",
  publisher: "Optimist Farm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://www.optimistfarm.com'),
  alternates: {
    canonical: 'https://www.optimistfarm.com',
  },
  openGraph: {
    title: "Optimist Farm - Interactive Digital Library",
    description: "A magical digital library where stories come to life. Interactive children's books and educational content for families.",
    url: "https://www.optimistfarm.com",
    siteName: "Optimist Farm",
    images: [
      {
        url: "/OptiFarm-logoTest.png",
        width: 1200,
        height: 630,
        alt: "Optimist Farm - Interactive Digital Library",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimist Farm - Interactive Digital Library",
    description: "A magical digital library where stories come to life. Interactive children's books for families.",
    images: ["/OptiFarm-logoTest.png"],
    creator: "@optimistfarm",
    site: "@optimistfarm",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#10b981" },
    { media: "(prefers-color-scheme: dark)", color: "#065f46" }
  ],
  colorScheme: "light",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/OptiFarm-logoTest.png", sizes: "192x192", type: "image/png" },
      { url: "/OptiFarm-logoTest.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/OptiFarm-logoTest.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Optimist Farm",
    startupImage: [
      {
        url: "/OptiFarm-logoTest.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  formatDetection: {
    telephone: false,
  },
  category: "education",
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
