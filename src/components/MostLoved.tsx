import cappuccino from "@/assets/cappuccino.jpg";
import signaturePasta from "@/assets/signature-pasta.jpg";
import chocolateLava from "@/assets/chocolate-lava.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const lovedItems = [
  { name: "Creamy Alfredo Pasta", image: signaturePasta, tag: "Signature" },
  { name: "Classic Cappuccino", image: cappuccino, tag: "Popular" },
  { name: "Chocolate Lava Cake", image: chocolateLava, tag: "Popular" },
];

const MostLoved = () => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div ref={ref} className="scroll-reveal text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            Guest Favorites
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Most Loved at Mirame
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {lovedItems.map((item) => (
            <div key={item.name} className="group relative overflow-hidden rounded-sm shadow-[var(--shadow-card)]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-body text-xs tracking-wider uppercase bg-accent/90 text-accent-foreground px-3 py-1 rounded-sm">
                  {item.tag}
                </span>
              </div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-xl font-bold text-primary-foreground">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostLoved;
