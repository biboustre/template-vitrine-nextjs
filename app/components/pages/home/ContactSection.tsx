import Button from "../../ui/Button";

export default function ContactSection() {
  return (
      <section className="py-16 px-4 bg-primary/90 dark:bg-primary-dark text-center">
        <h2 className="text-3xl text-secondary md:text-4xl font-bold mb-4">
          Prêt à booster votre présence en ligne ?
        </h2>
        <p className="text-lg text-white mb-8">
          Contactez-nous pour un devis gratuit et personnalisé.
        </p>
        <Button href="/contact">Contactez-nous</Button>
      </section>
  )
}
