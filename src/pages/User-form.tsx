import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Logo from "@/assets/uaigro-01.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import { userService } from '@/services/api';
import { PatternFormat } from 'react-number-format';
import { SuccessModal } from '@/components/Success-Modal';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  plano: z.string().min(1, { message: 'Selecione um plano' }),
  nomeProprietario: z.string().min(2, { message: 'Nome deve ter no mínimo 2 caracteres' }),
  telefone: z.string().min(12, { message: 'Telefone inválido' }),
  endereco: z.string().min(5, { message: 'Endereço inválido' }),
  nomePropriedade: z.string().min(2, { message: 'Nome da propriedade inválido' }),
  areaTotal: z.string().min(1, { message: 'Área total é obrigatória' }),
  areaCultivada: z.string().min(1, { message: 'Área cultivada é obrigatória' }),
  tipoSolo: z.string().min(2, { message: 'Tipo de solo é obrigatório' }),
  cultura: z.string().min(2, { message: 'Cultura é obrigatória' }),
  persona: z.string().min(2, { message: 'Persona é obrigatória' })
});

type FormValues = z.infer<typeof formSchema>;

const UserForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plano: '',
      nomeProprietario: '',
      telefone: '',
      endereco: '',
      nomePropriedade: '',
      areaTotal: '',
      areaCultivada: '',
      tipoSolo: '',
      cultura: '',
      persona: ''
    },
  });

  const buildUserData = (data: FormValues) => {
    const aditionalProps1 = {
      plano: data.plano,
      endereco: data.endereco,
      nomePropriedade: data.nomePropriedade,
      areaTotal: data.areaTotal,
      areaCultivada: data.areaCultivada,
      tipoSolo: data.tipoSolo,
      cultura: data.cultura,
      persona: data.persona
    }

    return {
      name: data.nomeProprietario,
      telefone: data.telefone,
      details: {
        additionalProp1: aditionalProps1
      }
    }
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const userData = buildUserData(data);
      await userService.sendUserForm(userData);
      setShowSuccessModal(true);
      await userService.sendChatMessage({
        numero: userData.telefone,
        text: {
          message: `E aí ${userData.name.trim().split(' ')[0]}, tudo bem? Tô muito feliz e animado pra te ajudar com tudo o que precisar pro seu plantio!\n Sobre o que você gostaria de falar agora?`
        }
      });
      form.reset();
    } catch (error) {
      console.error('Erro:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ThemeToggle />
      <div className="w-full max-w-md flex flex-col items-center bg-background rounded-lg shadow-md">
        <img src={Logo} alt="Logo" className="w-40 h-40 my-6" />
        <div className="w-full p-6 bg-background rounded-lg shadow-md">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Precisamos de algumas informações
            </h1>
            <p className="text-muted-foreground">
              Preencha o formulário abaixo para obter respostas mais objetivas
              de acordo com o seu perfil.
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="plano"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plano</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o plano" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="fixed w-[var(--radix-select-trigger-width)] max-h-[300px]">
                          <SelectItem value="free">Plano Free</SelectItem>
                          <SelectItem value="pro">Plano Pro</SelectItem>
                          <SelectItem value="enterprise">Plano Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="persona"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Perfil</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Eu sou" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="fixed w-[var(--radix-select-trigger-width)] max-h-[300px]">
                          <SelectItem value="agricultor">Agricultor</SelectItem>
                          <SelectItem value="técnico">Técnico</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-2">
                  <p className="text-lg font-bold">Dados do proprietário</p>
                  <FormField
                    control={form.control}
                    name="nomeProprietario"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefone" 
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <PatternFormat
                            format="## ## ########"
                            mask=" "
                            placeholder="Telefone (ex: 55 34 96671414)"
                            value={field.value}
                            onValueChange={(values) => field.onChange(values.value)}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-bold">Dados da propriedade</p>
                  <FormField
                    control={form.control}
                    name="endereco"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Endereço (Maior exatidão possivel)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nomePropriedade"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nome da propriedade" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="areaTotal"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Area total da propriedade (ha)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="areaCultivada"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Area cultivada (ha)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-lg font-bold">Informações da propriedade</p>
                  <FormField
                    control={form.control}
                    name="tipoSolo"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Tipo de solo (ex: argiloso, arenoso, etc.)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cultura"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Cultura | Cultivo (ex: soja, milho, etc.)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
};

export default UserForm;