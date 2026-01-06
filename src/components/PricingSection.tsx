import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Check, Star } from "lucide-react";

const pricingCategories = [
    {
        title: "Haircuts & Styling / الحلاقة",
        items: [
            { name: "Classic Cut / حلاقة كلاسيكية", price: 300, description: "Traditional scissor or clipper cut" },
            { name: "Styling / تمشيط", price: 200, description: "Professional hair styling and grooming" },
            { name: "Kids Cut / حلاقة للأطفال", price: 250, description: "Ages 12 and under", note: "12 & under" },
        ],
    },
    {
        title: "Skin & Care / العناية والوجه",
        items: [
            { name: "Gomage / تقشير الوجه", price: 500, description: "Deep cleansing and exfoliation" },
            { name: "Face Mask / قناع الوجه", price: 300, description: "Purifying and hydrating treatment" },
            { name: "Beard Trim / تحديد اللحية", price: 300, description: "Shape and trim maintenance" },

        ],
    },
    {
        title: "Special Treatments / علاجات خاصة",
        items: [
            { name: "Protein Treatment / پروتين", price: "1500 - 3500", description: "Hair strengthening and repair", note: "Depends on length" },
        ],
    },
];

const packages = [
    {
        name: "L'Essentiel",
        price: 800,
        popular: false,
        includes: ["Haircut / حلاقة", "Wash / غسل الشعر", "Styling / ستيلينغ"],
    },
    {
        name: "La Signature",
        price: 1200,
        popular: true,
        includes: ["Precision Fade", "Beard Sculpt", "Hot Towel Shave", "Premium Styling"],
    },
    {
        name: "L'Exécutif",
        price: 2000,
        popular: false,
        includes: ["Full Service", "Beard & Face Care", "Scalp Massage", "VIP Treatment"],
    },
];

const PricingSection = () => {
    return (
        <section id="pricing" className="section-padding bg-background">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="section-subtitle">Pricing</p>
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                        Service <span className="text-primary">Menu</span>
                    </h2>
                    <p className="text-foreground/70 font-light">
                        Transparent pricing for premium grooming. Every service includes consultation and styling.
                    </p>
                </motion.div>

                {/* Packages */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="font-display text-xl uppercase tracking-[0.2em] text-center mb-10">
                        Signature Packages
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-8 border transition-all duration-500 ${pkg.popular
                                    ? "border-primary bg-card shadow-[0_0_40px_hsla(43,74%,49%,0.15)]"
                                    : "border-border bg-card hover:border-primary/50"
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-xs font-display uppercase tracking-widest flex items-center gap-1">
                                        <Star size={12} fill="currentColor" />
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h4 className="font-display text-2xl uppercase tracking-wide mb-4">
                                        {pkg.name}
                                    </h4>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-primary font-display text-5xl">{pkg.price} DA</span>
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {pkg.includes.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-foreground/70 font-light">
                                            <Check size={16} className="text-primary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    variant={pkg.popular ? "gold" : "goldOutline"}
                                    size="lg"
                                    className="w-full"
                                    asChild
                                >
                                    <a href="#contact">Book Now</a>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Individual Services */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {pricingCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                        >
                            <h3 className="font-display text-2xl uppercase tracking-wide mb-8 pb-4 border-b border-border">
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.items.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-baseline justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <span className="font-display text-lg uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                                                    {item.name}
                                                </span>
                                                {item.note && (
                                                    <span className="text-xs text-primary/70 border border-primary/30 px-2 py-0.5">
                                                        {item.note}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-primary font-display text-xl">
                                                {item.price} DA
                                            </span>
                                        </div>
                                        <p className="text-foreground/50 text-sm font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-center text-foreground/50 text-sm mt-16 font-light"
                >
                    * Prices may vary based on hair length and complexity. Cash & all major cards accepted.
                </motion.p>
            </div>
        </section>
    );
};

export default PricingSection;
