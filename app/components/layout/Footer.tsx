export default function Footer() {
  return (
    <footer className="w-full  text-white py-6 pt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} MonEntreprise. Tous droits réservés.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/mentions-legales" className="hover:underline dark:text-gray-400">
            Mentions légales
          </a>
          <a href="/contact" className="hover:underline dark:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
