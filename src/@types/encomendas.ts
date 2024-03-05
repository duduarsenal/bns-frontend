import { IMorador } from "./morador";

export interface IEncomendas{
    idencomenda: string;
    morador: Partial<IMorador>;
    cdrastreio: string;
    status: number;
    dtchegada: string;
    dtretirada?: string | null;
    recebedor?: string | null;
    className?: string;
    getAllEncomendas: () => void
}
