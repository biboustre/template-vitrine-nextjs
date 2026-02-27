import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import { DarkModeProvider } from "./components/layout/DarkModeProvider";
import SeoFooter from "./components/seo/SeoFooter";
import MainMenu from "./components/navigation/MainMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Entreprise de terrassement à Saint-Raphaël & Fréjus – TP Terrassement Pro",
    template: "%s | TP Terrassement Pro",
  },
  description:
    "Entreprise de terrassement à Saint-Raphaël et Fréjus : VRD, assainissement, fondations, piscines, déblai-remblai et nivellement. Devis gratuit, intervention rapide.",
  keywords: [
    "terrassement",
    "travaux publics",
    "VRD",
    "assainissement",
    "terrassier",
    "terrassement Saint-Raphaël",
    "terrassement Fréjus",
    "terrassement Nice",
  ],
  metadataBase: new URL("https://www.tp-terrassement-pro.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Entreprise de terrassement à Saint-Raphaël & Fréjus – TP Terrassement Pro",
    description:
      "Spécialiste du terrassement, VRD, fondations, piscines et travaux publics à Saint-Raphaël et Fréjus.",
    url: "https://www.tp-terrassement-pro.fr",
    siteName: "TP Terrassement Pro",
    images: [
      {
        url: "/images/og-terrassement.jpg",
        width: 1200,
        height: 630,
        alt: "Entreprise de terrassement à Saint-Raphaël et Fréjus",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entreprise de Terrassement & Travaux Publics - TP Terrassement Pro",
    description:
      "TP Terrassement Pro Alpes maritime, spécialiste du terrassement, VRD, assainissement, nivellement et travaux publics pour professionnels et particuliers.",
    site: "@tpterrassementpro",
    images: ["/images/og-terrassement.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.tp-terrassement-pro.fr/#business",
              name: "TP Terrassement Pro",
              url: "https://www.tp-terrassement-pro.fr",
              logo: "https://www.tp-terrassement-pro.fr/images/logo.png",
              image: [
                "https://www.tp-terrassement-pro.fr/images/og-terrassement.jpg",
              ],
              telephone: "+33XXXXXXXXX",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Adresse réelle",
                addressLocality: "Saint-Raphaël",
                postalCode: "83700",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.424,
                longitude: 6.769,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Alpes-Maritimes, Var",
              },
              sameAs: [
                "https://www.facebook.com/xxxx",
                "https://www.instagram.com/xxxx",
              ],
            }),
          }}
        />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-400 dark:bg-gray-950 dark:text-white`}
      >
        <DarkModeProvider>
          <Header />
          <Banner />
          <main id="main-content" className="">
            {children}
          </main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
