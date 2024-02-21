import { ISidebarProps } from "../../@types/sidebar";
import LogoWhite from "../../assets/logo-white.png";
import NavLink from "../NavLink";
import { MdLogout } from "react-icons/md";

export default function SideBar({status, page}: ISidebarProps){
    
    return (
        <section className={`${status ? 'flex flex-col items-center justify-between' : 'hidden'} max-w-[300px] w-[20%] bg-[#4C9773] h-screen fixed pt-4`}>
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
            <button className="flex flex-row-reverse items-center justify-center gap-4 text-[#F7FEDD] font-medium text-[20px] hover:bg-[#124C3860] w-full py-4 transition-all rounded-md">
                <MdLogout className="-mb-[2px]"/>
                <span>Sair</span>
            </button>
        </section>
    )
}