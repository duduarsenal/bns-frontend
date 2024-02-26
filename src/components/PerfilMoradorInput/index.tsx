import Input from "../InputText";

export default function PerfilMoradorInput(props: any) {

    const { moradorData = {} } = props;

  return (
    <>
      <Input
        placeholder="Nome"
        label="Nome"
        readOnly={true}
        value={moradorData.morador}
        // onChange={(e) => setNome(e.target.value)}
      />
      <div className='flex flex-col gap-2'>
        <Input
          placeholder="Bloco"
          label="Bloco"
          readOnly={true}
          value={moradorData.bloco}
        />
        <Input
          placeholder="Apartamento"
          label="Apartamento"
          readOnly={true}
          value={moradorData?.apartamento}
        />
        <Input
          placeholder="Proprietario da casa"
          label="Proprietario da casa"
          readOnly={true}
          value={moradorData.proprietario || ""}
        />
        <Input
          placeholder="Moradores"
          label="Moradores"
          readOnly={true}
          className={`${moradorData?.moradores?.length > 0 && "hidden"}`}
        />
        <div
          className={`${moradorData?.moradores?.length <= 0 && "invisible"} flex flex-col w-full items-start justify-start -mt-2`}
        >
          {moradorData?.moradores?.length > 0 &&
            moradorData?.moradores?.map((morador: any, index: number) => (
              <p key={index} className="text-[#0f3024] font-medium">
                {morador}
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
