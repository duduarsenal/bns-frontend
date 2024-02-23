import Button from "../Button";
import Input from "../InputText";
import Select from "../Select";
import ListaMoradores from '../../../public/db.json';
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function NovoMoradorModal({ status, setNovoMoradorStatus, ...props }: React.ComponentState) {

    const { bloco, setBloco, apartamento, setApartamento, resetSelect, setResetSelect, moradores, setMoradores } = props;
    const [novoMorador, setNovoMorador] = useState<{}>({})
    const [nome, setNome] = useState<string>('')
    const [proprietario, setProprietario] = useState<string>('')

    return (
        <div className={`${!status && 'invisible opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} visible fixed flex justify-center items-center bg-[#11111190] z-10 w-screen h-screen top-0 left-0 transition-all duration-500`}>
            <div className="relative flex flex-col items-center w-[60%] h-[80%] bg-[#F7FEDD] border-[3px] border-[#124C3870] transition-all duration-[400ms] rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md py-5 px-2">
                <h1 className="text-[30px] font-semibold text-[#0e2b21] bg-[#124C3850] px-4 rounded-lg">Novo Morador</h1>
                <div className="flex justify-between items-center w-full h-[90%] px-12 py-2">
                    <div className="flex flex-col gap-12">
                        <Input placeholder="Nome" label="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                        <div className="flex flex-col gap-4">
                            <Select 
                                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.bloco).sort())]} 
                                label="Bloco" 
                                item={bloco}
                                resetSelect={resetSelect}
                                setItem={setBloco}
                                theme="white"
                                isAbsolute={true}
                            />
                            <Select 
                                options={[...new Set(ListaMoradores.blocosaps.map((item: any) => item.apartamento).sort())]} 
                                label="Apartamento" 
                                item={apartamento}
                                resetSelect={resetSelect}
                                setItem={setApartamento}
                                theme="white"
                                isAbsolute={true}
                            />
                            <Input placeholder="Proprietario da casa" label="Proprietario da casa" readOnly={true} value={proprietario}/>
                            <Input placeholder="Moradores" label="Moradores" readOnly={true} className={`${moradores.length > 0 && 'hidden'}`}/>
                            <div className="flex flex-col w-full items-start justify-start -mt-4">
                                {moradores.length > 0 && moradores.map((morador: string) => (
                                    <p className="text-[#0f3024] font-medium">
                                        {morador}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 h-full">
                        <div className="w-[160px] bg-[#124C38] h-[160px] rounded-full"/>
                        <div className="w-[160px] bg-[#124C38] h-[160px] rounded-full"/>
                    </div>
                </div>
                <Button
                    text="Cadastrar"
                    className="bg-[#4C9773] px-8 py-4 rounded-2xl hover:bg-[#124C38] transition-all text-[#F7FEDD] font-medium text-[18px]"
                />
                <button 
                    onClick={() => { setNovoMoradorStatus(false); setBloco(''); setApartamento(''); setResetSelect(!resetSelect) }} 
                    className='absolute top-0 right-0'
                >
                    <IoClose className="text-[36px] text-[#124C38] m-2"/>
                </button>
            </div>
        </div>
    )
}