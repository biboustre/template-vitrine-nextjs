import Image from "next/image";
import Link from "next/link";
import React from "react";

type LogoProps = {
  src?: string; // Si image, sinon undefined
  alt?: string;
  width?: number;
  height?: number;
  classNameImg?: string;
  title?: string; // Si texte
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  src,
  alt = "Logo",
  width = 40,
  height = 40,
  classNameImg = "inline-block absolute left-5 xl:top-0 font-bold text-xl",
  className
}) =>
  src && (
    
    <Link href="/" className={`inline-block absolute left-5 xl:top-0 font-bold text-xl ${className}`}>
      <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNameImg}
      priority
    />
    </Link>
  );
