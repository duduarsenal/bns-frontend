import { IMorador } from "./morador";

export interface IEncomendas{
    morador: IMorador;
    cdrastreio: string;
    status: boolean;
    dtchegada: string;
    dtretirada?: string | null;
    recebedor?: string | null;
    className?: string;
}
