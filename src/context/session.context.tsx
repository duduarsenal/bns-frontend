import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { SessionFuncionario } from "../api/funcionario.session";
import { useNavigate } from "react-router-dom";


interface SessionContextType {
    userData: { user_name: string, user_token: string };
    setUserData: React.Dispatch<React.SetStateAction<{ user_name: string, user_token: string }>>;
}

interface SessionProviderProps {
    children: ReactNode;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export function SessionProvider({children}: SessionProviderProps){
    const [userData, setUserData] = useState<any>();
    const navigate = useNavigate();

    async function handleSession() {
        const data = await SessionFuncionario();

        if(data?.error){
            navigate('/login');
            return;
        }
        setUserData(data)
        return;
    }

    useEffect(() => {
        handleSession();
    }, [])

    useEffect(() => {
        if(userData?.user_token){
            localStorage.setItem('token', userData.user_token)
        }
    }, [userData])
    
    return (
        <SessionContext.Provider value={{userData, setUserData}}>
            {children}
        </SessionContext.Provider>
    )
}

export function useSession(): SessionContextType {
    const context = useContext(SessionContext);

    if (!context) {
        throw new Error('useSession deve ser usado dentro de um SessionProvider');
    }

    return context;
}