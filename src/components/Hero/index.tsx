import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import AnimatedImage from "@/components/AnimatedImage";
import Logo from "../../assets/uaigro-01.png";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();

      const x = (clientX - rect.left) / rect.width - 0.5;
      const y = (clientY - rect.top) / rect.height - 0.5;

      const elements = heroRef.current.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const depth = parseFloat(htmlEl.getAttribute("data-depth") || "0.05");
        const moveX = x * depth * 25;
        const moveY = y * depth * 25;

        htmlEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-6 md:px-12 pt-24 md:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/4 left-1/5 w-64 h-64 bg-primary/5 rounded-full blur-3xl parallax"
          data-depth="0.03"
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl parallax"
          data-depth="0.05"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div
          className="space-y-8 animate-fade-up text-center lg:text-left"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="space-y-4">
            <div className="inline-block rounded-full px-4 py-1.5 bg-uaipy-primary border text-sm font-medium animate-fade-in text-uaipy-secondary">
              Tecnologia que cultiva resultados
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gradient">UAIgro</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              powered by <span className="text-gradient">UAI.py</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="group" variant="uaipy">
              <a href="#contact" className="flex items-center">
                Descubra como a IA pode ajudar seu negócio
              </a>
            </Button>
          </div>

          <div className="pt-4 flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium"
                >
                  {num}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">1,500+</span>
              {""} Pequenos e médios negócios ajudados
            </p>
          </div>
        </div>

        <div
          className="relative animate-fade-up flex items-center justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="relative z-10 parallax" data-depth="0.02">
            <AnimatedImage
              src={Logo}
              alt="UAIgro"
              className="h-80 w-80 object-contain shadow-lg border-2 border-secondary rounded-full mb-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
