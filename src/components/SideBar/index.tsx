//Router
import { Link, useNavigate } from "react-router-dom";
//Imgs
import LogoWhite from "../../assets/logo-white.png";
//Icons
import { MdLogout } from "react-icons/md";
//Components
import NavLink from "../NavLink";
import Button from "../Button";
//Types
import { ISidebarProps } from "../../@types/sidebar";
//Context
import { useSession } from "../../context/session.context";

export default function SideBar({status, page}: ISidebarProps){

    const { setUserData } = useSession();
    const navigate = useNavigate();
    
    function handleLogout(){
        setUserData({user_name: '', user_token: ''})
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <section className={`${status ? 'flex flex-col items-center justify-between' : 'invisible'} max-w-[300px] w-[20%] bg-[#4C9773] h-screen fixed pt-4`}>
            <div className="flex flex-col items-center gap-8">
                <img 
                    src={LogoWhite} 
                    alt="Logo Bossa Nova Stay" 
                    className="max-w-[225px] w-full"
                />
                <ul className="flex flex-col gap-2 font-normal text-[20px] w-full">
                    <NavLink href='moradores' page={page}/>
                    <NavLink href='encomendas' page={page}/>
                    <NavLink href='funcionarios' page={page}/>
                </ul>
            </div>
            <Link to="/login" className="w-full">
                <Button className="flex flex-row-reverse items-center justify-center gap-4 text-[#F7FEDD] font-medium text-[20px] hover:bg-[#124C3860] w-full py-4 transition-all rounded-md" onClick={handleLogout}>
                    <MdLogout />
                    <span>Sair</span>
                </Button>
            </Link>
        </section>
    )
}