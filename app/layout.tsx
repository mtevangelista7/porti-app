import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matheus-evangelista.com"),
  title: "Matheus Evangelista — Backend Developer",
  description:
    "Desenvolvedor .NET Pleno com 3+ anos em previdência privada, setor público e modernização de sistemas legados. Foco em integrações, APIs RESTful e SQL.",
  keywords:
    ".NET developer, backend developer, C#, ASP.NET Core, Blazor, Azure, SQL Server, previdência privada, TCESP, São Paulo, desenvolvedor backend, integrations, APIs RESTful",
  authors: [{ name: "Matheus Evangelista" }],
  creator: "Matheus Evangelista",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: "/",
    siteName: "Matheus Evangelista — Backend Developer",
    title: "Matheus Evangelista — Backend Developer",
    description:
      "Desenvolvedor .NET Pleno · Previdência · Setor Público · APIs · São Paulo, Brasil.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Evangelista — Backend Developer",
    description:
      ".NET backend developer. 3+ years. Pension funds, public sector, integrations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#08080c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
