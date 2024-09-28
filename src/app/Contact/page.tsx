import Form from '../components/contactform';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        {/* <h2 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-8 md:mb-0 md:w-2/5">
            Contact Us
        </h2> */}
        <div className="lg:w-[90%]">
            <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}