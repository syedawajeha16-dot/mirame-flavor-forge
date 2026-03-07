const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading text-2xl font-bold tracking-wide mb-2">mirame</p>
            <p className="font-body text-xs tracking-[0.2em] uppercase opacity-60">cafe & kitchen</p>
            <p className="font-body text-sm opacity-70 mt-4 leading-relaxed">
              Where flavor meets comfort. A premium café experience in the heart of Chikkadpally, Hyderabad.
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold mb-4">Visit Us</p>
            <p className="font-body text-sm opacity-70 leading-relaxed">
              Chikkadpally, Hyderabad<br />
              Telangana, India<br /><br />
              Open daily · Closes 11:30 PM
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-xs opacity-50">
            © {new Date().getFullYear()} Mirame Cafe & Kitchen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
