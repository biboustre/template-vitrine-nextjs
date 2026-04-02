import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import { DarkModeProvider } from "./components/layout/DarkModeProvider";
import Script from "next/dist/client/script";

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
      "Entreprise de terrassement dans les alpes-maritime – Bertrand Solution Terrassement",
    template: "%s | TP Terrassement Pro",
  },
  description:
    "Entreprise de terrassement dans les alpes-maritime : VRD, assainissement, fondations, piscines, déblai-remblai et nivellement. Devis gratuit, intervention rapide.",
  keywords: [
    "terrassement",
    "travaux publics",
    "VRD",
    "assainissement",
    "terrassier",
    "paysagiste",
    "éspace vert",
    "terrassement Nice",
    "terrassement séranon",
    "terrassement Grasse",
  ],
  metadataBase: new URL("https://bertrand-solution-terrassement.vercel.app/"),
  alternates: {
    canonical: "https://bertrand-solution-terrassement.vercel.app/",
  },
  openGraph: {
    title:
      "Entreprise de terrassement dans les alpes-maritime – Bertrand Solution Terrassement",
    description:
      "Spécialiste du terrassement, VRD, fondations, piscines et travaux publics dans les alpes-maritime.",
    url: "https://bertrand-solution-terrassement.vercel.app/",
    siteName: "Bertrand Solution Terrassement",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Entreprise de terrassement dans les alpes-maritime",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Entreprise de Terrassement & Travaux Publics - Bertrand Solution Terrassement",
    description:
      " Bertrand Solution Terrassement, Alpes maritime, spécialiste du terrassement, VRD, assainissement, nivellement et travaux publics pour professionnels et particuliers.",
    site: "@bertrandterrassement",
    images: ["/images/logo.png"],
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
  const bgGradient = "bg-gradient-to-r from-gray-400 to-gray-700";
  return (
    <html lang="fr">
      <head>
        {/*
          Balise <head> :
          - On place ici les balises meta, liens vers polices, scripts globaux, SEO, etc.
        */}
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TFKWQVJL');`}
        </Script>
        {/*
          Script JSON-LD (données structurées Schema.org pour le SEO local)
          - Permet aux moteurs de recherche de mieux comprendre le site (type d'entreprise, coordonnées, horaires, etc.)
          - À personnaliser avec tes vraies infos (adresse, téléphone, réseaux sociaux, etc.)
        */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id":
                "https://bertrand-solution-terrassement.vercel.app/#business",
              name: "Bertrand Solution Terrassement",
              url: "https://bertrand-solution-terrassement.vercel.app/",
              logo: "https://bertrand-solution-terrassement.vercel.app/images/logo.png",
              image: [
                "https://bertrand-solution-terrassement.vercel.app/images/logo.png",
              ],
              telephone: "+33663058565",
              priceRange: "€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "471 Chem. de la Clue, 06750 Séranon",
                addressLocality: "Séranon",
                postalCode: "06750",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.908,
                longitude: 6.987,
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
                  closes: "19:00",
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

        {/*
          Google Analytics (balise de chargement du script GA4)
          - Remplace G-XXXXXXXXXX par ton vrai identifiant Google Analytics
          - Ce script charge la librairie Google Analytics de manière asynchrone
        */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-3X72RE3H2Z`}
        ></script>

        {/*
          Google Analytics (initialisation du tracking)
          - Ce script configure le suivi Google Analytics sur toutes les pages
          - À personnaliser aussi avec ton identifiant GA4
        */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3X72RE3H2Z');
    `,
          }}
        /> */}

        {/*
          Tu peux ajouter ici d'autres balises <meta>, <link> (favicon, polices, etc.) ou scripts nécessaires au SEO ou au tracking.
        */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${bgGradient}  text-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFKWQVJL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <DarkModeProvider>
          <Header />
          <Banner />
          <main id="main-content" className="">
            {children}
          </main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </DarkModeProvider>
      </body>
    </html>
  );
}

// 213.186.33.5

// Voici les étapes détaillées pour configurer le tracking GOOGLE ANALYTICS (GA4) sur ton site Next.js pour ton client :

// Créer un compte Google Analytics (si ce n’est pas déjà fait)

// Va sur https://analytics.google.com/
// Connecte-toi avec le compte Google du client (ou crée-en un)
// Clique sur “Démarrer la mesure” puis suis les étapes pour créer un compte et une propriété GA4.
// Récupérer l’identifiant de mesure GA4

