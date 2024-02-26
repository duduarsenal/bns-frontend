import { Dispatch, SetStateAction } from "react";
import { IMoradorModal } from "./moradormodal";

export interface INovoMorador extends Partial<IMoradorModal>{
    resetSelect?: boolean;
    nome?: string; setNome: Dispatch<SetStateAction<string>>;
    bloco?: string; setBloco: Dispatch<SetStateAction<string>>; 
    apartamento?: string; setApartamento: Dispatch<SetStateAction<string>>;
    moradores?: string[];
    proprietario?: string; 
  }
  