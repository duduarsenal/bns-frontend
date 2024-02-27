import { Dispatch, SetStateAction } from "react";
import { IMoradorModal } from "./moradormodal";
import { IMorador } from "./morador";

export interface IPerfilMorador extends IMoradorModal{
    moradorData?: IMorador;
    editPerfil: boolean;
    error?: string;
  }
  