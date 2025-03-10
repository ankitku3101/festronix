import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  variable:'--font-montserrat',
  weight:['400','600','700'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Festronix 2025 - GIFT Autonomous",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased bg-dark`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
