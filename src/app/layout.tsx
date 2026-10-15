import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "NOAH® — Independent Web Developer & Website Designer",
  description:
    "I design and develop modern websites and online stores that help businesses stand out, build trust, and create better experiences for their customers. Based in Norway · Working Worldwide.",
  keywords: [
    "Web Developer",
    "Website Designer",
    "Freelance Web Developer",
    "Scandinavian Web Design",
    "E-commerce Development",
    "Next.js Developer",
    "Norway Web Developer",
  ],
  authors: [{ name: "Noah" }],
  creator: "Noah",
  openGraph: {
    title: "NOAH® — Independent Web Developer & Website Designer",
    description:
      "Modern websites and digital experiences built around your business. Real projects, thoughtful execution.",
    type: "website",
    locale: "en_US",
    siteName: "Noah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOAH® — Independent Web Developer & Website Designer",
    description: "Real projects. Thoughtful execution.",
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
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F7F2] text-[#171717] font-body selection:bg-[#C7F36B] selection:text-[#171717]">
        {children}
      </body>
    </html>
  );
}
