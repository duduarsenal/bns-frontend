import { IButton } from "../../@types/button";

export default function Button({text, icon, className, onClick, disabled}: IButton){
    return (
        <button className={`${className} flex items-center justify-center`} onClick={onClick} disabled={disabled}>
            {icon}
            {text || ''}
        </button>
    )
}