import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";
import { DarkModeProvider } from "./components/layout/DarkModeProvider";

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
  const bgGradient = "bg-gradient-to-r from-gray-400 to-gray-700";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${bgGradient}  text-white`}
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


// ===================================================================================


// Voici tout ce que tu dois savoir sur la section icons dans le metadata de Next.js :

// À quoi ça sert ?
// Ces propriétés servent à définir les icônes de ton site (favicon, raccourci, icône Apple) pour les navigateurs, les favoris, les onglets, les raccourcis sur mobile, etc.
// Elles améliorent l’apparence de ton site sur tous les supports et facilitent la reconnaissance de ta marque.
// Les différents types d’icônes
// icon : le favicon classique (petite icône dans l’onglet du navigateur, 16x16 ou 32x32 px, format .ico ou .png).
// shortcut : souvent identique à icon, utilisé pour certains navigateurs ou anciens systèmes.
// apple : icône pour les raccourcis sur l’écran d’accueil iOS (format .png, idéalement 180x180 px).
// Où placer les fichiers et comment les nommer ?
// Place tes fichiers dans le dossier public/ à la racine de ton projet Next.js.
// Les chemins dans le metadata doivent être relatifs à public/ (ex : public/favicon.ico → “/favicon.ico”).
// Tu peux nommer les fichiers comme tu veux, mais les conventions sont :
// favicon.ico (pour icon et shortcut)
// apple-touch-icon.png (pour apple)
// Si tu veux plusieurs tailles ou formats, tu peux ajouter d’autres balises <link> dans le <head> (voir plus bas).
// Comment créer ces images ?
// favicon.ico : utilise un générateur en ligne (ex : https://realfavicongenerator.net/) pour créer un .ico multi-résolution (16x16, 32x32, 48x48…).
// apple-touch-icon.png : crée une image carrée (180x180 px, .png, fond transparent ou couleur).
// Tu peux aussi générer des .png de 32x32, 192x192, 512x512 pour Android/PWA.
// Exemple de structure dans public/
// Comment référencer d’autres icônes (optionnel)
// Si tu veux être ultra-complet, ajoute dans le <head> :
// Mais le metadata de Next.js gère déjà l’essentiel.

// Conseils
// Utilise des images carrées, idéalement avec fond transparent (.png) pour apple-touch-icon.
// favicon.ico doit être à la racine de public/ et contenir plusieurs tailles si possible.
// Teste ton favicon sur différents navigateurs et appareils.
// Pour la marque, mets ton logo ou un pictogramme reconnaissable même en petit.
// À retenir
// Pas besoin de déclarer toutes les tailles, mais plus tu en mets, mieux c’est pour la compatibilité.
// Les images doivent être optimisées (pas trop lourdes).
// Les chemins dans le metadata commencent toujours par / (racine du site).
