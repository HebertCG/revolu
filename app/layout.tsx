import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/animated/scroll-progress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klassia.pe"),
  title: {
    default: "Klassia — El sistema operativo para las academias del futuro",
    template: "%s · Klassia",
  },
  description:
    "Gestiona alumnos, evita fraudes con IA y aumenta tus matrículas con la plataforma educativa más avanzada del mercado. Proctoring con IA, test vocacional ML y 12 módulos integrados.",
  keywords: [
    "plataforma educativa",
    "intranet academia",
    "proctoring IA",
    "test vocacional ML",
    "EdTech LATAM",
    "Klassia",
    "academia Perú",
    "academia Colombia",
    "academia México",
  ],
  authors: [{ name: "Klassia" }],
  creator: "Klassia",
  publisher: "Klassia",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://klassia.pe",
    siteName: "Klassia",
    title: "Klassia — El sistema operativo para las academias del futuro",
    description:
      "Doce módulos integrados, una sola base de datos. Proctoring con IA, vocacional ML y exámenes con KaTeX.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Klassia — Plataforma educativa con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klassia — El sistema operativo para las academias del futuro",
    description:
      "Proctoring con IA, vocacional ML y 12 módulos integrados. Migración gratis.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Klassia",
      url: "https://klassia.pe",
      logo: "https://klassia.pe/favicon.svg",
      description:
        "Plataforma educativa con IA para academias, colegios e institutos en LATAM.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
        addressRegion: "Lima",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "Klassia",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "PEN",
        lowPrice: "199",
        highPrice: "899",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain min-h-screen bg-paper text-ink antialiased">
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
