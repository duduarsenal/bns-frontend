import { IConfirmAction } from "../../../@types/confirmaction";
import Button from "../../Button";

export default function ConfirmarAção({label, option1, option2, action1, action2}: IConfirmAction){
    return (
        <article className="absolute top-0 left-0 w-full h-full bg-[#11111160] flex items-center justify-center z-50">
            <div className="bg-white w-[400px] h-[150px] rounded-lg outline -outline-offset-4 outline-solid outline-[3px] outline-[#124C3850] flex justify-between flex-col py-6">
                <span className="w-full text-center text-[20px] font-semibold text-[#124C38]">{label}</span>
                <div className="flex items-center justify-around w-full">
                    <Button onClick={action1} className="bg-[#F7FEDD] w-[125px] px-2 rounded-md py-1 text-[18px] border-2 border-[#11111150] hover:scale-[1.05] transition-all">{option1}</Button>
                    <Button onClick={action2} className="bg-[#124C3890] w-[125px] px-2 rounded-md py-1 text-[18px] border-2 border-[#11111150] hover:scale-[1.05] transition-all">{option2}</Button>
                </div>
            </div>
        </article>
    )
}