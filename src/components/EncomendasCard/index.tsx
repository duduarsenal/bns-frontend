import { useEffect, useState } from "react";
import Input from "../InputText";
import Button from "../Button";
import { IEncomendas } from "../../@types/encomendas";
import { UpdateEncomenda } from "../../api/encomendas.update";
import moment from "moment-timezone";

export default function EncomendasCard({ idencomenda, morador, cdrastreio, status, dtchegada, dtretirada, recebedor, className, getAllEncomendas }: IEncomendas){

    const [dataChegada, setDataChegada] = useState<string>('')
    const [dataRetirada, setDataRetirada] = useState<string>('')
    const [recebedorUpdt, setRecebedorUpdt] = useState<string>('');

    const [dropDown, setDropDown] = useState<boolean>(false)

    const [statusEntregue, setStatusEntregue] = useState<boolean>(false)
    const [statusARetirada, setStatusARetirada] = useState<boolean>(false)
    const [statusCancelar, setStatusCancelar] = useState<boolean>(false)
    const [tempStatus, setTempStatus] = useState<string>('')

    const [buttonActive, setButtonActive] = useState<boolean>(false)

    function converteData (dt: string): string{   

        const dataObjeto = new Date(dt);
        function adicionarZero(numero: any) {
            if (numero < 10) {
                return "0" + numero;
            }
            return numero;
        }

        const dia = adicionarZero(dataObjeto.getDate());
        const mes = adicionarZero(dataObjeto.getMonth() + 1);
        const ano = dataObjeto.getFullYear();
        const hora = adicionarZero(dataObjeto.getHours());
        const minuto = adicionarZero(dataObjeto.getMinutes());

        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    }

    function handleDropDown(){
        if(!tempStatus){
            status === 1 && setStatusEntregue(true);
            status === 0 && setStatusARetirada(true);
            status === -1 && setStatusCancelar(true);
        }

        if(dropDown && recebedorUpdt !== recebedor){
            setRecebedorUpdt(recebedor || '')
        }
        
        setTempStatus('')
        setButtonActive(false)
        setDropDown(!dropDown)
    }

    function handleStatusEncomenda(){
        //Status entregue com nome do Recebedor
        if(recebedorUpdt.length >= 3 && (tempStatus == 'entregue' || statusEntregue)){
            setButtonActive(true)
            return;
        }
        //Status a retirar/cancelado sem nome do recebedor
        if(!recebedorUpdt && (tempStatus == 'cancelado' || statusCancelar)){
            setButtonActive(true)
            return;
        }
                
        setButtonActive(false)
    }

    async function handleAtualizarEncomenda(idencomenda: string){
            const date = moment(new Date().toISOString()).tz('America/Sao_Paulo').format();
            let encomendaData: {} = {};

            //Caso não haja mudança em nenhum status, retorna sem realizar nenhuma ação
            if(((tempStatus != 'entregue' && !statusEntregue) && (tempStatus != 'cancelado' && !statusCancelar))) {
                console.log('tem erro ae, linha 79 EncomendasCard')
                return;
            }

            //Marcar como entregue
            if((tempStatus === 'entregue' || statusEntregue) && recebedorUpdt && (recebedorUpdt != recebedor)){
                encomendaData = { status: 1, recebedor: recebedorUpdt, dtretirada: date}
            }

            //Cancelar encomenda
            if(tempStatus === 'cancelado' && !recebedorUpdt){        
                encomendaData = { status: -1, recebedor: '', dtretirada: date}
            }

            const encomendaResponse = await UpdateEncomenda(idencomenda, encomendaData)
            // console.log(encomendaResponse)
            if(encomendaResponse.error) return console.log('error', encomendaResponse.message)
            getAllEncomendas();
    }
    
    useEffect(() => {
        status === 1 && setStatusEntregue(true);
        status === 0 && setStatusARetirada(true);
        status === -1 && setStatusCancelar(true);
        dtretirada && setDataRetirada(converteData(dtretirada));
        recebedor ? setRecebedorUpdt(recebedor) : setRecebedorUpdt('');
        dtchegada ? setDataChegada(converteData(dtchegada)) : setDataChegada('');
        setButtonActive(false)
    }, [status, dtchegada, recebedor, dtretirada])

    useEffect(() => {
        handleStatusEncomenda()
    }, [statusEntregue, statusARetirada, statusCancelar, recebedorUpdt, tempStatus])


    return (
        <section className={`${className} w-full flex flex-col gap-1 justify-center font-normal text-[#4C9773] cursor-pointer`}>
            <div className="flex items-center justify-between h-max w-full border-[3px] border-[#4C9773] rounded-lg min-h-[70px] px-2 hover:scale-[1.02] transition-all" onClick={handleDropDown}>
                <div className="flex flex-col items-center justify-center w-[180px] overflow-hidden">
                    <span className="font-bold select-none">Destinatario</span>
                    <span>{morador.nome}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold select-none">Bloco</span>
                    <span>{morador.bloco}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold select-none">Apartamento</span>
                    <span>{morador.apartamento}</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="font-bold select-none">Cód. Rastreio</span>
                    <span>{cdrastreio}</span>
                </div>
                <div className="flex flex-col items-center w-[150px] overflow-hidden">
                    <span className="font-bold select-none">Data Chegada</span>
                    <span>{dataChegada}</span>
                </div>
                <div className="flex flex-col items-center w-[150px] overflow-hidden">
                    <span className="font-bold select-none">Data Retirada</span>
                    <span>{dataRetirada || 'Aguardando Retirada'}</span>
                </div>
                <div className="flex flex-col items-center w-[175px] overflow-hidden">
                    <span className="font-bold select-none">Recebedor</span>
                    <span>{recebedor ? recebedor : status == 0 ? 'Aguardando Retirada' : 'Cancelado' }</span>
                </div>
                <div className="flex flex-col items-center w-[100px] overflow-hidden">
                    <span className="font-bold select-none">Status</span>
                    <span>{status == 1 ? "Entregue" : status == 0 ? 'Não Entregue' : 'Cancelado'}</span>
                </div>
            </div>
            <div className={`${!dropDown && '-mt-[70px] !h-0 opacity-0 pointer-events-none'} visible mt-0 transition-all duration-[400ms] h-[50px] bg-[#124C3850] rounded-lg flex items-center justify-around px-4 cursor-default mx-4`}>
                <div className="flex gap-12">
                    <span className={`text-[#124C3890] flex gap-2 items-center after:w-[20px] after:h-[20px] ${(tempStatus == 'entregue' || statusEntregue) && 'after:!bg-[#124C3870] after:border-transparent after:content-["✓"]'} after:bg-white after:border-2 after:border-[#124C3890] after:rounded-md after:transition-all font-bold select-none cursor-pointer after:flex after:items-center after:justify-center`} onClick={() => { setStatusARetirada(false); setStatusCancelar(false); setTempStatus('entregue')}}>
                        Entregue
                    </span>
                    <span className={`text-[#11111150] flex gap-2 items-center after:w-[20px] after:h-[20px] ${statusARetirada && 'after:!bg-[#11111150] after:border-transparent after:content-["✓"]'} after:bg-white after:border-2 after:border-[#11111120] after:rounded-md after:transition-all font-bold select-none cursor-pointer after:flex after:items-center after:justify-center`}>
                        A Retirar
                    </span>
                    <span className={`text-[#124C3890] flex gap-2 items-center after:w-[20px] after:h-[20px] ${(tempStatus == 'cancelado' || statusCancelar) && 'after:!bg-[#124C3870] after:border-transparent after:content-["✓"]'} after:bg-white after:border-2 after:border-[#124C3890] after:rounded-md after:transition-all font-bold select-none cursor-pointer after:flex after:items-center after:justify-center`} onClick={() => {setStatusARetirada(false); setStatusEntregue(false); setTempStatus('cancelado')}}>
                        Cancelado
                    </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-[#124C3890]">Recebedor</span>
                    <Input
                        type="text"
                        placeholder={statusCancelar ? 'CANCELADO' : "Nome do recebedor"}
                        readOnly={statusCancelar}
                        value={recebedorUpdt}
                        onChange={(e) => setRecebedorUpdt(e.target.value)}
                        className="rounded-md border-2 border-b-2 !border-[#124C3890]"
                    />
                </div>
                <Button 
                    content="Salvar" 
                    className="bg-[#32775fbc] text-[#11111190] px-6 py-1 rounded-md font-semibold hover:scale-[1.05] transition-all disabled:hover:scale-100 disabled:select-none disabled:cursor-not-allowed"
                    disabled={!buttonActive}
                    onClick={() => handleAtualizarEncomenda(idencomenda)}
                />
            </div>
        </section>
    )
}