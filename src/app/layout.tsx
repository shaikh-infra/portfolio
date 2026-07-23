import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shaikh Infrastructure & Developers",
    template: "%s | Shaikh Infrastructure & Developers",
  },

  description:
    "Shaikh Infrastructure & Developers - Civil Engineering, Architecture, Structural Design, BIM and Construction Portfolio.",

  keywords: [
    "Shaikh Infrastructure",
    "Civil Engineer",
    "Architecture",
    "Structural Design",
    "Construction",
    "BIM",
    "Quantity Surveying",
    "Engineering Portfolio",
    "Pune",
    "Maharashtra",
  ],

  authors: [
    {
      name: "Sohel Shaikh",
    },
  ],

  creator: "Sohel Shaikh",

  metadataBase: new URL("https://shaikhinfra.in"),

  openGraph: {
    title: "Shaikh Infrastructure & Developers",
    description:
      "Civil Engineering • Architecture • Structural Design • Construction",
    url: "https://shaikhinfra.in",
    siteName: "Shaikh Infrastructure",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shaikh Infrastructure & Developers",
    description:
      "Civil Engineering • Architecture • Structural Design • Construction",
  },

  robots: {
    index: true,
    follow: true,
  },
};