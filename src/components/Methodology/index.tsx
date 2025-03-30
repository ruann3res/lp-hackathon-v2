import { useRef, useEffect, useState } from 'react';
import { HandHeart, HandCoins,Bot,ChartSpline, ChartBarDecreasing, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Escalabilidade e Automação",
    description: "O UAIAGRO pode atender milhares de produtores simultaneamente, sem aumentar custos operacionais. Chatbot inteligente responde dúvidas técnicas 24/7, reduzindo a necessidade de atendimento humano.",
    icon: Bot
  },
  {
    title: "Melhoria na Precisão das Recomendações",
    description: "O uso de Machine Learning permite que o UAIAGRO aprenda com as interações e melhore continuamente suas respostas. Diagnóstico de doenças via imagem com IA reduz erros humanos e acelera a tomada de decisão.",
    icon: ChartSpline
  },
  {
    title: "Novas Oportunidades de Monetização",
    description: "Recomendações personalizadas de insumos podem ser integradas a parceiros comerciais, criando um fluxo de receita via afiliados. A análise inteligente de documentos pode ser um serviço premium para consultorias e empresas agrícolas.",
    icon: HandCoins
  },
  {
    title: "Análise de Dados e Previsão Agronômica",
    description: "O UAIAGRO pode analisar padrões climáticos e históricos para prever riscos agronômicos, ajudando na tomada de decisão estratégica dos produtores. Criação de um banco de dados agrícola para fornecer insights sobre safras, doenças e uso de insumos.",
    icon: ChartBarDecreasing
  },
  {
    title: "Expansão para Novos Mercados",
    description: "A IA permite que o UAIAGRO seja adaptado para diferentes regiões e culturas agrícolas, ampliando sua base de usuários. Integração com APIs e outras plataformas agrícolas facilita a adoção do produto por empresas e cooperativas.",
    icon: Globe
  }
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