import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Sofiane Benyoucef",
        text: "Alaa Bou is an artist. Every time I leave his chair, I feel like a new man. The attention to detail is unmatched.",
        role: "Regular Client",
    },
    {
        id: 2,
        name: "Mohamed Amine",
        text: "Best fade I've ever had in Jijel. He takes his time to understand exactly what you want and delivers every single time.",
        role: "5+ Years Client",
    },
    {
        id: 3,
        name: "Yassine Brahmi",
        text: "Found Alaa Bou through a friend's recommendation. Now I won't let anyone else touch my hair. True professional.",
        role: "Regular Client",
    },
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="section-padding bg-background">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="section-subtitle">Testimonials</p>
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                        What Clients <span className="text-primary">Say</span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="card-testimonial text-center p-8 md:p-12">
                                        {/* Quote Icon */}
                                        <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />

                                        {/* Quote */}
                                        <blockquote className="text-xl md:text-2xl font-light text-foreground/90 leading-relaxed mb-8">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Author */}
                                        <div>
                                            <span className="font-display text-lg uppercase tracking-wide text-foreground">
                                                {testimonial.name}
                                            </span>
                                            <span className="block text-primary text-sm mt-1">
                                                {testimonial.role}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-12 h-1 transition-all duration-300 ${index === activeIndex
                                    ? "bg-primary"
                                    : "bg-border hover:bg-primary/50"
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
