'use client'
import { TypeAnimation } from 'react-type-animation';
export default function Animate(){
    return (
        <TypeAnimation
        sequence={['Web Development',2500,'',500,'Zoho Implementation',2500,'',500,'Mobile App Dev',2500,'',500,]}
        wrapper="h2"
        speed={50}
        // style={{ fontSize: '8em', display: 'inline-block', fontFamily:'raleway', color:'black'}}
        className='text-4xl font-raleway md:text-6xl lg:text-8xl'
        repeat={Infinity}
    />
    );
}