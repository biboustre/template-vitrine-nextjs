"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

import { useContactForm } from "./useContactForm";
import { InputField, TextareaField } from "./FormFields";

// Est utilisé déja dans usecontactform.ts 
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/maqpqplo";

export default function ContactForm() {
  const { loading, success, error, handleSubmit } = useContactForm();

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <InputField label="Nom" id="name" name="name" type="text" required />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <TextareaField
          label="Message"
          id="message"
          name="message"
          required
          rows={5}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.45 }}
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
      </motion.div>
    </motion.form>
  );
}
