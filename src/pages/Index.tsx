import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PricingSection />
            <PortfolioSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </main>
    );
};

export default Index;
