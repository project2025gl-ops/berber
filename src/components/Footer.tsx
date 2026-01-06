import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border">
            <div className="container-custom section-padding py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <a href="#" className="font-display text-2xl tracking-wider text-foreground">
                        ALAA BOU<span className="text-primary">.</span>
                    </a>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://www.instagram.com/barber_bou2/?utm_source=ig_web_button_share_sheet"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/50 hover:text-primary transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/50 hover:text-primary transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://wa.me/213559730783"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/50 hover:text-primary transition-colors duration-300"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle size={20} />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-foreground/40 text-sm">
                        © {currentYear} Alaa Bou. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
