'use client'
import { useParams } from "next/navigation";
export default function BlogPostsPage(searchparams){
    const params=useParams();
    console.log(params);
    console.log(searchparams)
    return(<div>
        <h1> The Blog Post</h1>
    </div>);
}
