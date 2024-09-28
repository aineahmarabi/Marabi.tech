'use client'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

export default function Socials(){
    return(
        <div className="flex gap-2">
            <a href="https://x.com/Tadashiee_" target="_blank" rel="noopener noreferrer">
                <BsTwitterX className="text-black-400 text-xl hover:opacity-80" />
            </a>
            <a href="https://www.instagram.com/inea_marabi?igsh=dWM5NjJxcXF0N3l0" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-pink-500 text-xl hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/aineah-marabi/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-xl hover:opacity-80" />
            </a>
            <a href="https://github.com/aineahmarabi" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-xl hover:opacity-80" />
            </a>
    </div>
    );
}