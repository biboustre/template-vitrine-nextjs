import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({
  icon,
  title,
  description,
}: ValueCardProps) {
  return (
    <section
      className="flex flex-col items-center bg-[#fbbf24] rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div className="text-4xl mb-3 text-primary">{icon}</div>
      <h3 className="font-semibold text-lg md:text-xl 2xl:text-2xl mb-2 text-white">
        {title}
      </h3>
      <p className="text-white text-sm md:text-base 2xl:text-lg">{description}</p>
    </section>
  );
}
