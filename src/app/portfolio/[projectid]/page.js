'use client'
import { usePathname } from "next/navigation";

export default function PortfolioProjectPage({params})
{
    const router=usePathname();

    console.log(router);
    console.log(params);
    console.log(params.projectid);
    return (<div>
        <h1>The PortfolioProjectPage</h1>
    </div>);
}

