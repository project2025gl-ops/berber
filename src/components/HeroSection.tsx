import { Button } from "./ui/button";
import heroImage from "@/assets/hero-barber.jpg";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background/90" />

            {/* Content */}
            <div className="relative z-10 container-custom section-padding text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Subtitle */}
                    <p className="section-subtitle opacity-0 animate-fade-up">
                        Premium Grooming Experience
                    </p>

                    {/* Main Headline */}
                    <h1 className="section-title text-5xl md:text-7xl lg:text-8xl mb-6 opacity-0 animate-fade-up animation-delay-200">
                        Precision Cuts
                        <span className="block text-primary">&amp; Modern Style</span>
                    </h1>

                    {/* Description */}
                    <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light opacity-0 animate-fade-up animation-delay-400">
                        Elevating men's grooming with 5+ years of expertise.
                        From classic cuts to contemporary fades, every detail matters.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up animation-delay-600">
                        <Button variant="hero" size="xl" asChild>
                            <a href="#contact">Book Appointment</a>
                        </Button>
                        <Button variant="heroOutline" size="xl" asChild>
                            <a href="#portfolio">View My Work</a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
                <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mb-2" />
                <span className="text-primary text-xs uppercase tracking-[0.3em] font-display">Scroll</span>
            </div>
        </section>
    );
};

export default HeroSection;
