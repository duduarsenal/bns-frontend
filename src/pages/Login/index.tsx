// import RioBackground from "../../assets/rio-pao-de-acucar.jpg";
import RioBackgroundv2 from "../../assets/rio-pao-de-acucar-v2.jpg";
import Logo from "../../assets/logo.png";
import Input from "../../components/InputText";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ShapeDivider from "../../components/ShapeDivider";
import { Link, useOutletContext } from "react-router-dom";

interface IUserDataProps {
    email: string;
    password: string;
}

export default function Login() {
    const [userInfo, setUserInfo] = useState<IUserDataProps>({email: '', password: ''});
    const [error] = useState<string | undefined>('');
    const setSideBar: Dispatch<SetStateAction<any>> = useOutletContext(); 

    useEffect(() => {
      setSideBar({status: false});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <main className="flex flex-row w-full h-screen z-10">
      <div className="w-[40%] h-full relative overflow-hidden">
        <img
          src={RioBackgroundv2}
          alt="Rio pão de açucar"
          className="fixed top-0 left-0 h-full -z-10"
        />
      </div>
      <div className="z-10 w-[60%] bg-[#F7FEDD] flex flex-col items-center justify-center h-full gap-8 relative">
        <ShapeDivider />
        <img 
            src={Logo} 
            alt="Logo Bossa Nova Stay" 
            className="w-[350px] drop-shadow-[2px_2px_10px_rgba(0,35,10,0.25)]"
        />
        <div className="relative flex flex-col gap-4">
          <Input
            type="email"
            label="E-mail"
            placeholder="funcionario@email.com"
            value={userInfo.email}
            error={error}
            onChange={(e) => setUserInfo((prevState) => ({ ...prevState, email: e.target.value}))}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="senhaforte123@"
            value={userInfo.password}
            error={error}
            onChange={(e) => setUserInfo((prevState) => ({ ...prevState, password: e.target.value}))}
          />
          <div className="flex justify-end w-full">
            <span className="cursor-pointer text-[#4C9773] font-medium transition-all hover:bg-[#124C3830] px-2 rounded-md">Esqueceu a senha?</span>
          </div>
        </div>

        <Link to="/moradores">
            <button className="cursor-pointer px-12 bg-[#4C9773] text-white rounded-lg py-1 font-medium text-[20px] hover:bg-opacity-85 transition-all">
                Login
            </button>
        </Link>
      </div>
    </main>
  );
}
