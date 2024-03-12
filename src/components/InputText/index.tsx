//React
import { useEffect, useId, useState } from "react";
//Types
import { InputsProps } from "../../@types/input";
//Icons
import { IoClose, IoEye } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
  const [typePassword, setTypePassword] = useState<string>(props.type || '')
  const inputId = useId();

  useEffect(() => {
    console.log(typePassword)
  }, [typePassword])

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
          {...props}
          type={typePassword}
        />
        <IoClose
          className={`${props.type === "select" || props.type === "password" && "mr-8"} absolute right-0 mx-2 font-medium text-[20px] z-50 cursor-pointer`}
          onClick={() => {
            setValue("")
            setFocus(false)
            setSelect(false)
          }}
        />
        {props.type === "password" && (
          <span 
            onClick={() => setTypePassword(typePassword === "password" ? "text" : "password")}
            className="absolute right-0 px-1 cursor-pointer top-2/4 -translate-y-2/4 text-[22px] hover:text-brand-dark-green text-brand-regular-green"
          >
            {typePassword === "password" ? <FaEye /> : <FaEyeSlash />}
          </span>
        )}
        {props.type === "select" && (
          <div
            className="absolute right-0 h-full cursor-pointer bg-brand-regular-green text-brand-white"
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
