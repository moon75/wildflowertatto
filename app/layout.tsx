import type { Metadata } from "next";
import { Catamaran, Cormorant } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { LocaleProvider } from "@/lib/i18n";

const catamaran = Catamaran({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-catamaran",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wildflower Tattoo — Lydia Szubert",
  description: "Bespoke colour realism tattoos by Lydia Szubert",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${catamaran.variable} ${cormorant.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-bone text-ink">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LocaleProvider>
      </body>
    </html>
  );
}
