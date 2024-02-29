import { IMoradorModal } from "./moradormodal";

export interface INovoMorador extends IMoradorModal{
    resetSelect?: boolean;
    error?: string; 
  }
  