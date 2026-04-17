import type { Metadata } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  axes: ["opsz"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const siteUrl = "https://kollaborate.ca";

export const metadata: Metadata = {
  title: "Kollaborate \u00B7 Done-for-you growth for local service businesses",
  description:
    "One team handles everything between your phone ringing and your calendar filling. Voice, reviews, website, content, follow-up. Starting at $750/mo.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Kollaborate \u00B7 Done-for-you growth for local service businesses",
    description:
      "One team handles everything between your phone ringing and your calendar filling. Voice, reviews, website, content, follow-up. Starting at $750/mo.",
    url: siteUrl,
    siteName: "Kollaborate",
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: "Kollaborate: Done-for-you growth for local service businesses",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kollaborate \u00B7 Done-for-you growth for local service businesses",
    description:
      "One team handles everything between your phone ringing and your calendar filling. Voice, reviews, website, content, follow-up. Starting at $750/mo.",
    images: [`${siteUrl}/api/og`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