// Une fois la propriété créée, va dans “Admin” > “Flux de données” > choisis le flux web (site).
// Tu verras un identifiant du type G-XXXXXXXXXX (exemple : G-1A2B3C4D5E). Copie-le.
// Remplacer l’identifiant dans le code

// Dans layout.tsx, remplace toutes les occurrences de G-XXXXXXXXXX par l’identifiant réel du client (ex : G-1A2B3C4D5E) :
// Dans la balise <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX">
// Dans le script d’initialisation gtag('config', 'G-XXXXXXXXXX');
// Déployer le site

// Pousse tes modifications sur la branche de production (ou demande au client de le faire).
// Vercel va automatiquement déployer la nouvelle version.
// Vérifier que le tracking fonctionne

// Va sur le site en production.
// Retourne dans Google Analytics > “Temps réel” : tu dois voir au moins 1 utilisateur actif (toi).
// Tu peux aussi installer l’extension Chrome “Google Tag Assistant” pour vérifier que la balise GA4 est bien détectée.

// ===================================================================================

// Voici toutes les étapes pour bien utiliser le script JSON-LD Schema.org (SEO local) dans ton site, avec explications :

// Comprendre à quoi ça sert

// Le script JSON-LD (type="application/ld+json") permet d’ajouter des “données structurées” à ta page.
// Ces données aident Google et les moteurs de recherche à comprendre précisément le contenu de la page (ici : entreprise locale, coordonnées, horaires, etc.).
// Cela améliore le SEO local et peut afficher des infos enrichies dans Google (ex : encadré entreprise, horaires, avis…).
// Où trouver la documentation officielle

// La référence officielle est https://schema.org/LocalBusiness
// Tu peux explorer d’autres types sur https://schema.org/docs/full.html
// Générer facilement le code JSON-LD

// Tu peux utiliser des générateurs en ligne pour ne rien oublier, par exemple :
// https://technicalseo.com/tools/schema-markup-generator/
// https://www.jamesdflynn.com/json-ld-generator/
// Choisis “Local Business” ou “Entreprise locale”, remplis les champs (nom, adresse, téléphone, horaires, réseaux sociaux…).
// Le générateur te donne le code JSON à copier.
// Personnaliser le code dans ton projet

// Remplace les valeurs fictives dans le script de layout.tsx par les vraies infos du client :
// name, url, logo, image, telephone, address, geo, openingHoursSpecification, areaServed, sameAs (liens réseaux sociaux).
// Tester et valider le balisage

// Va sur https://search.google.com/test/rich-results
// Colle l’URL de ta page en production ou le code JSON-LD pour vérifier qu’il n’y a pas d’erreur.
// À retenir

// Tu n’as pas besoin de t’inscrire sur schema.org, c’est juste une norme.
// Le script doit être dans la balise <head> (comme tu l’as fait).
// Mets à jour les infos dès qu’elles changent (adresse, horaires…).

// Voici l’analyse de ton fichier layout.tsx (Next.js 2026, SEO, bonnes pratiques) :

// Points positifs :

// Utilisation correcte de la nouvelle API app/ et du composant RootLayout.
// Déclaration complète de l’objet metadata (SEO, OpenGraph, Twitter, robots, icons).
// Intégration des polices via next/font/google (performant).
// Script JSON-LD pour le SEO local (très bon pour Google).
// Préparation pour Google Analytics (GA4).
// Structure HTML propre, balises sémantiques, accessibilité (lang, id="main-content").
// Fournisseurs de contexte (DarkModeProvider) bien placés.
// Suggestions/corrections :

// Remplace G-XXXXXXXXXX par le vrai ID Google Analytics (sinon pas de tracking).
// L’attribut alternates.canonical doit être une URL absolue (pas "/"), donc :
// alternates: { canonical: "https://bertrand-solution-terrassement.vercel.app/" }
// keywords n’est plus utilisé par Google, mais tu peux le garder pour d’autres moteurs.
// Ajoute éventuellement une balise <meta name="viewport" content="width=device-width, initial-scale=1" /> dans <head> pour le responsive.
// Vérifie que les chemins d’images (OpenGraph, favicon, etc.) sont corrects en production.
// Pour la performance, tu peux précharger les polices si besoin (optionnel avec next/font).
// Si tu veux aller plus loin : ajoute des balises meta supplémentaires (author, theme-color, etc.) selon le besoin.
