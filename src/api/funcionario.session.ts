import axios, { AxiosError } from "axios";

export async function SessionFuncionario(){
    const user_token = localStorage.getItem('token')
    
    if(!user_token){
        return {error: true, message: 'Token não encontrado'}
    }
    
    const url = import.meta.env.VITE_SESSION_URL;
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': user_token
    }

    try {
        const response = await axios.get(url, { headers })

        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error?.response?.data?.message)
            return ({error: true, message: error.response?.data.message})
        }
        console.error(error)
        return ({error: true, message: error})
    }

}