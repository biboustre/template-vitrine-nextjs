import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-10 text-primary dark:text-white text-center ${className}`}
    >
      {children}
    </h2>
  );
}
