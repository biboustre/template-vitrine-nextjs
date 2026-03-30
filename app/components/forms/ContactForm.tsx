"use client";

import Button from "../ui/Button";
import { useContactForm } from "./useContactForm";
import { InputField, TextareaField } from "./FormFields";
import AnimatedSection from "../ui/animations/AnimatedSection";

// Est utilisé déja dans usecontactform.ts 
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqpqplo";

export default function ContactForm() {
  const { loading, success, error, handleSubmit } = useContactForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6"
    >
      <AnimatedSection delay={100}
      >
        <InputField label="Nom" id="name" name="name" type="text" required />
      </AnimatedSection>
      <AnimatedSection delay={200}
      >
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
        />
      </AnimatedSection>
      <AnimatedSection delay={300}
      >
        <InputField
          label="Numéro de téléphone"
          id="phone"
          name="phone"
          type="tel"
          required
        />
      </AnimatedSection>
      <AnimatedSection delay={400}
      >
        <TextareaField
          label="Message"
          id="message"
          name="message"
          required
          rows={5}
        />
      </AnimatedSection>
      <AnimatedSection delay={500}
        className="flex flex-col items-start gap-2"
      >
        <Button
          type="submit"
          variant="primary"
          className="bg-primary text-white"
          disabled={loading}
        >
          {loading ? "Envoi..." : "Envoyer"}
        </Button>
        {success && (
          <span className="text-green-600 text-sm mt-1">
            Message envoyé avec succès !
          </span>
        )}
        {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
      </AnimatedSection>
    </form>
  );
}
