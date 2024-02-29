//Types
import { IMorador } from "../../@types/morador";

interface MoradorProps extends IMorador {
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function MoradorCard({bloco, apartamento, nome, proprietario, moradores, className, onClick}: MoradorProps){

    return (
        <section className={`${className} border-[3px] border-[#4C9773] w-full rounded-lg min-h-[80px] px-2 py-1 flex flex-col font-normal text-[#4C9773] cursor-pointer`} onClick={onClick}>
            <div className="flex items-center justify-between w-full h-max">
                <div className="flex flex-col items-center justify-center w-[200px] overflow-hidden">
                    <span className="font-bold">Morador</span>
                    <span>{nome}</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">Bloco</span>
                    <span>{bloco}</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">Apartamento</span>
                    <span>{apartamento}</span>
                </div>
                <div className="flex flex-col items-center justify-center w-[200px] overflow-hidden">
                    <span className="font-bold">Proprietario</span>
                    <span>{proprietario}</span>
                </div>
                <div className="flex flex-col items-center w-[300px] overflow-hidden">
                    <span className="font-bold">Moradores</span>
                    <div className="flex flex-wrap justify-center w-full gap-x-1">
                        {
                            moradores?.map((morador, index) => (
                                <p key={index}>
                                    {moradores[index + 1] !== undefined ? morador + ', ' : morador}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}