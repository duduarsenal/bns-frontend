import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import Input from "../../components/InputText";
import Button from "../../components/Button";
import { FiFilter } from "react-icons/fi";
import { PiPlusBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import MoradorCard from "../../components/MoradorCard";
import ListaMoradores from '../../../public/db.json';
import FilterModal from "../../components/FilterModal";
import NovoMoradorModal from "../../components/NovoMoradorModal";

export default function Moradores(){

    const setSideBar: React.ComponentState = useOutletContext();
    const [search, setSearch] = useState<string>('');
    const [filterStatus, setFilterStatus] = useState<boolean>(false);
    const [novoMoradorStatus, setNovoMoradorStatus] = useState<boolean>(false);

    useEffect(() => {
        setSideBar({status: true, page: 'moradores'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <section className="flex flex-col items-center justify-start w-[calc(100%-300px)] p-4">
            <div className="flex gap-12 pb-4">
                <Input
                    type="text"
                    inputID="buscarmorador"
                    placeholder="Digite um nome"
                    value={search}
                    autoComplete="false"
                    icon={<IoSearch className="absolute left-0 ml-2 text-[28px] text-[#F7FEDD]"/>}
                    onChange={(e) => setSearch(e.target.value)}
                    className="rounded-3xl w-[450px] px-4 bg-[#4C9773] !text-[18px] h-12 text-[#F7FEDD] placeholder:text-[#F7FEDD90] pl-10"
                />
                <div className="relative">  
                    <Button 
                        icon={<FiFilter />}
                        onClick={() => setFilterStatus(true)}
                        className="bg-[#4C9773] p-2 rounded-full text-[30px] text-[#F7FEDD]"
                    />
                    <FilterModal status={filterStatus} setFilterStatus={setFilterStatus}/>
                </div>
                    <Button
                        icon={<PiPlusBold />}
                        onClick={() => setNovoMoradorStatus(true)}
                        className="bg-[#4C9773] w-12 h-12 p-2 rounded-full text-[30px] text-[#F7FEDD]"
                    />
                    <NovoMoradorModal status={novoMoradorStatus} setNovoMoradorStatus={setNovoMoradorStatus}/>
            </div>
            <ul className="flex flex-col w-full gap-2">
                {ListaMoradores.map((morador) => (
                    <MoradorCard 
                        bloco={morador.bloco}
                        apartamento={morador.apartamento}
                        morador={morador.morador}
                        proprietario={morador.proprietario}
                    />
                ))}
            </ul>
        </section>
    )
}