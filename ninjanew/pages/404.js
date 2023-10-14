import Link from 'next/link'
import { useEffect } from 'react'; // Hooks
import { useRouter } from 'next/router'; // Hooks
const notfound = () => {
     
    const router = useRouter();
    useEffect(() =>{
        setTimeout(() =>{
          router.push("/")

        },3000)

    },[])




    return (
        <div className="notfind">
            <h1>Sorry....</h1>
            <h2>This page is not found</h2>
            <h2>Return to <Link href="/"> <a> Homepage  </a> </Link></h2>
        </div>
     );
}
 
export default notfound;