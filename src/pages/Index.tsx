import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignatureDish from "@/components/SignatureDish";
import AboutSection from "@/components/AboutSection";
import MostLoved from "@/components/MostLoved";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SignatureDish />
      <AboutSection />
      <MostLoved />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
