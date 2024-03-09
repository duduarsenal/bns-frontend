import { Dispatch, SetStateAction } from "react";
import { IMorador } from "./morador";

export interface IEncomendaModal {
    encomendaStatus: boolean;
    setEncomendaStatus: Dispatch<SetStateAction<boolean>>;
    destinatario: string;
    setDestinatario: Dispatch<SetStateAction<string>>;
    cdrastreio: string;
    setCdrastreio: Dispatch<SetStateAction<string>>;
    bloco: string;
    setBloco: Dispatch<SetStateAction<string>>;
    morador: Partial<IMorador>;
    setMorador: Dispatch<SetStateAction<Partial<IMorador>>>
  }