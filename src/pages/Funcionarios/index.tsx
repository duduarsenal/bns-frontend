import { useEffect } from "react";
import { useOutletContext } from "react-router-dom"

export default function Funcionarios(){

    const { setSideBar } = useOutletContext<any>();

    useEffect(() => {
        setSideBar({status: true, page: 'funcionarios'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <>
            
        </>
    )
}