import MenuItem from "./MenuItem";
import {RiHomeSmileLine as HomeIcon} from "react-icons/ri";

export default function Header() {
    return (
        <div>
            <div className="">
                <MenuItem tittle="HOME" address="/" Icon={HomeIcon}/>
            </div>
            <header>
                <h1>See</h1>
            </header>
            
        </div>
    );
}