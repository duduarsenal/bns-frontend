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
        onChange={(e) => setNome(e.target.value)}
        error={error}
      />
      <div className='flex flex-col gap-2'>
        {editPerfil ?
          <div className='flex flex-col gap-4 mb-2'>
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
              theme="white"
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
              theme="white"
              isAbsolute={true}
              error={error}
            />
          </div>
          :
          <>
            <Input
              placeholder="Bloco"
              label="Bloco"
              readOnly={!editPerfil}
              value={bloco}
              onChange={(e) => setBloco(e.target.value)}
              error={error}
            />
            <Input
              placeholder="Apartamento"
              label="Apartamento"
              readOnly={!editPerfil}
              value={apartamento}
              onChange={(e) => setApartamento(e.target.value)}
              error={error}
            />
          </>
        }
        <Input
          placeholder="Proprietario da casa"
          label="Proprietario da casa"
          readOnly={!editPerfil}
          value={proprietario}
          error={error}
        />
        <Input
          placeholder="Moradores"
          label="Moradores"
          readOnly={!editPerfil}
          className={`${moradores?.length && "hidden"}`}
          value={moradores[0] || ''}
          error={error}
        />
        <div
          className={`${!moradores?.length && "invisible"} flex flex-col w-full items-start justify-start -mt-2`}
        >
          {moradores?.length &&
            moradores?.map((morador: string, index: number) => (
              <p key={index} className="text-[#0f3024] font-medium">
                {morador}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
