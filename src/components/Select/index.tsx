import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SelectProps } from "../../@types/select";

export default function Select({ options, label = "", item = "", setItem, resetSelect, theme, isAbsolute = false }: SelectProps) {
    const [select, setSelect] = useState<boolean>(false);

    useEffect(() => {
        setSelect(false);
    }, [resetSelect])

    return (
        <div className={`${isAbsolute && 'relative'} w-full transition-all cursor-pointer min-h-8 h-max rounded-t-md rounded-tr-md`} onClick={() => setSelect(!select)}>
            <div className={`${theme == 'black' ? `text-[#124C38] bg-[#f7fedde2] hover:bg-[#f3fdcf] ${select && '!bg-[#f3fdcf]'}` : theme  == 'white' && `text-black bg-[#b0c6aa] hover:bg-[#32775fbc] ${select && '!bg-[#32775fbc]'}`} flex items-center h-full w-full  rounded-t-md rounded-tr-md transition-all overflow-hidden border-t-[3px] border-r-[3px] border-l-[3px] border-[#124c388b]`}>
                <p className="py-1 px-1.5 text-[18px] font-medium select-none">{item ? label+' '+item : 'Selecione um ' + label}</p>
                <MdOutlineKeyboardArrowUp className={`${!select && '-rotate-180'} transition-all duration-300 text-[32px]`}/>
            </div>
            <div className={`${select ? `opacity-100 ${label == 'Bloco' ? 'h-[140px] z-40 overflow-y-hidden' : 'h-[210px] z-30'} max-h-[210px] mr-0` : `opacity-0 h-0 w-0 -mr-[200px] pointer-events-none ${label == 'Bloco' && 'overflow-y-hidden'}`} ${isAbsolute && 'absolute top-9 left-0 z-20'} flex flex-col overflow-y-auto w-full bg-[#F7FEDD90] rounded-b-md rounded-bl-md transition-all duration-500 border-b-[3px] border-r-[3px] border-l-[3px] border-[#124c388b]`}>
                {options.map((item: any) => (
                    <span
                        className={`w-full py-1 px-2 ${theme == 'black' ? 'text-[#124C38] bg-[#F7FEDD90] hover:bg-[#f3fdcf]' : theme == 'white' && 'text-black bg-[#b0c6aa] hover:bg-[#438e74]'} text-[18px] font-medium cursor-pointer transition-all select-none`}
                        onClick={() => setItem(item)}
                        key={item}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}