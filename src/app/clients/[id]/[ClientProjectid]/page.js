'use client'
import { useParams, usePathname } from "next/navigation";


function SelectedClientProjectPage(){
    const params=useParams();
    const path=usePathname();
    console.log(params);
    console.log(path);
    return <div>
        <h1>The Project Page for a Specific Project for a selected Client</h1>
    </div>
}
export default SelectedClientProjectPage;