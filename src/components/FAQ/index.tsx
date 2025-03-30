import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Como a versão PRO pode ajudar no meu cultivo?",
    answer: "A versão PRO fornece previsões climáticas hiperpersonalizadas, leitura automática de laudos agrícolas e alertas para tomada de decisão em tempo real, reduzindo riscos e maximizando produtividade."
  },
  {
    question: "Quais tipos de alertas receberei?",
    answer: "Você receberá alertas sobre mudanças climáticas críticas, riscos de estiagem, períodos ideais para adubação e plantio, além de recomendações de manejo baseadas em dados meteorológicos atualizados."
  },
  {
    question: "O sistema lê arquivos PDF e relatórios técnicos?",
    answer: "Sim! Nossa tecnologia analisa automaticamente laudos agronômicos e PDFs, extraindo informações essenciais para otimizar sua produção."
  },
  {
    question: "O monitoramento funciona em tempo real?",
    answer: "Sim! O sistema analisa dados meteorológicos e condições do solo continuamente, enviando notificações sempre que necessário."
  },
  {
    question: "Posso testar a versão PRO antes de assinar?",
    answer: "Sim! Oferecemos um período de teste gratuito para que você experimente os recursos avançados antes de tomar sua decisão."
  }
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-3">
            <HelpCircle className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Aqui estão algumas perguntas comuns que recebo sobre o processo terapêutico. Se você tiver mais dúvidas, não hesite em entrar em contato!
            <br />
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};