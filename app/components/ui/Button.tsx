import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
  href?: string;
  linkProps?: Omit<React.ComponentProps<typeof Link>, "href" | "children">;
};

export default function Button({
  children,
  variant = "primary",
  href,
  linkProps,
  ...props
}: ButtonProps) {
  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`px-6 py-2 rounded font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 focus:ring-offset-2
        ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary-dark"
            : "bg-white text-primary border border-primary text-hover:bg-primary/10"
        }`}
      {...props}
    >
      {children}
    </motion.button>
  );

  return href ? (
    <Link href={href} {...linkProps}>
      {button}
    </Link>
  ) : (
    button
  );
}
