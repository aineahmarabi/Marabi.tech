import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Team from '../components/team';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col md:flex-row items-center">
        {/* <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-8 md:mb-0 md:w-2/5">
            About Us
        </h2> */}
        <div className="">
            <Team/>
        </div>
      </main>
      <Footer />
    </div>
  );
}