import { IoClose } from "react-icons/io5";
import ButtonIcon from "../Button";
import { FiFilter } from "react-icons/fi";
import ListaMoradores from '../../../public/db.json';
import Select from "../Select";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FilterModal({status, setFilterStatus, bloco, setBloco, apartamento, setApartamento, resetSelect, setResetSelect}: React.ComponentState){
    return (
        <div className={`${!status && 'invisible opacity-0'} flex z-10 flex-col gap-4 items-center absolute top-0 right-0 rounded-lg py-4 px-3 pt-12 w-[300px] max-h-auto h-max min-h-[200px] bg-[#4C9773] border-[3px] border-[#124C3870] transition-all duration-[400ms]`}>
            <button 
                onClick={() => { setFilterStatus(false); setBloco(''); setApartamento(''); setResetSelect(!resetSelect) }} 
                className='absolute top-0 right-0'
            >
                <IoClose className="text-[36px] text-[#F7FEDD] m-2"/>
            </button>
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.bloco).sort())]} 
                label="Bloco" 
                item={bloco}
                resetSelect={resetSelect}
                setItem={setBloco}
                theme="black"
            />
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.apartamento).sort())]}
                label="Apartamento" 
                item={apartamento}
                resetSelect={resetSelect}
                setItem={setApartamento}
                theme="black"
            />
            
            <ButtonIcon 
                icon={<FiFilter />}
                onClick={() => { setFilterStatus(false); setResetSelect(!resetSelect) }}
                className='bg-[#124C38] w-[60%] h-max rounded-full py-1 text-[28px] text-[#F7FEDD] hover:bg-[#124C3899] transition-all'
            />
        </div>
    )
}