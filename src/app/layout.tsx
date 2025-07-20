import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "@/styles/mainStyle.scss";
import Header from "@/components/main page/layout/header/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Black Li Beauty Salon — Перманентний макіяж Київ та Вінниця",
  description:
    "Салон краси Black Li Beauty: Київ, метро Оболонь, вул. Героїв полку Азов 12. Вінниця, вишенька, вул. Грушевського 32. Перманентний макіяж, професійні послуги, ціни, контакти, наші роботи.",
  keywords:
    "перманентний макіяж, салон краси, Київ, метро Оболонь, Героїв полку Азов 12, Вінниця, вишенька, Грушевського 32, ціни, контакти, роботи, beauty salon",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
