import Link from 'next/link';
export default function Section_One(){
    return(
        <div className="pb-20">
            <p className="text-black text-2xl font-raleway md:text-3xl lg:text-4xl"><span className="font-semibold">We create impactful digital experiences that attract and engage.</span> Check out our work below or learn more about<span className="text-[#3D9BE9]"><Link href="../Testimonials"> what we do.</Link></span></p>
        </div>
    );
}