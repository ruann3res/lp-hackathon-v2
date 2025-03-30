import { useRef, useEffect, useState } from 'react';
import { HandHeart, HandCoins, Shell } from 'lucide-react';
import { cn } from '@/lib/utils';

// ia para o agronegocio

const features = [
  {
    title: "Democratizaçao do conhecimento tecnico",
    description: "A democratização do conhecimento técnico é um processo que visa tornar o conhecimento técnico mais acessível e compreensível para todos, independentemente de sua formação acadêmica ou experiência profissional.",
    icon: HandHeart
  },
  {
    title: "Aumento na produtividade",
    description: "Aumenta a produtividade do seu negócio através de IA",
    icon: HandCoins
  },
  {
    title: "A",
    description: "Aumenta a produtividade do seu negócio através de IA",
    icon: Shell
  },
];

const MethodologyCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "p-6 rounded-xl bg-secondary/50 border backdrop-blur-sm transition-all duration-700 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${150 * (index % 3)}ms` }}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <feature.icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

export const Methodology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="methodology" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className={cn(
            "transition-all duration-700",
            isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como podemos alavancar o seu negócio com a IA?</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Desenvolvemos soluções personalizadas para o seu negócio, utilizando a IA para aumentar a produtividade e a eficiência.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MethodologyCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};