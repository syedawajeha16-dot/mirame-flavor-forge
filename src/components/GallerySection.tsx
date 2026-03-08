import heroCafe from "@/assets/hero-cafe.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import signaturePasta from "@/assets/signature-pasta.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import chocolateLava from "@/assets/chocolate-lava.jpg";
import mojito from "@/assets/mojito.jpg";
import chickenTikka from "@/assets/chicken-tikka.jpg";
import pizza from "@/assets/pizza.jpg";
import biryani from "@/assets/biryani.jpg";
import naan from "@/assets/naan.jpg";

const images = [
  { src: heroCafe, alt: "Mirame cafe dining area" },
  { src: cappuccino, alt: "Cappuccino with latte art" },
  { src: signaturePasta, alt: "Creamy alfredo pasta" },
  { src: chickenTikka, alt: "Chicken tikka skewers" },
  { src: cafeInterior, alt: "Cafe cozy corner" },
  { src: mojito, alt: "Virgin mojito" },
  { src: pizza, alt: "Fresh margherita pizza" },
  { src: chocolateLava, alt: "Chocolate lava cake" },
  { src: biryani, alt: "Chicken dum biryani" },
  { src: naan, alt: "Butter naan fresh from tandoor" },
];

import { useScrollReveal } from "@/hooks/useScrollReveal";

const GallerySection = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="scroll-reveal text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            Visual Story
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-sm aspect-square">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
