import MenuItem from "./MenuItem";
import { RiHomeSmileLine as HomeIcon } from "react-icons/ri";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
                <MenuItem tittle="HOME" address="/" Icon={HomeIcon} />
            </div>
            <Link href="/">
                <h2 className="text-2xl">
                    <span className="font-bold bg-indigo-600 py-1 px-2 rounded-lg mr-1">
                        See
                    </span>
                    <span className="text-xl hidden sm:inline">Movies</span>
                </h2>
            </Link>

        </div>
    );
}