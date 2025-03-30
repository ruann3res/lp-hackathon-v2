import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Logo from "../../assets/uaigro-01.png";
import { useNavigate } from "react-router-dom";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    onClose();
    navigate('/');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex flex-col items-center space-y-4">
            <img src={Logo} alt="Logo" className="w-24 h-24" />
            <DialogTitle className="text-2xl text-center">Seja bem-vindo à UAIgro!</DialogTitle>
          </div>
        </DialogHeader>
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Recebemos suas informações com sucesso. Nossa equipe entrará em contato via WhatsApp assim que possível.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleRedirect} className="w-full">
            Voltar para a página inicial
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}; 