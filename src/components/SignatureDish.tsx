import signaturePasta from "@/assets/signature-pasta.jpg";

const SignatureDish = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-sm shadow-[var(--shadow-elevated)]">
            <img
              src={signaturePasta}
              alt="Mirame Special Creamy Alfredo Pasta"
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>
          <div ref={rightRef} className="scroll-reveal-right space-y-6">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium">
              Chef's Signature
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Mirame Special<br />Creamy Alfredo Pasta
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Our signature creamy alfredo pasta, crafted with imported parmesan,
              fresh herbs, and a secret blend of spices that makes every bite
              unforgettable. A dish that has become synonymous with the Mirame experience.
            </p>
            <a
              href="#menu"
              className="inline-block font-body text-sm font-medium tracking-widest uppercase bg-primary text-primary-foreground px-8 py-3.5 rounded-sm hover:bg-mocha-light transition-colors"
            >
              Explore Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureDish;
