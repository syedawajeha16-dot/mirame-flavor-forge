import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Abhishek Kadavergu",
    role: "Local Guide · 164 reviews",
    text: "Mirame Café is a nice chill spot with great food and amazing ambience. The interiors are beautifully done, and the wall art adds a cool vibe.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Food Enthusiast",
    text: "The Creamy Alfredo Pasta is to die for! Best Italian food I've had in Hyderabad. The ambience makes it perfect for date nights.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Regular Visitor",
    text: "People say this restaurant offers tasty dishes and a multicuisine menu. They highlight the vibrant ambience, friendly staff, and relaxed vibe.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            What People Say
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Guest Reviews
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background p-8 rounded-sm shadow-[var(--shadow-card)]">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < t.rating ? "fill-accent text-accent" : "text-border"}
                  />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div>
                <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
