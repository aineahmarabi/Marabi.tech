'use client'
import { TypeAnimation } from 'react-type-animation';
export default function Bye(){
    return (
        <TypeAnimation
        sequence={['Thank You!',2500,'',500,'Asante!',2500,'',500,'Merci',2500,'',500,'Gracias',2500,'',500,'Danke',2500,'',500,'Xièxiè',2500,'',500,'감사합니다 ',2500,'',500,]}
        wrapper="h2"
        speed={50}
        // style={{ fontSize: '8em', display: 'inline-block', fontFamily:'raleway', color:'black'}}
        className='text-4xl font-raleway md:text-6xl lg:text-8xl'
        repeat={Infinity}
    />
    );
}