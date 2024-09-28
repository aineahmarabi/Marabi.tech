import React from 'react';
import Animate from './animation'

export default function Hero() {
    return (
        <div className="flex flex-col justify-center h-screen font-raleway md:mb-10">
            <h1 className="text-8xl font-bold mb-4 lg:text-9xl md:text-9xl">Marabi</h1>
            <Animate/>
        </div>
    );
}