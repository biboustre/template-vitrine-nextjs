import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-primary/10 ${className}`}
    >
      {children}
    </div>
  );
}
