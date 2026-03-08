import cafeInterior from "@/assets/cafe-interior.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div ref={leftRef} className="scroll-reveal-left space-y-6 order-2 md:order-1">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              A space where every<br />moment is savored
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Mirame Cafe and Kitchen offers a welcoming space in Chikkadpally where guests
              can enjoy handcrafted coffee, delicious comfort food, and relaxed conversations.
              The interiors are beautifully done with wall art that adds a cool vibe, creating
              the perfect ambience for any occasion.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              From our signature mocktails to our tandoor-fired kebabs, every dish is prepared
              with passion and the finest ingredients. We invite you to experience the warmth
              of Mirame.
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <p className="font-heading text-3xl font-bold text-accent">4.0</p>
                <p className="font-body text-xs tracking-wide uppercase text-muted-foreground mt-1">Google Rating</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-accent">633+</p>
                <p className="font-body text-xs tracking-wide uppercase text-muted-foreground mt-1">Reviews</p>
              </div>
            </div>
          </div>
          <div ref={rightRef} className="scroll-reveal-right order-1 md:order-2 overflow-hidden rounded-sm shadow-[var(--shadow-elevated)]">
            <img
              src={cafeInterior}
              alt="Mirame cafe cozy interior with plants and artwork"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
