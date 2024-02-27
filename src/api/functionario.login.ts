import axios, { AxiosError } from "axios"

export async function LoginFuncionario(email: string, password: string){

    const url = import.meta.env.VITE_LOGIN_URL;
    const data = {
        email: email,
        password: password
    }
    const headers = {
        'Content-Type': 'application/json'
    }

    try {
        const response = await axios.post(url, data, { headers })

        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error?.response?.data?.message)
            return ({error: 401, message: error.response?.data.message})
        }
        console.error(error)
    }

}