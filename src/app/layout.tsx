import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Node Enterprise Starter - Scalable Express & TypeScript Boilerplate",
  description:
    "A production-ready Node.js boilerplate with Express, TypeScript, MongoDB, Authentication, and Enterprise-grade architecture.",
  keywords: [
    "Node.js",
    "Express",
    "TypeScript",
    "MongoDB",
    "Boilerplate",
    "Enterprise",
    "Authentication",
    "Backend",
    "API",
    "Scalable Architecture",
    "NPM Package",
  ],
  authors: [
    {
      name: "Abu Talha Md Jobayer",
      url: "https://www.linkedin.com/in/abutalhamdjobayer/",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-16x16.png",
  },
  metadataBase: new URL("https://node-enterprise-starter-web.vercel.app/"),
  openGraph: {
    title: "Node Enterprise Starter",
    description:
      "Enterprise-grade Node.js boilerplate with TypeScript, Express, and MongoDB.",
    url: "https://node-enterprise-starter-web.vercel.app/",
    siteName: "Node Enterprise Starter",
    images: [
      {
        url: "https://node-enterprise-starter-web.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Node Enterprise Starter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://node-enterprise-starter-web.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#000000" />
        <meta name="author" content="Abu Talha Md Jobayer" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <link
          rel="canonical"
          href="https://node-enterprise-starter-web.vercel.app"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
