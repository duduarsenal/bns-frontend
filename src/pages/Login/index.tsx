//React
import { useEffect, useState } from "react";
//Router
import { useNavigate, useOutletContext } from "react-router-dom";
//Imgs
import RioBackgroundv2 from "../../assets/rio-pao-de-acucar-v2.jpg";
import Logo from "../../assets/logo.png";
//Components
import Input from "../../components/InputText";
import ShapeDivider from "../../components/ShapeDivider";
//Context
import { useSession } from "../../context/session.context";
//Api
import { LoginFuncionario } from "../../api/functionario.login";
//Icons
import { BiLoaderAlt } from "react-icons/bi";


export default function Login() {
  //States
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  //Errors
  const [error, setError] = useState<string | undefined>("");
  //Contexts
  const { setSideBar, loading, setLoading }  = useOutletContext<any>();
  const { setUserData } = useSession();
  //Navigation
  const navigate = useNavigate();

  async function authFuncionario() {
    if (!email || !password) return setError("Preencha todos os campos");

    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await LoginFuncionario(email, password);
        if (data.error) return setError(data?.message || "Erro ao efetuar login");

        setUserData(data);
        setError("");
        navigate("/moradores");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 200);
  }

  useEffect(() => {
    setSideBar({ status: false });
  }, []);

  return (
    <main className="z-10 flex flex-row w-full h-screen">
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
            value={email}
            error={error}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            loading={loading}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="senhaforte123@"
            value={password}
            error={error}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            loading={loading}
          />
          <div className="flex justify-end w-full">
            <span className="cursor-pointer text-[#4C9773] font-medium transition-all hover:bg-[#124C3830] px-2 rounded-md">
              Esqueceu a senha?
            </span>
          </div>
        </div>

        <button
          className="cursor-pointer px-12 bg-[#4C9773] text-white rounded-lg min-h-[40px] min-w-[150px] flex items-center justify-center py-1 font-medium text-[20px] hover:bg-opacity-85 transition-all"
          onClick={authFuncionario}
        >
          {loading ? (
            <BiLoaderAlt className="font-bold animate-spin" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </main>
  );
}
