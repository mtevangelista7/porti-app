import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: "Matheus Evangelista - Backend Developer Portfolio",
  description: "Backend developer with 3+ years of experience focused on security, automation, and scalable web solutions. Specializing in .NET, TypeScript, Python, and cloud technologies.",
  keywords: "backend developer, full-stack developer, .NET, TypeScript, Python, Go, security, web development, cloud solutions, microservices, DevOps, portfolio",
  authors: [{ name: "Matheus Evangelista" }],
  creator: "Matheus Evangelista",
  publisher: "Matheus Evangelista",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Matheus Evangelista - Portfolio",
    title: "Matheus Evangelista - Backend Developer Portfolio",
    description: "Backend developer with 3+ years of experience focused on security, automation, and scalable web solutions.",
    images: [
      {
        url: "/img/matheus.png",
        width: 1200,
        height: 630,
        alt: "Matheus Evangelista - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Evangelista - Backend Developer Portfolio",
    description: "Backend developer with 3+ years of experience focused on security, automation, and scalable web solutions.",
    images: ["/img/matheus.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#A3ABBA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
