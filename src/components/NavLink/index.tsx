//Router
import { Link } from "react-router-dom";
//Hooks
import { useFirstUpperCase } from '../../hooks/useFirstUpperCase';
//Types
import { INavLinksProps } from "../../@types/sidebar";

export default function NavLink({href, page}: INavLinksProps){
    return (
        <Link to={`/${href}`}>
            <li className={`${href == page && 'bg-[#124C3860]'} px-4 rounded-md w-full text-left after:bg-[#F7FEDD] relative text-[#F7FEDD] transition-all duration-[600ms] after:w-0 hover:after:w-full hover:after:h-[3px] hover:after:bottom-0 hover:after:absolute hover:after:left-0 hover:after:transition-all hover:after:duration-700`}>
                {useFirstUpperCase(href)}
            </li>
        </Link>
    )
}