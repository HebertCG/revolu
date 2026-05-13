import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/animated/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://klassia.pe"),
  title: {
    default: "Klassia — La plataforma educativa que transforma tu academia",
    template: "%s · Klassia",
  },
  description:
    "Gestión académica, proctoring con IA, test vocacional ML y simulacros UDEP/UPAO ilimitados. Klassia es la intranet que las academias líderes del norte del Perú ya están usando.",
  keywords: [
    "plataforma educativa Perú",
    "intranet academia",
    "preuniversitario Perú",
    "proctoring IA",
    "simulacros UDEP",
    "simulacros UPAO",
    "test vocacional",
    "EdTech Perú",
    "academia Piura",
    "academia Trujillo",
    "academia Chiclayo",
    "Klassia",
  ],
  authors: [{ name: "Klassia" }],
  creator: "Klassia",
  publisher: "Klassia",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://klassia.pe",
    siteName: "Klassia",
    title: "Klassia — La plataforma educativa que transforma tu academia",
    description:
      "Gestión académica completa con IA. Proctoring, simulacros UDEP/UPAO y test vocacional ML en una sola plataforma.",
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
    title: "Klassia — La plataforma educativa que transforma tu academia",
    description:
      "Proctoring, simulacros UDEP/UPAO y test vocacional ML. Todo en una sola plataforma educativa.",
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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#080a14" },
  ],
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
        "Plataforma educativa con IA para academias preuniversitarias del norte del Perú.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
        addressRegion: "Piura",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
