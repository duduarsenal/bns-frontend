//Components
import Input from '../../InputText';
import Select from '../../Select';
//Db
import ListaMoradores from '../../../../public/db.json';
//Types
import { INovoMorador } from '../../../@types/novomorador';
import { useEffect } from 'react';

export default function NovoMoradorInput({        
  resetSelect = false,
  nome = "", setNome,
  bloco = "", setBloco, 
  apartamento = "", setApartamento, 
  proprietario = "", setProprietario,
  moradores = [], setMoradores,
  error = ''
}: INovoMorador) {

  useEffect(() => {
    setNome('')
    setBloco('')
    setApartamento('')
    setProprietario('')
    setMoradores([])
  }, [])

  return (
    <>
      <Input
        label="Nome"
        value={nome}
        setValue={setNome}
        error={error}
      />
      <div className='flex flex-col gap-6'>
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
            label="Proprietario da casa"
            readOnly={true}
            disabled={true}
            value={proprietario}
            setValue={console.log}
            error={error}
          />
          <Input
            label="Moradores"
            readOnly={true}
            disabled={true}
            className={`${moradores.length ? "hidden" : "w-full h-8 outline-none"}`}
            setValue={console.log}
            error={error}
          />
          <div
            className={`${moradores.length <= 0 && "invisible"} flex flex-col w-full items-start justify-start -mt-4`}
          >
            {moradores.length > 0 &&
              moradores.map((morador: any, index: number) => (
                <p key={index} className="text-[#0f3024] font-medium">
                  {morador?.name}
                </p>
              ))}
          </div>
      </div>
    </>
  );
}
