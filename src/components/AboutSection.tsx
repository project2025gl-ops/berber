import { motion } from "framer-motion";
import barberPortrait from "@/assets/barber-portrait.jpg";

const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "1K+", label: "Happy Clients" },
    { number: "15+", label: "Style Awards" },
];

const AboutSection = () => {
    return (
        <section id="about" className="section-padding bg-card">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={barberPortrait}
                                alt="Alaa Bou - Professional Barber"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            {/* Gold accent line */}
                            <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary" />
                        </div>
                        {/* Experience badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 md:p-8">
                            <span className="font-display text-4xl md:text-5xl block">5+</span>
                            <span className="text-sm uppercase tracking-wider">Years</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="section-subtitle">About Me</p>
                        <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                            Crafting Confidence,
                            <span className="text-primary block">One Cut at a Time</span>
                        </h2>

                        <div className="space-y-4 text-foreground/70 font-light leading-relaxed mb-10">
                            <p>
                                I'm Alaa Bou, a professional barber with 5+ years of experience
                                in the art of grooming. My commitment is to provide every client
                                with a premium experience that goes beyond just a haircut.
                            </p>
                            <p>
                                Specializing in modern fades, precision beard styling, and
                                classic cuts, I believe that every detail matters in crafting
                                the perfect look that suits your personality.
                            </p>
                        </div>

                        {/* Specialties */}
                        <div className="border-t border-border pt-8">
                            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
                                My Specialties
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Precision Fades", "Beard Sculpting", "Classic Cuts", "Modern Styles", "Hot Towel Shaves"].map(
                                    (specialty) => (
                                        <span
                                            key={specialty}
                                            className="px-4 py-2 border border-border text-sm font-body text-foreground/70 hover:border-primary hover:text-primary transition-colors duration-300"
                                        >
                                            {specialty}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-border"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <span className="font-display text-4xl md:text-5xl lg:text-6xl text-primary">
                                {stat.number}
                            </span>
                            <span className="block text-sm uppercase tracking-wider text-foreground/50 mt-2">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
