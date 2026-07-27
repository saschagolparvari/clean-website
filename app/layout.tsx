import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title:
  "Gebäudereinigung Hagen | Clean Service Gashi – Fenster-, Büro- & Treppenhausreinigung",
   description:
  "Gebäudereinigung in Hagen und Umgebung. Clean Service Gashi bietet professionelle Fensterreinigung, Treppenhausreinigung, Büroreinigung und Gartenpflege für Privat- und Gewerbekunden.",

  openGraph: {
    title:
      "Clean Service Gashi – Gebäudereinigung in Hagen & Umgebung",
    description:
      "Professionelle Gebäudereinigung, Fensterreinigung, Treppenhausreinigung und Gartenreinigung in Hagen und Umgebung.",
    url: "https://deine-domain.de",
    siteName: "Clean Service Gashi",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Clean Service Gashi – Gebäudereinigung in Hagen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Clean Service Gashi – Gebäudereinigung in Hagen & Umgebung",
    description:
      "Professionelle Gebäudereinigung, Fensterreinigung, Treppenhausreinigung und Gartenreinigung in Hagen und Umgebung.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
