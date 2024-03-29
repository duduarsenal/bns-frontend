//React
import { Dispatch, SetStateAction } from "react";
//Icons
import { IoClose } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
//Components
import Select from "../Select";
//Db
import ListaMoradores from '../../../public/db.json';
import Button from "../Button";
//Types
interface IFilterModal{
    status: boolean; setFilterStatus: Dispatch<SetStateAction<boolean>>;
    bloco: string; setBloco: Dispatch<SetStateAction<string>>;
    apartamento: string; setApartamento: Dispatch<SetStateAction<string>>;
    resetSelect: boolean; setResetSelect: Dispatch<SetStateAction<boolean>>;
}

export default function FilterModal({
    status, setFilterStatus, 
    bloco = "", setBloco, 
    apartamento, setApartamento, 
    resetSelect, setResetSelect
}: IFilterModal){

    return (
        <div className={`${!status && 'invisible opacity-0'} flex z-10 flex-col gap-6 items-center absolute top-0 right-0 rounded-lg py-4 px-3 pt-12 w-[320px] max-h-auto h-max min-h-[200px] bg-[#4C9773] border-[3px] border-[#124C3870] transition-all duration-[400ms]`}>
            <Button 
                onClick={() => { 
                    setFilterStatus(false); 
                    setBloco(''); 
                    setApartamento(''); 
                    setResetSelect(!resetSelect) 
                }}
                className='absolute top-0 right-0'
            >
                <IoClose className="text-[36px] text-[#F7FEDD] m-2"/>
            </Button>
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.bloco).sort())]} 
                label="Bloco" 
                item={bloco}
                resetSelect={resetSelect}
                setItem={setBloco}
                theme="black"
                isAbsolute={false}
            />
            
            <Select 
                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.apartamento).sort())]}
                label="Apartamento" 
                item={apartamento}
                resetSelect={resetSelect}
                setItem={setApartamento}
                theme="black"
                isAbsolute={false}
            />
            
            <Button 
                onClick={() => { setFilterStatus(false); setResetSelect(!resetSelect) }}
                className='bg-[#124C38] w-[60%] h-max rounded-full py-1 text-[28px] text-[#F7FEDD] hover:bg-[#124C3899] transition-all'
            >
                <FiFilter />
            </Button>
        </div>
    )
}