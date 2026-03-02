import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <span>/</span>
            {index === items.length - 1 ? (
              <span className="font-semibol">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}