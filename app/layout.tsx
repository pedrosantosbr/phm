import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: "variable",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praxia — Inteligência clínica em tempo real.",
  description:
    "O sistema operativo de IA para hospitais. A Praxia liga medicação, voz e prontuários numa única camada de inteligência clínica — reduzindo erros, custos administrativos e tempos de espera.",
  metadataBase: new URL("https://praxia.health"),
  openGraph: {
    title: "Praxia — Inteligência clínica em tempo real.",
    description:
      "O sistema operativo de IA para hospitais. MediGuard, CodiCare e MediCall numa única camada.",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${fraunces.variable} ${manrope.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bone text-ink font-body antialiased">{children}</body>
    </html>
  );
}
