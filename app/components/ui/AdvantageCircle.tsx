import { ReactNode } from "react";

interface AdvantageCircleProps {
  children: ReactNode;
  className?: string;
}

export default function AdvantageCircle({
  children,
  className = "",
}: AdvantageCircleProps) {
  return (
    <li
      className={`flex items-center justify-center bg-primary dark:bg-gray-900 text-white rounded-full h-[200px] w-[200px] text-center px-4 font-semibold shadow-2xl hover:scale-110 cursor-pointer duration-300 ${className}`}
    >
      {children}
    </li>
  );
}
