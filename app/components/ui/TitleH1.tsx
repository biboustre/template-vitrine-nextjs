'use client';

import AnimatedAppear from "./animations/AnimatedAppear";

interface TitleH1Props {
  title: string;
  className?: string;
}

export default function TitleH1({title, className}: TitleH1Props) {
  return (
    <AnimatedAppear
        className={`text-3xl md:text-5xl font-extrabold mb-10 text-secondary text-center ${className || ''}`}
      >
       {title}
      </AnimatedAppear>
  )
}
