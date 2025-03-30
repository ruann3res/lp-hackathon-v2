import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "../../assets/uaigro-01.png";
import { ThemeToggle } from "../ThemeToggle";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
export const UserForm = () => {
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
            <div className="space-y-8">
                <Select onValueChange={(value) => console.log(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione o plano" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="free">Plano Free</SelectItem>
                        <SelectItem value="pro">Plano Pro</SelectItem>
                        <SelectItem value="enterprise">Plano Enterprise</SelectItem>
                    </SelectContent>
                </Select>
              <div className="space-y-2">
                <p className="text-lg font-bold">Dados do proprietário</p>
                <Input type="text" placeholder="Nome" />
                <Input type="text" placeholder="Email" />
                <Input type="text" placeholder="Telefone" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold">Dados da propriedade</p>
                <Input
                  type="text"
                  placeholder="Endereço (Maior exatidão possivel)"
                />
                <Input type="text" placeholder="Nome da propriedade" />
                <Input
                  type="text"
                  placeholder="Area total da propriedade (ha)"
                />
                <Input type="text" placeholder="Area cultivada (ha)" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold">Informações do propriedade</p>
                <Input
                  type="text"
                  placeholder="Tipo de solo (ex: argiloso, arenoso, etc.)"
                />
                <Input
                  type="text"
                  placeholder="Presença de compactação ou erosão"
                />
                <Input
                  type="text"
                  placeholder="Cultura | Cultivo (ex: soja, milho, etc.)"
                />
                <Input
                  type="text"
                  placeholder="Estágio fenológico da cultura"
                />
                <Input type="text" placeholder="Disponibilidade hidríca" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-bold">Ferramentas e produtos</p>
                <Input
                  type="text"
                  placeholder="Fertilizantes e Insumos disponíveis"
                />
                <Input
                  type="text"
                  placeholder="Produtos químicos disponíveis"
                />
                <Input type="text" placeholder="Equipamentos disponíveis" />
              </div>
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
