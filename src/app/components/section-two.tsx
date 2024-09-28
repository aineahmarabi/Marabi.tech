import Email from './email';
import Phone from './phone';
import Location from './location';
import Socials from './socials';
import Collaboration from './collaboration';
export default function Section_Two(){
    return(
        <div className="lg:flex pb-20">
            <div className="lg:w-[40%] border-t border-black mb-5 lg:mb-0">
                <div className="grid grid-cols-2 gap-4 lg:pt-20 pt-5">
                    <div className="">
                        <h3 className="font-black">Email</h3>
                        <Email/>
                    </div>
                    <div className="">
                        <h3 className="font-black">Phone</h3>
                        <Phone/>
                    </div>
                    <div className="">
                        <h3 className="font-black">Visit</h3>
                        <Location/>
                    </div>
                    <div className="">
                        <h3 className="font-black">Socials</h3>
                        <Socials/>
                    </div>
                    <div className="">
                        <h3 className="font-black">Collaboration</h3>
                        <Collaboration/>
                    </div>
                </div>
            </div>
            <div className="lg:w-[55%] lg:ml-5">
                <p className="pb-10 text-black text-sm font-raleway md:text-xl lg:text-xl text-justify">
                    At <strong>Marabi</strong>, we believe that every business deserves a digital presence that not only looks stunning but also functions flawlessly. 
                    Our expert team of web developers is dedicated to bringing your vision to life, 
                    creating custom websites that are not only aesthetically pleasing but also user-friendly and optimized for performance.
                </p>
                <p className="pb-10 text-black text-sm font-raleway md:text-xl lg:text-xl text-justify">
                    Discover the power of a website that not only captures attention but also drives results. Let us help 
                    you transform your digital presence and elevate your business to new heights.
                </p>
                <p className='text-black text-sm font-raleway md:text-xl lg:text-xl text-justify'>
                    Take a look at our past work, then <span className='text-[#3D9BE9]'> get in touch</span>.
                </p>
            </div>
        </div>
    );
}