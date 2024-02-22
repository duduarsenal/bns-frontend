import { IoClose } from "react-icons/io5";
import ButtonIcon from "../Button";
import { FiFilter } from "react-icons/fi";
import ListaMoradores from '../../../public/db.json';
import { useState } from "react";
import Select from "../Select";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FilterModal({status, setFilterStatus}: React.ComponentState){
    const [bloco, setBloco] = useState<string>('')
    const [apartamento, setApartamento] = useState<string>('')
    const [resetSelect, setResetSelect] = useState<boolean>(false);
    
    return (
        <div className={`${!status && 'opacity-0 w-0 h-0 p-0 border-0 !pointer-events-none '} flex z-10 flex-col gap-4 items-center absolute top-0 right-0 rounded-lg p-4 pt-12 w-[300px] max-h-[500px] h-max min-h-[200px] bg-[#4C9773] border-[3px] border-[#124C3870] transition-all duration-[400ms]`}>
            <button 
                onClick={() => { setFilterStatus(false); setBloco(''); setApartamento(''); setResetSelect(!resetSelect) }} 
                className={`${!status && 'opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} absolute top-0 right-0`}
            >
                <IoClose className="text-[36px] text-[#F7FEDD] m-2"/>
            </button>
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.bloco).sort())]} 
                label="Selecione um Bloco" 
                item={bloco}
                resetSelect={resetSelect}
                setItem={setBloco}
            />
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.apartamento).sort())]}
                label="Selecione um Apartamento" 
                item={apartamento}
                resetSelect={resetSelect}
                setItem={setApartamento}
            />
            
            <ButtonIcon 
                icon={<FiFilter />}
                onClick={() => { setFilterStatus(false); setResetSelect(!resetSelect) }}
                className={`bg-[#124C38] w-[60%] h-max rounded-full py-1 text-[28px] text-[#F7FEDD] hover:bg-[#124C3899] transition-all`}
            />
        </div>
    )
}