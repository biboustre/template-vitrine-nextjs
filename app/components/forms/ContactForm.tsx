"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

import { useContactForm } from "./useContactForm";
import { InputField, TextareaField } from "./FormFields";

// Remplace "votre_id_formspree" par ton vrai ID Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqpqplo";

export default function ContactForm() {
  const { loading, success, error, handleSubmit } = useContactForm();

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6"
    >
      <InputField label="Nom" id="name" name="name" type="text" required />
      <InputField label="Email" id="email" name="email" type="email" required />
      <TextareaField
        label="Message"
        id="message"
        name="message"
        required
        rows={5}
      />
      <div className="flex flex-col items-start gap-2">
        <Button type="submit" variant="primary" className="bg-primary text-white" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </Button>
        {success && (
          <span className="text-green-600 text-sm mt-1">Message envoyé avec succès !</span>
        )}
        {error && (
          <span className="text-red-600 text-sm mt-1">{error}</span>
        )}
      </div>
    </motion.form>
  );
}
