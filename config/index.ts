import type { Metadata } from "next";

export const links = {
  sourceCode: "https://github.com/YashByteKraft/",
  ownerName: "Yash Parihar",
  ownerEmail: "yash_parihar@outlook.com",
} as const;

export const siteConfig: Metadata = {
  title: `${links.ownerName} | Associate Product Manager & Digital Builder`,
  description: "Portfolio of Yash Sanjay Parihar — Associate Product Manager & Digital Builder. Explore case studies, product strategy, UX research, and agile delivery experience. Connect for collaboration and opportunities.",
  icons: {
    icon: "/UPM-logo.jpg",
    shortcut: "/UPM-logo.jpg",
    apple: "/UPM-logo.jpg",
  },
  keywords: [
    "product manager",
    "portfolio",
    "health-tech",
    "IoT",
    "agile",
    "product development",
    "user research",
    "product strategy",
    "stakeholder management",
    "data analysis",
    "scrum",
    "product roadmap",
    "user experience",
    "product management",
    "associate product manager",
    "avicare",
    "buildu",
    "zerodha",
    "case study",
    "product studio",
    "modern-portfolio",
    "3d-portfolio",
    "animated-portfolio",
    "nextjs-portfolio",
    "react-portfolio",
    "framer-motion",
    "three.js",
    "typescript",
    "tailwindcss",
    "ui/ux",
  ] as Array<string>,
  authors: {
    name: links.ownerName,
    url: "https://github.com/YashByteKraft",
  },
  openGraph: {
    title: `${links.ownerName} | Associate Product Manager & Digital Builder`,
    description: "Portfolio of Yash Sanjay Parihar — Associate Product Manager & Digital Builder. Explore case studies, product strategy, UX research, and agile delivery experience.",
    url: "https://yashparihar.netlify.app/",
    siteName: "Yash Parihar Portfolio",
    images: [
      {
        url: "/UPM-logo.jpg",
        width: 800,
        height: 600,
        alt: "Yash Parihar Portfolio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${links.ownerName} | Associate Product Manager & Digital Builder`,
    description: "Portfolio of Yash Sanjay Parihar — Associate Product Manager & Digital Builder. Explore case studies, product strategy, UX research, and agile delivery experience.",
    site: "@UncnventionalPM",
    creator: "@UncnventionalPM",
    images: [
      "/UPM-logo.jpg"
    ]
  },
  metadataBase: new URL("https://yashparihar.netlify.app/"),
  alternates: {
    canonical: "https://yashparihar.netlify.app/",
  },
} as const;
