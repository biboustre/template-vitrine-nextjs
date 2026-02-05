import Image from "next/image";

const images = [
  { src: "/images/banners/engin-1.jpg", alt: "Terrassement 1" },
  { src: "/images/banners/engin-2.jpg", alt: "Terrassement 2" },
  { src: "/images/banners/engin-3.jpg", alt: "Terrassement 3" },
];

export default function HeroImages() {
  return (
    <section className="flex flex-col md:flex-row gap-10 px-2 md:px-0">
      {images.map((img) => (
        <figure key={img.src} className="flex-1 relative h-48 md:h-72">
          <Image
            src={img.src}
            alt={img.alt}
            width={600}
            height={400}
            // className="w-full h-full object-cover rounded-lg shadow"
            className="w-full h-[200px] object-cover rounded-lg shadow"
            // sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </figure>
      ))}
    </section>
  );
}
