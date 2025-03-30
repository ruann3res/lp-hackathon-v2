import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { ThemeToggle } from "../ThemeToggle";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <a href="https://github.com/uaipy" target="_blank" className="text-xl font-semibold tracking-tight">
            <span className="text-gradient">
              UAIgro <span className="text-muted-foreground">powered by</span>{" "}
              <span className="text-red-500">
                UAI.
                <span className="text-amber-300">
                  p<span className="text-blue-500">y</span>
                </span>
              </span>
            </span>
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#methodology"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Metodologias
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Feedback
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            FAQ
          </a>
          <ThemeToggle />
          <div className="flex gap-3">
              <Button size="lg" variant="uaipy" className="cursor-pointer"  asChild
              >
                <Link to="/user-form">
                Cadastre-se
                </Link>
              </Button>
          </div>
        </div>

        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
