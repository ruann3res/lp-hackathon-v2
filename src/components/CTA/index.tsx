import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const plans = [
    {
      name: "Free",
      price: "Gratuito",
      description: "Ideal para quem quer testar o UAIAGRO.",
      features: [
        "✔️ Acesso a relatórios básicos",
        "✔️ 3 interações por mês com geração de relatório",
        "✔️ Relatórios avançados",
        "✔️ Suporte prioritário"
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 24,99/mês",
      description: "Para consultores agronômicos e pequenos produtores.",
      features: [
        "✔️ Acesso a relatórios avançados",
        "✔️ Até 50 interações por mês",
        "✔️ Suporte via chat e e-mail (tempo de resposta de até 24h)",
        "✔️ Interações ilimitadas",
        "✔️ Suporte 24/7 dedicado"
      ],
      popular: true
    },
    {
      name: "Corporativo",
      price: "Sob consulta",
      description: "Para empresas e agregadores de serviços agronômicos.",
      features: [
        "✔️ Relatórios avançados e personalizados",
        "✔️ Interações ilimitadas por mês",
        "✔️ Suporte dedicado 24/7 com tempo de resposta imediato",
        "✔️ Consultoria personalizada e workshops sobre o uso da IA"
      ]
    }
  ];
  

export const CallToAction = () => {
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
      id="pricing" 
      ref={sectionRef}
      className="py-24 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para seu negócio</h2>
          <p className="text-lg text-muted-foreground">
            Soluções personalizadas para cada etapa do seu crescimento
          </p>
        </div>

        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700",
          isVisible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-10"
        )}>
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={cn(
                "bg-background rounded-xl p-8 border transition-all duration-300 hover:shadow-lg",
                plan.popular && "border-primary/50 shadow-lg"
              )}
            >
              <div className="text-center mb-6">
                {plan.popular && (
                  <div className="inline-block rounded-full px-3 py-1 bg-primary/10 text-primary text-sm font-medium mb-4">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Consulte" && <span className="text-muted-foreground">/mês</span>}
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                  
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className="w-full group" 
                size="lg" 
                variant={plan.popular ? "uaipy" : "uaipyTertiary"}
                asChild
              >
                <Link to="/user-form">
                  Começar agora <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};