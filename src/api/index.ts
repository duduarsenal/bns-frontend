import axios, { AxiosError } from 'axios'

export async function getResidenciaByFilter(bloco: string, apartamento: string){

    const url = 'http://localhost:3030/residencias/filterby';
    const data = {
        bloco: bloco,
        apartamento: Number(apartamento)
    }
    const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NmMjc2MDk4MWM2Y2Q0MTJlNDllMSIsIm5hbWUiOiJFZHVhcmRvIGRhIFNpbHZhIGRlIFNvdXphIiwiZW1haWwiOiJkdWR1QGdtYWlsLmNvbSIsInBlcm0iOiJhZG0iLCJpYXQiOjE3MDg3MDAzNzYsImV4cCI6MTcwODc4Njc3Nn0.oTWgV9Y4YZDmOsJWY7-seCSV-ZGh9Oje1U35n6F3mB8',
        'Content-Type': 'application/json; charset=UTF-8'
    }

    try {
        const response = await axios.post(url, data, { headers });
        return response.data
    } catch (error) {
        if(error instanceof AxiosError){
            console.log(error?.response?.data?.message)
            return;
        }
        console.error(error)
    }
    
}