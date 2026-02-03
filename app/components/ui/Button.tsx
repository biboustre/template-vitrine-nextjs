import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  linkProps?: Omit<React.ComponentProps<typeof Link>, "href" | "children">;
}

export default function Button({
  children,
  href,
  linkProps,
  className,
  ...props
}: ButtonProps) {
  const styleButton =
    "inline-block px-8 py-4 uppercase rounded-full bg-white font-semibold shadow-lg hover:bg-[#fbbf24] hover:text-white transition-colors transition-transform hover:scale-105 duration-300";

  const button = (
    <button className={`${styleButton} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );

  return href ? (
    <Link
      href={href}
      className={`${styleButton} ${className ?? ""}`}
      {...linkProps}
    >
      {children}
    </Link>
  ) : (
    button
  );
}
