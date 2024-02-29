import axios, { AxiosError } from "axios"
import { IEncomendas } from "../@types/encomendas";

export async function GetEncomendas(){

    const url = import.meta.env.VITE_ENCOMENDAS_URL;
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': token
    }

    try {
        const response = await axios.get(url, { headers })
        let encomendas: IEncomendas[] = [];

        Promise.all(response.data.forEach((encomenda: any) => {
            encomendas.push({
                morador: {
                    moradorid: encomenda?.destinatario?._id,
                    nome: encomenda?.destinatario?.name,
                    residenciaid: encomenda?.residencia?._id,
                    bloco: encomenda?.residencia?.bloco,
                    apartamento: encomenda?.residencia?.apartamento,
                    proprietario: encomenda?.residencia?.proprietario
                },
                cdrastreio: encomenda?.codrastreio,
                status: encomenda?.status,
                dtchegada: encomenda?.dtchegada,
                dtretirada: encomenda?.dtretirada,
                recebedor: encomenda?.recebedor
            })
        }));

        // console.log(encomendas)
        return encomendas;
    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error?.response?.data?.message)
            return ({error: 401, message: error.response?.data.message})
        }
        console.log(error)
    }

}