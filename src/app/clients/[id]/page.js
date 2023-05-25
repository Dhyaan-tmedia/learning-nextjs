'use client'
import { useParams,usePathname } from "next/navigation";
function ClientProjectsPage(){
    const params=useParams();
    const path=usePathname();
    console.log(params);
    console.log(path);
    return(
        <div>
            <h1>The Projects of a Given Client</h1>
        </div>
    );
}
export default ClientProjectsPage;