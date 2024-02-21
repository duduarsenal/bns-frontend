import { IButtonIcon } from "../../@types/buttonicon";

export default function ButtonIcon({icon, className, onClick}: IButtonIcon){
    return (
        <button className={`${className} flex items-center justify-center`} onClick={onClick}>
            {icon}
        </button>
    )
}