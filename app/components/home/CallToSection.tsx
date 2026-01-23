
export default function CallToSection() {
  return (
      <section className="py-16 px-4 bg-primary/90 dark:bg-primary-dark text-secondary text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Prêt à booster votre présence en ligne ?
        </h2>
        <p className="text-lg mb-8">
          Contactez-nous pour un devis gratuit et personnalisé.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 rounded-full bg-white text-secondary font-semibold shadow-lg hover:bg-gray-100 transition-colors"
        >
          Demander un devis
        </a>
      </section>
  )
}
