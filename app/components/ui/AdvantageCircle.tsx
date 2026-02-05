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
      className={`flex items-center justify-center  border-2 text-white rounded-full h-[200px] w-[200px] text-center px-4 font-semibold shadow ${className}`}
    >
      {children}
    </li>
  );
}
