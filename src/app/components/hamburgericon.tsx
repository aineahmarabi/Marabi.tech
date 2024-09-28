'use client'
import { useState } from 'react';
import { FiMenu,FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function DropdownMenu(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <button onClick={toggleMenu} className="flex items-center text-[#333333]">
        {isOpen ? (
          <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer"><FiX/></span>
        ) : (
          <span className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer"><FiMenu/></span>
        )}
      </button>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden bg-[#C4A484] border-solid border-[#252C54] shadow shadow-white w-full fixed z-50 mt-5"
      >
        <ul className="p-4 text-[#333333]">
          <li className="py-2"><Link href="../About">About</Link></li>
          <li className="py-2"><Link href="../Testimonials">Testimonials</Link></li>
          <li className="py-2"><Link href="../Contact">Contact</Link></li>
        </ul>
      </motion.div>
    </div>
  );
};