import Image from "next/image";
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
import Section_One from './components/section-one';
import Section_Two from './components/section-two';
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Section_One/>
    <Section_Two/>
    <Footer/>
    </>
  );
}
