import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Services from '../components/testimonials';

export default function ServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col md:flex-row items-center">
        {/* <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-8 md:mb-0 md:w-2/5">
            Services
        </h2> */}
        <div className="">
            <Services/>
        </div>
      </main>
      <Footer />
    </div>
  );
}