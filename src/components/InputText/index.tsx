import { InputHTMLAttributes } from "react";

type InputsProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    type?: string;
    placeholder: string;
    value?: string;
    onChange: React.JSX.Element;
    icon?: React.JSX.Element;
    error?: string;
    inputID: string;
  };

export default function Input({label, type, placeholder, value, onChange, icon, error, inputID}: InputsProps){
    return (
        <>
            <label htmlFor={inputID}>
                {label}
            </label>
            <label htmlFor={inputID}>
                
            <input 
                type={type}
                placeholder={placeholder}
                value={value || ''}
                onChange={onChange}
                />
            </label>
        </>
    )
}