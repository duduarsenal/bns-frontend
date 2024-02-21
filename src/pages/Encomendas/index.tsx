import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom"

export default function Encomendas(){

    const setSideBar: React.ComponentState = useOutletContext();

    useEffect(() => {
        setSideBar({status: true, page: 'encomendas'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <>
            
        </>
    )
}