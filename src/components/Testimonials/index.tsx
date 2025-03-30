import { useRef, useState, useEffect } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import AnimatedImage from "@/components/AnimatedImage";


const testimonials = [
  {
    quote:
      "A UAIgro me ajudou a aumentar a produtividade do meu negócio em 30%.",
    author: "Julia Lima",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
  },
  {
    quote:
      "A UAIgro me ajudou a aumentar a produtividade do meu negócio em 30%.",
    author: "Tales Santos",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
  },
  {
    quote:
      "A UAIgro me ajudou a aumentar a produtividade do meu negócio em 30%.",
    author: "Ana Clara",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
  },
  {
    quote:
      "A UAIgro me ajudou a aumentar a produtividade do meu negócio em 30%.",
    author: "Danilo Oliveira",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length); // Cicla para a próxima imagem
  };    

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); // Cicla para a imagem anterior
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="py-24 px-6 md:px-12 bg-secondary/40"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "text-center mb-16 max-w-3xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem sobre o nosso trabalho
          </h2>
          <p className="text-lg text-muted-foreground">
            Aqui estão alguns depoimentos de nossos clientes, que alavancaram seus negócios com a IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center lg:flex lg:justify-around">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div
              className={cn(
                "transition-all duration-500 h-full flex flex-col justify-center",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              )}
            >
              {/* Testimonial content */}
              <div className="mb-8">
                <div className="flex mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <AnimatedImage
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">
                      {testimonials[activeIndex].author}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation controls */}
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrev}
                  className="rounded-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <div
              className={cn(
                "relative aspect-square rounded-full overflow-hidden transition-all duration-700 mx-auto",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ width: "300px", height: "300px" }} // Ajuste do tamanho da imagem
            >
              <AnimatedImage
                src={testimonials[activeIndex].avatar}
                alt={`Image ${activeIndex + 1}`}
                className="w-full h-full rounded-full object-cover shadow-lg border-2 border-secondary"
                priority
              />

              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "bg-primary w-8"
                          : "bg-white/50 hover:bg-white/80"
                      )}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};