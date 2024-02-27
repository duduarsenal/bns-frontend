import { IButton } from "../../@types/button";

export default function Button({icon, className, onClick, disabled, children, content}: IButton){
    return (
        <button className={`${className} flex items-center justify-center`} onClick={onClick} disabled={disabled}>
            {icon}
            {content}
            {children}
        </button>
    )
}