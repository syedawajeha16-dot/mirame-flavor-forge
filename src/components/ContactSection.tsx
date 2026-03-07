import { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm shortly.");
    setFormData({ name: "", phone: "", date: "", time: "", guests: "2" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-14">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent font-medium mb-3">
            Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Reserve a Table
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info + Map */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Address</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Chikkadpally, Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Phone</p>
                  <p className="font-body text-sm text-muted-foreground">Contact us on Google Maps</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-heading text-sm font-semibold text-foreground">Hours</p>
                  <p className="font-body text-sm text-muted-foreground">Open · Closes 11:30 PM</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-sm overflow-hidden shadow-[var(--shadow-card)] h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.5!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mirame Cafe location"
              />
            </div>
          </div>

          {/* Reservation Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-sm shadow-[var(--shadow-card)] space-y-5">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Book Your Table</h3>
            <div>
              <label className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-1.5 block">Phone</label>
              <input
                type="tel"
                required
                maxLength={15}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-1.5 block">Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-1.5 block">Time</label>
                <input
                  type="time"
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-xs tracking-wide uppercase text-muted-foreground mb-1.5 block">Guests</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                className="w-full bg-background border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full font-body text-sm font-medium tracking-widest uppercase bg-primary text-primary-foreground px-8 py-3.5 rounded-sm hover:bg-mocha-light transition-colors mt-2"
            >
              Reserve Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
