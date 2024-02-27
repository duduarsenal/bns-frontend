import { Dispatch, SetStateAction } from "react";
import { IMoradorModal } from "./moradormodal";

export interface INovoMorador extends IMoradorModal{
    resetSelect?: boolean;
    error?: string; 
  }
  