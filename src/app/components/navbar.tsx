import DropdownMenu from './hamburgericon';
import { FaHome } from "react-icons/fa";
import Link from 'next/link';

export default function Navbar(){
    return(
        <div className="flex justify-between top-0 sticky pt-2 font-raleway bg-[#C4A484] h-16">
            <DropdownMenu/>
            <Link href="/"><FaHome className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer'/></Link>
        </div>
    );
}