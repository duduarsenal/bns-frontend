import { IoClose } from "react-icons/io5";
import { IModal } from "../../@types/modal";
import Button from "../Button";

export default function Modal({ onClose, status, children, className }: IModal) {
    return (
        <div className={`${!status && 'invisible opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} visible fixed flex justify-center items-center bg-[#11111190] z-10 w-screen h-screen top-0 left-0 transition-all duration-500`}>
            <div className={`relative flex flex-col items-center w-[60%] h-[80%] bg-[#F7FEDD] border-[3px] border-[#124C3870] transition-all duration-[400ms] rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md py-5 px-2 ${className}`}>
                {children}
                <Button
                    onClick={onClose} 
                    className='absolute top-0 right-0'
                >
                    <IoClose className="text-[36px] text-[#124C38] m-2"/>
                </Button>
            </div>
        </div>
    )
}