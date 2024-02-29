import { IMorador } from "./morador";

export interface IEncomendas{
    morador: Partial<IMorador>;
    cdrastreio: string;
    status: number;
    dtchegada: string;
    dtretirada?: string | null;
    recebedor?: string | null;
    className?: string;
}
