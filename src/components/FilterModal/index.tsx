import { IoClose } from "react-icons/io5";
import ButtonIcon from "../Button";
import { FiFilter } from "react-icons/fi";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function FilterModal({status, setFilterStatus}: React.ComponentState){
    return (
        <div className={`${!status && 'opacity-0 w-0 h-0 p-0 border-0'} flex flex-col justify-between items-center absolute top-0 right-0 rounded-lg p-4 w-[300px] h-[500px] bg-[#4C9773] border-[3px] border-[#124C3870] transition-all duration-[400ms]`}>
            <button onClick={() => setFilterStatus(false)} className={`${!status && 'opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} absolute top-0 right-0`}>
                <IoClose className="text-[36px] text-[#F7FEDD] m-2"/>
            </button>

            {/*  */}

            <div/>
            <div/>

            <ButtonIcon 
                icon={<FiFilter />}
                onClick={() => setFilterStatus(false)}
                className={`${!status && 'hidden'} bg-[#124C38] w-[60%] h-max rounded-full py-1 text-[28px] text-[#F7FEDD] hover:bg-[#124C3899] transition-all`}
            />
        </div>
    )
}