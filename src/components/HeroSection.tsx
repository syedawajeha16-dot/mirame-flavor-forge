import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Mirame Cafe interior with warm lighting and green plants"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.4em] uppercase text-gold mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Chikkadpally, Hyderabad
        </p>
        <img
          src={mirameLogo}
          alt="Mirame Cafe & Kitchen"
          className="h-20 md:h-28 lg:h-36 w-auto mx-auto mb-6 brightness-0 invert animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        />
        <p className="font-heading text-lg md:text-xl text-primary-foreground/80 italic mb-2 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          cafe & kitchen
        </p>
        <p className="font-body text-base md:text-lg text-primary-foreground/70 mb-10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          Where flavor meets comfort.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <a
            href="#menu"
            className="font-body text-sm font-medium tracking-widest uppercase bg-accent text-accent-foreground px-8 py-3.5 rounded-sm hover:bg-gold transition-colors"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="font-body text-sm font-medium tracking-widest uppercase border border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
