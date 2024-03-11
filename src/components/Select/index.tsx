import { useEffect, useState } from "react";
import { SelectProps } from "../../@types/select";
import Input from "../InputText";

export default function Select({
  options,
  label,
  item,
  setItem,
  resetSelect,
  theme,
  isAbsolute = false,
  error,
}: SelectProps) {
  const [select, setSelect] = useState<boolean>(false);
  const [selectStyle, setSelectStyle] = useState<string>('');
  const [temaStyle, setTemaStyle] = useState<string>("");

  //Reset no select
  useEffect(() => {
    setSelect(false);
  }, [resetSelect]);

  //Mudar tema
  useEffect(() => {
    setTemaStyle(theme == 'white' 
    ? "text-[#F7FEDD] bg-[#124C38] hover:bg-[#438e74]"
    : "text-[#124C38] bg-white hover:bg-[#c3ddd0]")
  }, [theme]);

  //Mudar select
  useEffect(() => {
    const newSelectStyle = select 
    ? `opacity-100 ${label == 'Bloco' ? 'h-[140px] z-30 overflow-y-hidden' : 'h-[210px] z-30'} max-h-[210px] mr-0`
    : `opacity-0 h-0 w-0 -mr-[200px] pointer-events-none ${label == 'Bloco' && 'overflow-y-hidden'}`
    setSelectStyle(newSelectStyle)
  }, [select])

  function handleSelect(selectedItem: string) {
    setItem(selectedItem);
    setSelect(false);
  };

  return (
    <div className={`${isAbsolute && "relative"} w-full`}>
        <Input
            className={`${temaStyle} relative min-h-8 h-8 w-full flex items-center rounded-t-md rounded-tr-md font-medium px-1.5 outline-none`}
            value={item}
            setValue={setItem}
            type="select"
            label="Bloco"
            onFocus={() => setSelect(true)}
            select={select ? 1 : 0}
            setSelect={setSelect}
            error={error}
        />
        <div
            className={`${selectStyle} ${isAbsolute && 'absolute top-11 left-0 z-20'} flex flex-col w-full overflow-y-auto bg-brand-yellow-white rounded-b-md rounded-bl-md transition-all duration-500 border-[3px] border-brand-light-green`}
        >
            {options.map((item: string, index: number) => (
            <span
                key={index}
                className={`${temaStyle} w-full py-1 px-1.5 text-[18px] font-medium cursor-pointer transition-all select-none`}
                onClick={() => handleSelect(item)}
            >
                {item}
            </span>
            ))}
        </div>
    </div>
  );
}
