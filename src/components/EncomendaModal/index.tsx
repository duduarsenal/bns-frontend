import { useEffect, useState } from "react";
import Modal from "../Modal";
import Input from "../InputText";
import { IEncomendaModal } from "../../@types/encomendamodal";
import box1 from '/public/box-close.png';
import box2 from '/public/box-open.png';
import Button from "../Button";
import Select from "../Select";

export default function EncomendaModal({ encomendaStatus, setEncomendaStatus, morador, setMorador, cdrastreio, setCdrastreio, destinatario, setDestinatario, bloco, setBloco }: IEncomendaModal) {

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

  function handleCadastrarEncomenda(){
    
  }

  return (
    <>
      <Modal 
        status={true} 
        onClose={() => setEncomendaStatus(false)}
        className=""
      >
        <h1 className="text-[30px] font-semibold text-[#0e2b21] bg-[#124C3850] px-4 rounded-lg">
          Nova Encomenda
        </h1>
        <div className="relative flex items-center justify-between w-full h-full px-4 pb-4">
          <section className="flex flex-col items-center justify-center h-full gap-6">
              <Input
                  label="Destinatario"
                  value={destinatario}
                  onChange={(e) => setDestinatario(e.target.value)}
                  setValue={setDestinatario}     
              />
              <Input
                  label="Código de Rastreio"
                  value={cdrastreio}
                  onChange={(e) => setCdrastreio(e.target.value)}
                  setValue={setCdrastreio}
              />
              <Select 
                  label="Bloco"
                  options={['A', 'B', 'C', 'D']}
                  item={bloco}
                  setItem={setBloco}
                  resetSelect={!encomendaStatus}
                  theme="black"
                  isAbsolute={true}
              />
          </section>
          <section className="relative w-2/4 h-full overflow-hidden">
            <img src={box1} alt="Caixa de encomenda Fechada" className="absolute z-30 w-56 right-40 top-24 opacity-90" />
            <img src={box2} alt="Caixa de encomenda Fechada" className="absolute right-0 z-20 top-10 w-52 opacity-80"/>
          </section>
        </div>
        <Button
            content="Cadastrar"
            className="bg-[#4C9773] px-8 py-4 rounded-2xl hover:bg-[#124C38] transition-all text-[#F7FEDD] font-medium text-[18px]"
            onClick={handleCadastrarEncomenda}
        />
      </Modal>
    </>
  );
}
