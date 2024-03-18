import { useEffect } from "react";
import { IPerfilMorador } from "../../../@types/perfilmorador";
import Input from "../../InputText";
//Db
import ListaMoradores from '../../../../public/db.json';
import Select from "../../Select";

export default function PerfilMoradorInput({
  resetSelect = false,
  nome, setNome,
  bloco = "", setBloco,
  apartamento = "", setApartamento,
  proprietario = "", setProprietario,
  moradores = [], setMoradores,
  moradorData,
  editPerfil = false,
  error = ''
}: IPerfilMorador) {

  useEffect(() => {
    moradorData?.nome && setNome(moradorData.nome)
    moradorData?.bloco && setBloco(moradorData.bloco)
    moradorData?.apartamento && setApartamento(moradorData.apartamento)
    moradorData?.proprietario && setProprietario(moradorData.proprietario)
    moradorData?.moradores.length && setMoradores(moradorData.moradores)
  }, [])

  return (
    <>
      <Input
        placeholder="Nome"
        label="Nome"
        readOnly={!editPerfil}
        value={nome}
        setValue={setNome}
        error={error}
      />
      <div className='flex flex-col gap-8'>

        <Select
          options={[
            ...new Set(
              ListaMoradores.blocosaps.map((item: any) => item.bloco).sort()
            ),
          ]}
          label="Bloco"
          item={bloco}
          resetSelect={resetSelect}
          setItem={setBloco}
          theme="black"
          isAbsolute={true}
          error={error}
        />
        <Select
          options={[
            ...new Set(
              ListaMoradores.blocosaps.map((item: any) => item.apartamento).sort()
            ),
          ]}
          label="Apartamento"
          item={apartamento}
          resetSelect={resetSelect}
          setItem={setApartamento}
          theme="black"
          isAbsolute={true}
          error={error}
        />
        <Input
          placeholder="Proprietario da casa"
          label="Proprietario da casa"
          readOnly={!editPerfil}
          value={proprietario}
          setValue={console.log}
          error={error}
        />
        <div
          className={`${!moradores?.length && "invisible"} flex flex-col w-full items-start justify-start`}
        >
          {moradores?.length
            ? <div className="-mt-4">
              <h1 className="font-medium text-brand-dark-green">Moradores</h1>
              {moradores?.map((morador: string, index: number) => (
                <p key={index} className="text-[#0f3024] font-normal">
                  {morador}
                </p>
              ))}
            </div>
            : <Input
              placeholder="Moradores"
              label="Moradores"
              readOnly={!editPerfil}
              value={moradores[0] || ''}
              setValue={console.log}
              error={error}
            />
          }
        </div>
      </div>
    </>
  );
}
