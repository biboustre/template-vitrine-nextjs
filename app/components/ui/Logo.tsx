import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  src?: string; // Si image, sinon undefined
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  title?: string; // Si texte
};

export const Logo: React.FC<LogoProps> = ({
  src,
  alt = "Logo",
  width = 40,
  height = 40,
  className = "font-bold text-xl",
  title,
}) =>
  src ? (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  ) : (
    <Link href="/">
      <h1 className={className}>{title}</h1>
    </Link>
  );
