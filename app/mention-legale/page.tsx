'use client';

import { motion } from "framer-motion";

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-blue-100 dark:from-gray-900 dark:to-gray-950 py-16 px-4 flex items-center justify-center">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl bg-white/90 dark:bg-neutral-900 rounded-2xl shadow-xl p-8 md:p-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-4xl font-extrabold mb-6 text-primary text-center"
        >
          Mentions légales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-6 text-base text-gray-700 dark:text-gray-200 text-center"
        >
          Informations légales du site Terrassement Pro, entreprise spécialisée en terrassement, aménagement de terrain et travaux publics en France.
        </motion.p>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Éditeur du site</h2>
            <p>
              <strong>Terrassement Pro</strong><br />
              SARL au capital de 50 000 €<br />
              RCS Paris 123 456 789<br />
              10 Rue de l&apos;Excavation, 75000 Paris<br />
              Tél : <a href="tel:+33123456789" className="underline hover:text-primary">+33 1 23 45 67 89</a><br />
              Email : <a href="mailto:contact@terrassementpro.com" className="underline hover:text-primary">contact@terrassementpro.com</a>
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Directeur de la publication</h2>
            <p>Ianis Bertrand, Gérant de Terrassement Pro</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Hébergeur</h2>
            <p>
              OVH SAS<br />
              2 rue Kellermann, 59100 Roubaix, France<br />
              Tél : <a href="tel:+33972101007" className="underline hover:text-primary">+33 9 72 10 10 07</a><br />
              Email : <a href="mailto:contact@ovh.com" className="underline hover:text-primary">contact@ovh.com</a>
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Propriété intellectuelle</h2>
            <p>
              Tous les contenus du site (textes, images, graphismes, logos, vidéos, icônes, sons) sont la propriété exclusive de Terrassement Pro ou de ses partenaires. Toute reproduction, distribution ou modification est interdite sans accord écrit préalable.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Données personnelles</h2>
            <p>
              Terrassement Pro s&apos;engage à protéger la vie privée de ses utilisateurs. Les données collectées sont utilisées uniquement pour répondre aux demandes de contact et ne sont jamais transmises à des tiers. Conformément à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en nous contactant.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Responsabilité</h2>
            <p>
              Terrassement Pro ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l&apos;utilisateur lors de l&apos;accès au site, ni des dommages indirects consécutifs à l&apos;utilisation du site.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers d&apos;autres sites. Terrassement Pro n&apos;est pas responsable du contenu de ces sites. La création de liens vers ce site est autorisée sous réserve de ne pas porter préjudice à son image.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.7 }}>
            <h2 className="text-2xl font-bold mb-2 text-primary">Droit applicable et juridiction</h2>
            <p>
              Tout litige relatif à l&apos;utilisation du site est soumis au droit français. Attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
      