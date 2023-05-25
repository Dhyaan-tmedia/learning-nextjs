'use client'
import { useRouter,useParams,usePathname } from "next/navigation";
function ClientProjectsPage(){
    const params=useParams();
    const path=usePathname();
    const router = useRouter();
    console.log(params);
    console.log(path);
    console.log(router);
    function loadProjectHandler(){
        //load data...
        router.push('/clients/DS/ProjectA');

    }
    return(
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    );
}
export default ClientProjectsPage;