import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Instagram, Facebook, MessageCircle, MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
    { icon: Phone, label: "Phone", value: "+213559730783" },
    { icon: MapPin, label: "Location", value: "RQ55+3Q3, Rue Talbi Mokhtar, Jijel 18000" },
    { icon: Clock, label: "Hours", value: "Sat-Thu: 09:00 - 22:00" },
];

const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/barber_bou2/?utm_source=ig_web_button_share_sheet", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/213559730783", label: "WhatsApp" },
];

const ContactSection = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "I'll get back to you as soon as possible.",
        });
        setFormData({ name: "", phone: "", message: "" });
    };

    return (
        <section id="contact" className="section-padding bg-card">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <p className="section-subtitle">Contact</p>
                    <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-6">
                        Book Your <span className="text-primary">Appointment</span>
                    </h2>
                    <p className="text-foreground/70 font-light">
                        Ready to elevate your look? Reach out to schedule your next cut
                        or ask any questions.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="font-display text-2xl uppercase tracking-wide mb-8">
                            Get in Touch
                        </h3>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center border border-border text-primary">
                                        <info.icon size={20} />
                                    </div>
                                    <div>
                                        <span className="text-foreground/50 text-sm block">{info.label}</span>
                                        <span className="text-foreground font-light">{info.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-primary mb-4">
                                Follow Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 flex items-center justify-center border border-border text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className="mt-10">
                            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
                                <a
                                    href="https://wa.me/213559730783?text=Hi%20Alaa%20Bou,%20I'd%20like%20to%20book%20an%20appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle size={20} />
                                    Book via WhatsApp
                                </a>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="font-display text-2xl uppercase tracking-wide mb-8">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="text-sm text-foreground/70 block mb-2">Your Name</label>
                                <Input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="bg-background border-border focus:border-primary h-12"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-foreground/70 block mb-2">Phone Number</label>
                                <Input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    required
                                    className="bg-background border-border focus:border-primary h-12"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-foreground/70 block mb-2">Message</label>
                                <Textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="bg-background border-border focus:border-primary min-h-[120px] resize-none"
                                    placeholder="Tell me what you're looking for..."
                                />
                            </div>

                            <Button type="submit" variant="gold" size="xl" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
