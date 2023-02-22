import Link from "next/link";

export default function MenuItem({tittle, address, Icon})
{
    return (
        <div>
            <Link href={address} className="mx-6 lg:mx-6 hover:bg-indigo-600">
                <Icon className="text-2xl sm:hidden mx-4"/>
                <p>
                    {tittle}
                </p>
            </Link>
        </div>
    );
}