import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "./i18n/provider";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PHM Care — Codex · Do texto clínico ao GDH",
  description:
    "O Codex lê a documentação do episódio, propõe os códigos ICD-10-CM/PCS com a passagem clínica que os sustenta, agrupa em GDH e mostra o valor do episódio. O médico codificador valida e decide. Codificação clínica assistida por IA, desenhada para o SNS.",
  metadataBase: new URL("https://phmcare.ai"),
  openGraph: {
    title: "PHM Care — Codex · Do texto clínico ao GDH",
    description:
      "Codificação clínica assistida por IA, desenhada para o SNS. O médico codificador valida e decide.",
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
      lang="pt-PT"
      className={`${newsreader.variable} ${ibmPlexSans.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bone text-ink font-body antialiased">
        <I18nProvider>
          <Nav />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
