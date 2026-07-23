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
  metadataBase: new URL("https://shaikhinfra.in"),

  title: {
    default: "Shaikh Infrastructure & Developers",
    template: "%s | Shaikh Infrastructure & Developers",
  },

  description:
    "Shaikh Infrastructure & Developers specializes in civil engineering, architecture, structural design, BIM, and infrastructure development.",

  keywords: [
    "Shaikh Infrastructure",
    "Shaikh Infrastructure & Developers",
    "Civil Engineering",
    "Civil Engineer",
    "Architecture",
    "Structural Design",
    "Construction",
    "Infrastructure",
    "BIM",
    "Quantity Surveying",
    "Pune",
    "Maharashtra",
  ],

  authors: [
    {
      name: "Sohel Shaikh",
    },
  ],

  creator: "Sohel Shaikh",

  openGraph: {
    title: "Shaikh Infrastructure & Developers",
    description:
      "Civil Engineering • Architecture • Structural Design • Infrastructure Development",
    url: "https://shaikhinfra.in",
    siteName: "Shaikh Infrastructure & Developers",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaikh Infrastructure & Developers",
    description:
      "Civil Engineering • Architecture • Structural Design • Infrastructure Development",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}