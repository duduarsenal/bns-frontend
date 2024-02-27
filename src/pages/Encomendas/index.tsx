//React
import React, { useEffect } from "react";
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
import ListaMoradores from "../../../public/db.json";

export default function Encomendas(){

    const setSideBar: React.ComponentState = useOutletContext();

    useEffect(() => {
        setSideBar({status: true, page: 'encomendas'})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return(
        <section className="flex flex-col items-center justify-start w-[80%] p-4 overflow-hidden">
        <div className="flex gap-12 pb-4">
            <Input
            type="text"
            placeholder="Digite um nome"
            value={''}
            autoComplete="false"
            icon={
                <IoSearch className="absolute left-0 ml-2 text-[28px] text-[#F7FEDD]" />
            }
            //   onChange={(e) => setSearch(e.target.value)}
            className="rounded-3xl w-[450px] px-4 bg-[#4C9773] text-[18px] h-12 text-[#F7FEDD] placeholder:text-[#F7FEDD90] !pl-10"
            />
            <div className="relative">
            <Button
                // onClick={() => setFilterStatus(true)}
                className="bg-[#4C9773] p-2 rounded-full text-[30px] text-[#F7FEDD]"
            >
                <FiFilter />
            </Button>
            </div>
            <Button
            //   onClick={() => {
            //     setMoradorStatus({status: true, type: 'novomorador'});
            //     setFilterStatus(false);
            //   }}
            className="bg-[#4C9773] w-12 h-12 p-2 rounded-full text-[30px] text-[#F7FEDD]"
            >
                <PiPlusBold />
            </Button>
        </div>
        <ul className="flex flex-col w-full gap-2">
            {ListaMoradores.encomendas.map((encomenda, index) => (
                <EncomendasCard
                    key={index}
                    morador={encomenda.morador}
                    cdrastreio={encomenda.codrastreio}
                    status={encomenda.status}
                    dtchegada={encomenda.dtchegada}
                    dtretirada={encomenda.dtretirada}
                    recebedor={encomenda.recebedor}
                    className="transition-all"
                />
            ))}
        </ul>
        </section>
    );
}