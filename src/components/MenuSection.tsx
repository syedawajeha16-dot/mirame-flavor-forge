import { useState } from "react";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].category);

  const active = menuCategories.find((c) => c.category === activeCategory)!;

  return (
    <section id="menu" className="py-24 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            Curated for You
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Our Menu
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`font-body text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all ${
                activeCategory === cat.category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="space-y-0 divide-y divide-border">
          {active.items.map((item, i) => (
            <div
              key={item.name}
              className="flex items-start justify-between py-5 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex-1 pr-6">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                )}
              </div>
              <p className="font-heading text-lg font-semibold text-accent whitespace-nowrap">
                ₹{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
