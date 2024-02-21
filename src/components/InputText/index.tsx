import { InputsProps } from "../../@types/input";

export default function Input({label, type, placeholder, value, icon, error, inputID, ...props}: InputsProps){
    return (
        <div className="relative flex flex-col">
            <label htmlFor={inputID} className="font-semibold bg-[#124C3850] w-max px-4 rounded-sm text-[16px]">
                {label}
            </label>
            <label htmlFor={inputID} className="relative flex items-center justify-center">
                {icon}
            <input
                autoComplete={props.autoComplete || type}
                type={type}
                id={inputID}
                placeholder={placeholder}
                value={value || ''}
                onChange={props.onChange}
                className={`${props.className} w-[350px] h-[35px] outline-none rounded-sm bg-transparent`}
                />
            </label>
            {error && (
                <span className="absolute right-0 text-red-400 -bottom-[30%]">
                    {error}
                </span>
            )}
        </div>
    )
}