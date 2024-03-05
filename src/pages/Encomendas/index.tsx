//React
import { useEffect, useState } from "react";
//Router
import { useOutletContext } from "react-router-dom"
//Icons
import { IoSearch } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import { PiPlusBold } from "react-icons/pi";
//Components
import Input from "../../components/InputText";
import Button from "../../components/Button";
import EncomendasCard from '../../components/EncomendasCard'
//Db
// import ListaMoradores from '../../../public/db.json'
import { GetEncomendas } from "../../api/encomendas.get";
import { IEncomendas } from "../../@types/encomendas";
import FilterModal from "../../components/FilterModal";
import EncomendaModal from "../../components/EncomendaModal";

export default function Encomendas(){
    //Context
    const { setSideBar } = useOutletContext<any>();
    //Lista de Encomendas
    const [encomendas, setEncomendas] = useState<IEncomendas[]>([])
    //Ternarios para abrir/fechar os modais e selects
    const [filterStatus, setFilterStatus] = useState<boolean>(false)
    const [encomendaStatus, setEncomendaStatus] = useState<boolean>(false)
    const [resetSelect, setResetSelect] = useState<boolean>(false);
    //Filtros
    const [search, setSearch] = useState<string>('');
    const [bloco, setBloco] = useState<string>('');
    const [apartamento, setApartamento] = useState<string>('');
    //Dados de uma Nova Encomenda
    const [destinatario, setDestinatario] = useState<string>('');
    const [cdrastreio, setCdrastreio] = useState<string>('');


    async function getAllEncomendas(){
        const data: any = await GetEncomendas();
        setEncomendas(data);
    }

    useEffect(() => {
        setSideBar({status: true, page: 'encomendas'})
        // setEncomendas(ListaMoradores.encomendas);
        getAllEncomendas()
    }, [])
    
    return(
        <section className="flex flex-col items-center justify-start w-[80%] p-4 overflow-hidden">
            <div className="flex gap-12 pb-4">
                <Input
                type="text"
                placeholder="Digite um nome"
                autoComplete="false"
                value={search}
                icon={
                    <IoSearch className="absolute left-0 ml-2 text-[28px] text-[#F7FEDD]" />
                }
                onChange={(e) => setSearch(e.target.value)}
                className="rounded-3xl w-[450px] px-4 bg-[#4C9773] text-[18px] h-12 text-[#F7FEDD] placeholder:text-[#F7FEDD90] !pl-10"
                />
            <div className="relative">
                <Button
                    onClick={() => setFilterStatus(true)}
                    className="bg-[#4C9773] p-2 rounded-full text-[30px] text-[#F7FEDD]"
                >
                    <FiFilter />
                </Button>
                <FilterModal
                    status={filterStatus}
                    setFilterStatus={setFilterStatus}
                    bloco={bloco}
                    setBloco={setBloco}
                    apartamento={apartamento}
                    setApartamento={setApartamento}
                    resetSelect={resetSelect}
                    setResetSelect={setResetSelect}
                />
            </div>
                <Button
                  onClick={() => {
                    setEncomendaStatus(true);
                    setFilterStatus(false);
                  }}
                className="bg-[#4C9773] w-12 h-12 p-2 rounded-full text-[30px] text-[#F7FEDD]"
                >
                    <PiPlusBold />
                </Button>
                <EncomendaModal
                    encomendaStatus={encomendaStatus}
                    setEncomendaStatus={setEncomendaStatus}
                />
            </div>
            <ul className="flex flex-col w-full gap-2">
                {encomendas.map((encomenda, index) => (
                    <EncomendasCard
                        key={index}
                        idencomenda={encomenda.idencomenda}
                        morador={encomenda.morador}
                        cdrastreio={encomenda.cdrastreio}
                        status={encomenda.status}
                        dtchegada={encomenda.dtchegada}
                        dtretirada={encomenda.dtretirada}
                        recebedor={encomenda.recebedor}
                        getAllEncomendas={getAllEncomendas}
                        className="transition-all"
                    />
                ))}
            </ul>
        </section>
    );
}