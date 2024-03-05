import { useEffect, useState } from "react";
import Modal from "../Modal";
import Input from "../InputText";

export default function EncomendaModal({ encomendaStatus, setEncomendaStatus }: any) {

const [changeEffect, setChangeEffect] = useState<number>(0);

function handleEscapeModal() {
    // setConfirmAction(false);
    setEncomendaStatus(false);
}

  //Adiciona o EventListener para captar tecla ESC com o modal aberto
  useEffect(() => {
    const pressEsc = (e: any) => {
      if (e.key == "Escape") {
        setChangeEffect(e.timeStamp);
      }
    };
    document.addEventListener("keydown", pressEsc);
    return () => document.removeEventListener("keydown", pressEsc);
  }, [encomendaStatus]);

  //Subfunção para captar o eventlistener ESC com as informações atualizadas (states)
  useEffect(() => {
    handleEscapeModal();
  }, [changeEffect]);

  return (
    <>
      <Modal status={encomendaStatus} onClose={() => setEncomendaStatus(false)}>
        <>
            <Input 
                placeholder="destinatario"
                
            />
        </>
      </Modal>
    </>
  );
}
