import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, User, Send, MessageSquare } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappNumber] = useState('+5534992275554');
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try { 
      const message = `Olá UAIgro. Gostaria de saber mais sobre o seu produto. Meu nome é ${data.firstName} ${data.lastName}, poderia me falar mais sobre?`;
      
      const encodedMessage = encodeURIComponent(message);

      const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
      
      window.open(whatsappUrl, '_blank');
  
      form.reset();
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-3">
            <MessageSquare className="h-6 w-6 text-primary mr-2" />
            <h2 className="text-3xl font-bold">Entre em Contato</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se você deseja agendar uma consulta ou tem alguma dúvida, preencha o formulário abaixo e entre em contato comigo. Estou aqui para ajudar!
            <br />
          </p>
        </div>

        <div className="max-w-md mx-auto bg-card p-6 rounded-lg shadow-sm border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Nome
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Sobrenome
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Email
                    </FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 cursor-pointer"
                disabled={isSubmitting}
                variant="uaipySecondary"
              >
                <Send className="h-4 w-4" />
                 Enviar Mensagem
                {isSubmitting && (
                  <div className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                )}
              </Button>
            </form>
          </Form>
        </div>

        <div className="text-center text-muted-foreground mt-8 text-sm">

        </div>
      </div>
    </section>
  );
};