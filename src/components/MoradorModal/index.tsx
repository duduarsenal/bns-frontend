//Components
import Button from "../Button";
import NovoMoradorInput from "../NovoMoradorInput";
import PerfilMoradorInput from "../PerfilMoradorInput";
//Icons
import { IoClose } from "react-icons/io5";
//Types
import { IMoradorModal } from "../../@types/moradormodal";

export default function MoradorModal({ 
    statusModal, setMoradorStatus, 
    nome, setNome,
    bloco, setBloco, 
    apartamento, setApartamento, 
    moradores, 
    proprietario, 
    moradorData, 
    resetSelect, setResetSelect 
}: IMoradorModal) {

    // const [novoMorador, setNovoMorador] = useState<{}>({}) //Não sei o que fazer aqui ainda

    return (
        <div className={`${!statusModal.status && 'invisible opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} visible fixed flex justify-center items-center bg-[#11111190] z-10 w-screen h-screen top-0 left-0 transition-all duration-500`}>
            <div className="relative flex flex-col items-center w-[60%] h-[80%] bg-[#F7FEDD] border-[3px] border-[#124C3870] transition-all duration-[400ms] rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md py-5 px-2">
                <h1 className="text-[30px] font-semibold text-[#0e2b21] bg-[#124C3850] px-4 rounded-lg">{statusModal.type == 'novomorador' ? 'Novo Morador' : statusModal.type == 'perfilmorador' && 'Perfil do Morador'}</h1>
                <div className="flex justify-between items-center w-full h-[90%] px-12 py-2">
                    <div className="flex flex-col gap-12">
                        {statusModal.type == 'novomorador' && 
                            <NovoMoradorInput
                                nome={nome} setNome={setNome}
                                bloco={bloco} setBloco={setBloco}
                                apartamento={apartamento} setApartamento={setApartamento}
                                proprietario={proprietario}
                                moradores={moradores}
                                resetSelect={resetSelect}
                            >
                            </NovoMoradorInput>
                        }
                        {statusModal.type == 'perfilmorador' && 
                            <PerfilMoradorInput
                                moradorData={moradorData}
                            >
                            </PerfilMoradorInput>
                        }
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
                    onClick={() => { setMoradorStatus({status: false}); setBloco(''); setApartamento(''); setResetSelect(!resetSelect) }} 
                    className='absolute top-0 right-0'
                >
                    <IoClose className="text-[36px] text-[#124C38] m-2"/>
                </button>
            </div>
        </div>
    )
}