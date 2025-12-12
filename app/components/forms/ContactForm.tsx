"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

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
      <div>
        <label htmlFor="name" className="block font-medium mb-1">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <Button type="submit" variant="primary">
        Envoyer
      </Button>
    </motion.form>
  );
}
