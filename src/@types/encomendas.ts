import { IMorador } from "./morador";

export interface IEncomendas{
    morador: Partial<IMorador>;
    cdrastreio: string;
    status: boolean;
    dtchegada: string;
    dtretirada?: string | null;
    recebedor?: string | null;
    className?: string;
}
