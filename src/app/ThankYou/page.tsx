import React from 'react';
import Bye from '../components/Bye';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MarabiSays() {
    return (
        <div>
          <Navbar/>
          <div className="flex flex-col justify-center h-screen font-raleway md:mb-10">
              <h1 className="text-8xl font-bold mb-4 lg:text-9xl md:text-9xl">Zahav Says</h1>
              <Bye/>
          </div>
          <Footer/>
        </div>
    );
}