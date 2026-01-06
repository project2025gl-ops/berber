import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
            <div className="text-center">
                <span className="text-primary font-display text-9xl md:text-[12rem] leading-none">
                    404
                </span>
                <h1 className="font-display text-3xl md:text-4xl uppercase tracking-wider mt-4 mb-4 text-foreground">
                    Page Not Found
                </h1>
                <p className="text-foreground/60 font-light max-w-md mx-auto mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Button variant="gold" size="xl" asChild>
                    <a href="/">Return Home</a>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
