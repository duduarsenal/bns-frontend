import { useEffect, useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { SelectProps } from "../../@types/select";

export default function Select({ options, label= "", item, setItem, resetSelect }: SelectProps) {
    const [select, setSelect] = useState<boolean>(false)

    useEffect(() => {
        setSelect(false);
    }, [resetSelect])

    return (
        <div className="w-full overflow-x-hidden transition-all cursor-pointer min-h-8 h-max rounded-t-md rounded-tr-md" onClick={() => setSelect(!select)}>
            <div className="flex items-center text-[#124C38] h-full w-full bg-[#F7FEDD] hover:bg-[#f3fdcf] rounded-t-md rounded-tr-md transition-all overflow-hidden">
                <p className="py-1 px-2 text-[18px] font-medium select-none">{`${label.split(' ')[2]} `+ item || label}</p>
                <MdOutlineKeyboardArrowUp className={`${select ? 'opacity-100' : 'opacity-0 text-[0px] h-0 w-0'} transition-all duration-[400ms] text-[32px] text-left`}/>
                <MdOutlineKeyboardArrowDown className={`${select ? 'opacity-0 text-[0px] w-0 h-0' : 'opacity-100'} transition-all duration-[400ms] text-[32px] text-left`}/>
            </div>
            <div className={`${select ? 'opacity-100 h-[140px] max-h-[140px] mr-0' : 'opacity-0 h-0 w-0 -mr-[200px] pointer-events-none'} flex flex-col overflow-y-auto w-full bg-[#F7FEDD90] rounded-b-md rounded-bl-md transition-all duration-500`}>
                {options.map((item: any) => (
                    <span
                        className="w-full py-1 px-2 text-[#124C38] text-[18px] font-medium cursor-pointer hover:bg-[#f3fdcf] transition-all select-none"
                        onClick={() => setItem(item)}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}