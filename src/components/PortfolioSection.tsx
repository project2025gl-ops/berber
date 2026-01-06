import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
    { id: 1, src: portfolio1, title: "Classic Fade", category: "Haircut" },
    { id: 2, src: portfolio2, title: "Beard Sculpt", category: "Beard" },
    { id: 3, src: portfolio3, title: "Textured Style", category: "Haircut" },
    { id: 4, src: portfolio4, title: "Gentleman's Cut", category: "Haircut" },
];

const PortfolioSection = () => {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    return (
        <section id="portfolio" className="section-padding bg-card">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="section-subtitle">Portfolio</p>
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                        My <span className="text-primary">Work</span>
                    </h2>
                    <p className="text-foreground/70 font-light">
                        A showcase of my craft. Each cut tells a story of precision and personal style.
                    </p>
                </motion.div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
                            onClick={() => setLightboxImage(item.src)}
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary text-xs uppercase tracking-wider font-display">
                                    {item.category}
                                </span>
                                <h3 className="font-display text-lg uppercase tracking-wide text-foreground">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Border */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
                        </motion.div>
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://www.instagram.com/barber_bou2/?utm_source=ig_web_button_share_sheet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-display text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300"
                    >
                        See More on Instagram
                        <span className="text-lg">→</span>
                    </a>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
                        onClick={() => setLightboxImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
                            onClick={() => setLightboxImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={lightboxImage}
                            alt="Portfolio"
                            className="max-w-full max-h-[90vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PortfolioSection;
