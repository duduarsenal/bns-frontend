import { Dispatch, SetStateAction } from "react";
import { IMorador } from "./morador";

export interface IMoradorModal extends IMorador{
    statusModal?: any;
    setMoradorStatus: Dispatch<SetStateAction<{}>>;
    resetSelect?: boolean;
    setResetSelect?: Dispatch<SetStateAction<boolean>> | any;
    setNome: Dispatch<SetStateAction<string>>;
    setBloco: Dispatch<SetStateAction<string>>;
    setApartamento: Dispatch<SetStateAction<string>>;
    setProprietario: Dispatch<SetStateAction<string>>;
    setMoradores: Dispatch<SetStateAction<string[]>>;
    moradorData?: IMorador;
}
