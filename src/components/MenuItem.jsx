import Link from "next/link";

export default function MenuItem({tittle, address, Icon})
{
    return (
        <div>
            <Link href={address}>
                <Icon/>
                <p>
                    {tittle}
                </p>
            </Link>
        </div>
    );
}