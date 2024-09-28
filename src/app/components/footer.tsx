import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="bg-[#1E1E1E] text-sm md:text-base lg:text-base md:flex md:justify-between sticky bottom-0 text-slate-50 p-3 font-raleway">
            <div className='pb-3 lg:pb-0'>
                <p>Just Like You, But on Steroids. <Link href="/" className='text-[#3D9BE9]'>Marabi</Link></p>
            </div>
            <p className="border-b border-[#3D9BE9] cursor-pointer">
                <Link href="../Contact">Let&apos;s Talk</Link>
            </p>
        </div>
    );
}