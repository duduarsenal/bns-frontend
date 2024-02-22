import { IButton } from "../../@types/button";

export default function Button({text, icon, className, onClick}: IButton){
    return (
        <button className={`${className} flex items-center justify-center`} onClick={onClick}>
            {icon}
            {text || ''}
        </button>
    )
}