import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Input from "../../components/InputText";
import Button from "../../components/Button";
import { FiFilter } from "react-icons/fi";
import { PiPlusBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import MoradorCard from "../../components/MoradorCard";
import ListaMoradores from "../../../public/db.json";
import FilterModal from "../../components/FilterModal";
import { getResidenciaByFilter } from "../../api";
import MoradorModal from "../../components/MoradorModal";
import { IMorador } from "../../@types/morador";

export default function Moradores() {
  const setSideBar: React.ComponentState = useOutletContext();
  const [search, setSearch] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<boolean>(false);
  const [moradorStatus, setMoradorStatus] = useState<{}>({status: false, type: ''});
  const [resetSelect, setResetSelect] = useState<boolean>(false);

  const [nome, setNome] = useState<string>("")
  const [bloco, setBloco] = useState<string>("");
  const [apartamento, setApartamento] = useState<string>("");
  const [moradores, setMoradores] = useState<Array<string>>([]);
  const [proprietario, setProprietario] = useState<string>("");
  
  const [moradorData, setMoradorData] = useState<IMorador>()

  useEffect(() => {
    setSideBar({ status: true, page: "moradores" });
  }, []);

  const getMoradores = async (bloco: string, apartamento: string) => {
    const response = await getResidenciaByFilter(bloco, apartamento);

    if (!response || !response.moradores) {
      setProprietario("");
      setMoradores([]);
      return;
    }
    setProprietario(response?.proprietario);
    setMoradores(response?.moradores);
    return;
  };

  // useEffect(() => {
  //     if (bloco && apartamento){
  //         getMoradores(bloco, apartamento)
  //     }
  // }, [bloco, apartamento])

  return (
    <section className="flex flex-col items-center justify-start w-[80%] p-4 overflow-hidden">
      <div className="flex gap-12 pb-4">
        <Input
          type="text"
          placeholder="Digite um nome"
          value={search}
          autoComplete="false"
          icon={
            <IoSearch className="absolute left-0 ml-2 text-[28px] text-[#F7FEDD]" />
          }
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-3xl w-[450px] px-4 bg-[#4C9773] text-[18px] h-12 text-[#F7FEDD] placeholder:text-[#F7FEDD90] !pl-10"
        />
        <div className="relative">
          <Button
            icon={<FiFilter />}
            onClick={() => setFilterStatus(true)}
            className="bg-[#4C9773] p-2 rounded-full text-[30px] text-[#F7FEDD]"
          />
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
          icon={<PiPlusBold />}
          onClick={() => {
            setMoradorStatus({status: true, type: 'novomorador'});
            setFilterStatus(false);
          }}
          className="bg-[#4C9773] w-12 h-12 p-2 rounded-full text-[30px] text-[#F7FEDD]"
        />
        <MoradorModal
          statusModal={moradorStatus}
          setMoradorStatus={setMoradorStatus}
          bloco={bloco}
          setBloco={setBloco}
          apartamento={apartamento}
          setApartamento={setApartamento}
          resetSelect={resetSelect}
          setResetSelect={setResetSelect}
          moradores={moradores}
          proprietario={proprietario}
        />
      </div>
      <ul className="flex flex-col w-full gap-2">
        {ListaMoradores.moradores.map((morador) => (
          <MoradorCard
            key={morador.morador}
            bloco={morador.bloco}
            apartamento={morador.apartamento.toString()}
            nome={morador.morador}
            proprietario={morador.proprietario}
            moradores={morador.moradores}
            className="hover:scale-[1.02] transition-all hover:bg-[#4C977320]"
            onClick={() => { 
                setMoradorStatus({status: true, type: 'perfilmorador'}); 
                setMoradorData({
                    nome: morador.morador, 
                    bloco: morador.bloco, 
                    apartamento: morador.apartamento.toString(), 
                    proprietario: morador.proprietario,
                    moradores: morador.moradores
                })
            }}
          />
        ))}
      </ul>
      <MoradorModal
        statusModal={moradorStatus}
        setMoradorStatus={setMoradorStatus}
        moradorData={moradorData}
        nome={nome}
        setNome={setNome}
        setBloco={setBloco}
        setApartamento={setApartamento}
      />
    </section>
  );
}
