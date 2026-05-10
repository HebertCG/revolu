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
  metadataBase: new URL("https://revolu.pe"),
  title: {
    default: "REVOLU — Intranet con IA para academias preuniversitarias",
    template: "%s · REVOLU",
  },
  description:
    "Reemplaza WhatsApp + Excel con una intranet con IA: proctoring, test vocacional ML, simulacros UDEP/UPAO infinitos y gestión académica completa.",
  keywords: [
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
  ],
  authors: [{ name: "REVOLU" }],
  creator: "REVOLU",
  publisher: "REVOLU",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://revolu.pe",
    siteName: "REVOLU",
    title: "REVOLU — Intranet con IA para academias preuniversitarias",
    description:
      "La intranet que las academias del 2030 ya están usando. Proctoring, simulacros UDEP/UPAO y test vocacional ML.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "REVOLU — Intranet con IA para academias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REVOLU — Intranet con IA para academias",
    description:
      "Proctoring, simulacros UDEP/UPAO infinitos y test vocacional ML. Todo en una sola plataforma.",
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
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#08080b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "REVOLU",
      url: "https://revolu.pe",
      logo: "https://revolu.pe/favicon.svg",
      description:
        "Intranet con IA para academias preuniversitarias del norte del Perú.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "PE",
        addressRegion: "Piura",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "REVOLU",
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
