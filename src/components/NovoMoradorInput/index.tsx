//Components
import Input from '../InputText';
import Select from '../Select';
//Db
import ListaMoradores from '../../../public/db.json';
//Types
import { INovoMorador } from '../../@types/novomorador';



export default function NovoMoradorInput({        
  resetSelect = false,
  nome = "", setNome,
  bloco = "", setBloco, 
  apartamento = "", setApartamento, 
  moradores = [], 
  proprietario = ""
}: INovoMorador) {

  return (
    <>
      <Input
        placeholder="Nome"
        label="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <div className='flex flex-col gap-4'>
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
          />
          <Input
            placeholder="Proprietario da casa"
            label="Proprietario da casa"
            readOnly={true}
            value={proprietario}
          />
          <Input
            placeholder="Moradores"
            label="Moradores"
            readOnly={true}
            className={`${moradores.length > 0 && "hidden"}`}
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
