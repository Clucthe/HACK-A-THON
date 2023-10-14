import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src={"/ninja.png"} width={200} height={150}/>

                
                
            </div>
       <Link href="/"> <a> Home</a> </Link> 
       <Link href="/about"> <a> About</a> </Link> 
       <Link href="/Ninjas"> <a> Ninja List</a> </Link> 

        
        </nav>
     );
}
 
export default Navbar;