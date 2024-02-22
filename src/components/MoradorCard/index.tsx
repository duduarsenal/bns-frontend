import { IMorador } from "../../@types/morador";

interface MoradorProps extends IMorador {
    className?: string;
}

export default function MoradorCard({bloco, apartamento, morador, proprietario, className}: MoradorProps){
    return (
        <section className={`${className} border-[3px] border-[#4C9773] w-full rounded-lg min-h-[80px] px-4 justify-between flex font-normal text-[#4C9773]`}>
            <div className="flex flex-col items-start justify-center h-full w-max">
                <span>Bloco: {bloco}</span>
                <span>Apartamento: {apartamento}</span>
            </div>
            <div className="flex flex-col items-end justify-center h-full w-max">
                <span>Morador: {morador}</span>
                <span>Proprietario: {proprietario}</span>
            </div>
        </section>
    )
}