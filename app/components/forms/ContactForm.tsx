"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { InputField, TextareaField } from "./FormFields";

// Remplace "votre_id_formspree" par ton vrai ID Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/votre_id_formspree";

export default function ContactForm() {
  return (
    <motion.form
      action={FORMSPREE_ENDPOINT}
      method="POST"
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
      <Button type="submit" variant="primary">
        Envoyer
      </Button>
    </motion.form>
  );
}
