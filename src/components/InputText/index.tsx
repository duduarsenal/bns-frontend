//React
import { useId } from "react";
//Types
import { InputsProps } from "../../@types/input";

export default function Input({label, type, placeholder, value, icon, error, readOnly = false, tela, onChange = () => { return }, ...props}: InputsProps){

    const id = useId();

    return (
        <div className="relative flex flex-col">
            <label htmlFor={id} className="font-semibold bg-[#124C3850] w-max px-4 rounded-sm text-[16px]">
                {label}
            </label>
            <label htmlFor={id} className="relative flex items-center justify-center">
                {icon}
            <input
                autoComplete={props.autoComplete || type}
                type={type}
                id={id}
                placeholder={placeholder}
                readOnly={readOnly}
                onChange={onChange}
                onKeyDown={props.onKeyDown}
                value={value || ''}
                className={`${props.className} border-b-[3px] border-solid border-[#124C38] px-1 min-w-[350px] min-h-[35px] outline-none`}
                />
            </label>
            {(!value && error || error && tela == 'login')   && (
                <span className="absolute right-0 text-red-400 -bottom-[35%]">
                    {error}
                </span>
            )}
        </div>
    )
}