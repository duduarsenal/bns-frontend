//React
import { useId, useState } from "react";
//Types
import { InputsProps } from "../../@types/input";
//Icons
import { IoClose } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Input({
  label,
  icon,
  error,
  tela,
  setSelect = () => {},
  onFocus = () => {},
  onBlur = () => {},
  setValue,
  ...props
}: InputsProps) {
  const [focus, setFocus] = useState<boolean>(false);
  const inputId = useId();

  return (
    <div className="relative flex flex-col min-w-[350px] border-b-[3px] border-solid border-[#124C38] my-2">
      {label && (
        <label
          htmlFor={inputId}
          className={`absolute ${focus || props.value ? "top-0" : "top-2/4 !-translate-y-2/4 px-1.5 font-normal"} z-10 -translate-y-[85%] font-medium rounded-sm text-[16px] transition-all duration-300 pointer-events-none select-none text-brand-dark-green`}
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center justify-between w-full">
        {icon && icon}
        <input
          {...props}
          id={inputId}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={props.onKeyDown}
          onBlur={() => {
            {props.type !== "select" && setFocus(false)};
            onBlur();
          }}
          onFocus={() => {
            setFocus(true);
            onFocus();
          }}
          className={`${props.className} px-1 min-h-[35px] w-full outline-none`}
          aria-labelledby={inputId}
        />
        <IoClose
          className={`${props.type === "select" && "mr-8"} absolute right-0 mx-2 font-medium text-[24px] z-50 cursor-pointer`}
          onClick={() => {
            setValue("")
            setFocus(false)
            setSelect(false)
          }}
        />
        {props.type === "select" && (
          <div
            className="bg-brand-regular-green text-brand-white absolute right-0 cursor-pointer h-full"
            onClick={() => {
              setFocus(!focus);
              setSelect(!props.select);
            }}
          >
            <MdOutlineKeyboardArrowUp
              className={`${focus && "-rotate-180"} transition-all duration-300 text-[32px] select-none`}
            />
          </div>
        )}
      </div>
      {((!props.value && error) || (error && tela === "login")) && (
        <span className="absolute right-0 text-red-400 -bottom-[35%]">
          {error}
        </span>
      )}
    </div>
  );
}
