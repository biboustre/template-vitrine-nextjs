import Image from "next/image";
import AnimatedAppear from "@/app/components/ui/animations/AnimatedAppear";
const images = [
  { src: "/images/banners/engin-1.jpg", alt: "Terrassement 1" },
  { src: "/images/banners/engin-2.jpg", alt: "Terrassement 2" },
  { src: "/images/banners/engin-3.jpg", alt: "Terrassement 3" },
];

export default function HeroImages() {
  return (
    <section className="flex flex-col md:flex-row gap-10 px-2 md:px-0">
      {images.map((img, idx) => (
        <AnimatedAppear key={img.src} delay={idx * 150} className="flex-1 relative">
          <figure className="flex-1 relative h-48 md:h-72">
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="w-full h-[200px] object-cover rounded-lg shadow"
              priority
            />
          </figure>
        </AnimatedAppear>
      ))}
    </section>
  );
}


