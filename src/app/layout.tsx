import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Italiana } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import JsonLd from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "NO NAME by Casa Ede — Restaurant Premium",
    template: "%s — NO NAME by Casa Ede",
  },
  description:
    "NO NAME by Casa Ede — meniu interactiv, evenimente speciale și rezervări în București.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      dir="ltr"
      suppressHydrationWarning
      className={`${cormorant.variable} ${dmSans.variable} ${italiana.variable} h-full scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col antialiased">
        <JsonLd />
        <AppProviders>
          <SiteHeader />
          <main className="flex-1 pb-24">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
