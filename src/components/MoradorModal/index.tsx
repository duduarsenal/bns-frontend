//Components
import Button from "../Button";
import NovoMoradorInput from "./NovoMoradorInput";
import PerfilMoradorInput from "./PerfilMoradorInput";
//Icons
import { IoClose } from "react-icons/io5";
//Types
import { IMoradorModal } from "../../@types/moradormodal";
import { useEffect, useState } from "react";
import ConfirmarAção from "./ConfirmarAção";

export default function MoradorModal({ 
    statusModal, setMoradorStatus, 
    nome = "", setNome,
    bloco = "", setBloco, 
    apartamento = "", setApartamento, 
    proprietario = "", setProprietario, 
    moradores = [], setMoradores,
    moradorData, 
    resetSelect, setResetSelect 
}: IMoradorModal) {

    // const [novoMorador, setNovoMorador] = useState<{}>({}) //Não sei o que fazer aqui ainda
    const [confirmAction, setConfirmAction] = useState<boolean>(false);
    const [changeEffect, setChangeEffect] = useState<number>(0);
    const [editPerfil, setEditPerfil] = useState<boolean>(false)
    const [error, setError] = useState<string>('');

    function handleEscapeModal(action?: string){
        if(!action && statusModal.type == 'novomorador'){
            if(nome || bloco || apartamento || proprietario || moradores?.length > 0){
                setConfirmAction(true)
                return;
            }
        }

        if(!action && statusModal.type == 'perfilmorador'){
            if(moradorData?.nome !== nome){
                setConfirmAction(true)
                return;
            } 
        }

        //Descartar alterações feitas no morador já existente
        //Sair e remover states armazenados de um "novo" morador
        if(action == 'descartar' || action == 'sair'){
            setNome('')
            setBloco('')
            setApartamento('')
        }

        setConfirmAction(false);
        setMoradorStatus(false);
        setEditPerfil(false)
        setError('')
    }

    //Função que capta o click para cadastrar novo morador
    function handleCadastrarMorador(){
        if(!nome || !bloco || !apartamento){
            setError('')
            setTimeout(() => {
                setError('Preencha todos os campos')
            }, 100)
        }
        
    }

    //Função que capta o click para atualizar morador existente
    function handleAtualizarMorador(){
        if(!nome || !bloco || !apartamento){
            setError('')
            setTimeout(() => {
                setError('Preencha todos os campos')
            }, 100)
        }
    }

    //Adiciona o EventListener para captar tecla ESC com o modal aberto
    useEffect(() => {
        const pressEsc = (e: any) => { 
            if(e.key == 'Escape'){
                setChangeEffect(e.timeStamp)
            }
        }  
        document.addEventListener('keydown', pressEsc);
    return () => document.removeEventListener('keydown', pressEsc);
    }, [statusModal])

    //Subfunção para captar o eventlistener ESC com as informações atualizadas (states)
    useEffect(() => {
        handleEscapeModal();
    }, [changeEffect])

    return (
        <div className={`${!statusModal.status && 'invisible opacity-0 w-0 h-0 p-0 border-0 pointer-events-none'} visible fixed flex justify-center items-center bg-[#11111190] z-10 w-screen h-screen top-0 left-0 transition-all duration-500`}>
            <div className="relative flex flex-col items-center w-[60%] h-[80%] bg-[#F7FEDD] border-[3px] border-[#124C3870] transition-all duration-[400ms] rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md py-5 px-2">
                <h1 className="text-[30px] font-semibold text-[#0e2b21] bg-[#124C3850] px-4 rounded-lg">{statusModal.type == 'novomorador' ? 'Novo Morador' : statusModal.type == 'perfilmorador' && 'Perfil do Morador'}</h1>
                <div className="flex justify-between items-center w-full h-[90%] px-12 py-2">
                    <div className="flex flex-col gap-12">
                        {statusModal.type == 'novomorador' && 
                            <NovoMoradorInput
                                setMoradorStatus={setMoradorStatus}
                                nome={nome} setNome={setNome}
                                bloco={bloco} setBloco={setBloco}
                                apartamento={apartamento} setApartamento={setApartamento}
                                proprietario={proprietario} setProprietario={setProprietario}
                                moradores={moradores} setMoradores={setMoradores}
                                resetSelect={resetSelect}
                                error={error}
                            >
                            </NovoMoradorInput>
                        }
                        {statusModal.type == 'perfilmorador' && 
                            <PerfilMoradorInput
                                setMoradorStatus={setMoradorStatus}
                                nome={nome} setNome={setNome}
                                bloco={bloco} setBloco={setBloco}
                                apartamento={apartamento} setApartamento={setApartamento}
                                proprietario={proprietario} setProprietario={setProprietario}
                                moradores={moradores} setMoradores={setMoradores}
                                resetSelect={resetSelect}
                                moradorData={moradorData}
                                editPerfil={editPerfil}
                                error={error}
                            >
                            </PerfilMoradorInput>
                        }
                    </div>
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="w-[160px] bg-[#124C38] h-[160px] rounded-full"/>
                        <div className="w-[160px] bg-[#124C38] h-[160px] rounded-full"/>
                    </div>
                </div>
                {statusModal.type == 'novomorador' &&
                    <>
                        {/* Botão cadastrar novo morador */}
                        <Button
                            content="Cadastrar"
                            className="bg-[#4C9773] px-8 py-4 rounded-2xl hover:bg-[#124C38] transition-all text-[#F7FEDD] font-medium text-[18px]"
                            onClick={handleCadastrarMorador}
                        />
                        {/* Dialog para confirmar ação em caso de inserção de dados de um novo morador */}
                        {confirmAction &&
                            <ConfirmarAção 
                                label="Deseja sair sem salvar" 
                                option1="Cancelar" 
                                option2="Sair"
                                action1={() => setConfirmAction(false)}
                                action2={() => handleEscapeModal('sair')}
                            />
                        }
                    </>
                }
                {statusModal.type == 'perfilmorador' && 
                    <>
                        {/* Botão para salvar as alterações feita no perfil do morador */}
                        <Button
                            content="Salvar alterações"
                            className="bg-[#4C9773] px-8 py-4 rounded-2xl hover:bg-[#124C38] transition-all text-[#F7FEDD] font-medium text-[18px] disabled:cursor-not-allowed disabled:hover:bg-[#4C9773]"
                            disabled={!editPerfil}
                            onClick={handleAtualizarMorador}
                        />
                        {/* Botão para habilitar edição das informações do morador */}
                        <Button 
                            content="Editar"
                            className={`bg-white px-6 py-2 rounded-lg hover:bg-[#F7FEDD] transition-all text-[#124C38] font-medium absolute bottom-0 right-0 mx-8 mb-6 border-[3px] border-[#124C3860] ${editPerfil && '!bg-[#124C38] !text-[#F7FEDD]'}`}
                            onClick={() => setEditPerfil(!editPerfil)}
                            disabled={false}
                        />
                        {/* Dialog para confirmar alterações feitas no perfil do morador */}
                        {confirmAction &&
                            <ConfirmarAção 
                                label="Deseja descartar as alterações" 
                                option1="Cancelar" 
                                option2="Descartar"
                                action1={() => setConfirmAction(false)}
                                action2={() => handleEscapeModal('descartar')}
                            />
                        }
                    </>
                }
                {/* Botão para fechar modal do Novo Morador/Perfil do Morador */}
                <Button
                    onClick={() => { handleEscapeModal(); setBloco(''); setApartamento(''); setResetSelect(!resetSelect) }} 
                    className='absolute top-0 right-0'
                >
                    <IoClose className="text-[36px] text-[#124C38] m-2"/>
                </Button>
            </div>
        </div>
    )
}