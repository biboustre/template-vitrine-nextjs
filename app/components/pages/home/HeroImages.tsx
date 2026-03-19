import Image from "next/image";
import AnimatedAppear from "@/app/components/ui/animations/AnimatedAppear";
import Link from "next/dist/client/link";

import { cities } from "@/app/data/cities";

const images = [
  {
    src: "/images/banners/piscine.jpg",
    alt: "Terrassement 1",
    text: "Piscines",
    href: "/services/piscine",
  },
  {
    src: "/images/banners/pose-canalisation.jpg",
    alt: "Terrassement 2",
    text: "Assainissement",
    href: "/services/assainissement",
  },
  {
    src: "/images/banners/mini-pelle.jpg",
    alt: "Terrassement 3",
    text: "Terrassement",
    href: "/services/terrassement",
  },
];

export default function HeroImages() {
  return (
    <section className="flex flex-col md:flex-row gap-32 md:gap-0 xl:gap-10 px-2 md:px-0">
      {images.map((img, idx) => (
        <AnimatedAppear
          key={img.src}
          delay={idx * 350}
          className="flex-1 relative"
        >
          <figure className="flex-1 relative h-48 md:h-72">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={300}
              className="w-full h-[200px] object-cover rounded-lg shadow-lg md:scale-90"
              priority
            />
            <figcaption>
              <Link
                href={img.href}
                className="mt-5 md:mt-3 uppercase bg-primary py-1 md:py-2 flex items-center justify-center text-white font-bold text-lg md:text-xl tracking-widest rounded-full hover:scale-105 transition-transform md:scale-90"
              >
                {img.text}
              </Link>
            </figcaption>
          </figure>
        </AnimatedAppear>
      ))}
    </section>
  );
}
