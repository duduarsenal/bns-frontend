import axios, { AxiosError } from "axios"
import { IEncomendas } from "../@types/encomendas";

export async function UpdateEncomenda(encomendaId: string, encomendaData: Partial<IEncomendas>){

    const url = import.meta.env.VITE_ENCOMENDAS_URL+'/'+encomendaId;
    const data = {
        
    }
    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const response = await axios.patch(url, data, { headers })

        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error?.response?.data?.message)
            return ({error: 401, tela: 'login', message: error.response?.data.message})
        }
        console.log(error)
    }

}