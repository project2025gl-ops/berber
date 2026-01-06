import { motion } from "framer-motion";
import { Scissors, Sparkles, Clock, Crown } from "lucide-react";

const services = [
    {
        icon: Scissors,
        title: "Precision Haircut",
        description: "Tailored cuts using premium techniques to match your style and face shape.",
        duration: "45 min",
    },
    {
        icon: Sparkles,
        title: "Beard Sculpting",
        description: "Expert shaping and trimming for a polished, defined beard style.",
        duration: "30 min",
    },
    {
        icon: Crown,
        title: "The Full Experience",
        description: "Haircut, beard trim, hot towel treatment, and styling. The complete package.",
        duration: "75 min",
    },
    {
        icon: Clock,
        title: "Quick Refresh",
        description: "Neck cleanup, edge lineup, and style touch-up between regular cuts.",
        duration: "20 min",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="section-padding bg-background">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="section-subtitle">Services</p>
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                        What I <span className="text-primary">Offer</span>
                    </h2>
                    <p className="text-foreground/70 font-light">
                        Every service is delivered with precision, care, and attention to detail.
                        Your time in my chair is an experience, not just an appointment.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card-service group"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center border border-primary/30 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                                    <service.icon size={24} />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-display text-xl uppercase tracking-wide">
                                            {service.title}
                                        </h3>
                                        <span className="text-primary text-sm font-display tracking-wider">
                                            {service.duration}
                                        </span>
                                    </div>
                                    <p className="text-foreground/60 font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-foreground/50 text-sm mt-12 font-light"
                >
                    * All services include consultation, wash, and premium product styling
                </motion.p>
            </div>
        </section>
    );
};

export default ServicesSection;
