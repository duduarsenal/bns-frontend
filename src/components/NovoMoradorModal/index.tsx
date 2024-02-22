import Button from "../Button";

export default function NovoMoradorModal({ status, setNovoMoradorStatus }: React.ComponentState) {
    return (
        <div className={`${!status && 'hidden opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} fixed flex justify-center items-center bg-[#11111190] z-10 w-screen h-screen top-0 left-0`}>
            <div className="flex flex-col items-center w-[70%] h-[80%] bg-[#F7FEDD] border-[3px] border-[#124C3870] transition-all duration-[400ms] rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md py-4 px-2">
                <div className="flex justify-between w-full h-[90%]">
                    <div>
                        inputs
                    </div>
                    <div>
                        fotos
                    </div>
                </div>
                <Button
                    text="Cadastrar"
                    className="bg-[#4C9773] px-8 py-4 rounded-2xl hover:bg-[#124C38] transition-all text-[#F7FEDD] font-medium text-[18px]"
                />
            </div>
        </div>
    )
}