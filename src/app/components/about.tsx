import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    return (
        <div className="font-raleway lg:w-[90%]">
            <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">404: Conventional About Page Not Found</h1>
            <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">Oops! You seem to have stumbled upon our about page. But fear not, brave explorer of the digital realm! You're in for a treat.</p>
            <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">We're <strong>Marabi</strong>. We build websites, create mobile apps, and implement ERP systems. But that's not really what we do. What we actually do is <strong>solve problems.</strong></p>

            <div className="relative w-full h-64 my-5">
                <Image 
                    src="/images/problem.png" 
                    alt="Problem solving illustration" 
                    fill
                    objectFit="contain"
                />
            </div>

            <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">Maybe you're <strong>a small business owner</strong> who needs to reach more customers online. Or <strong>a startup founder</strong> with an app idea that could change lives. Perhaps you're <strong>juggling spreadsheets</strong> and wishing for a better way to manage your growing company.<span className="text-sm md:text-lg lg:text-lg font-bold pb-5 text-justify"> That's where we come in.</span></p>
            <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">We're not here to dazzle you with tech jargon or promise the moon. We're here to listen, understand, and then roll up our sleeves to create something that actually works for you.</p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold pb-5">Our approach is simple:</h2>
            <ul className="text-sm md:text-lg lg:text-lg pb-5 list-disc list-inside space-y-2 text-justify">
                <li>We ask questions. Lots of them.</li>
                <li>We explain things in plain language.</li>
                <li>We build solutions that fit your needs, not our egos.</li>
                <li>We stick around to make sure everything works as it should.</li>
            </ul>
            <p className="text-sm md:text-lg lg:text-lg pb-5 text-[1em] text-justify">
                Sometimes that means developing a sleek new <Link href="/services/web-development" className="text-[#3D9BE9] font-bold">Web App</Link>. 
                Other times it's bringing your <Link href="/services/mobile-apps" className="text-[#3D9BE9] font-bold">Mobile App</Link> idea to life. 
                And often, it involves setting up <a href="https://zoho.com" className="text-[#3D9BE9] font-bold" target="_blank" rel="noopener noreferrer">Zoho</a> to streamline your business operations.
            </p>
            <p className="text-sm md:text-lg lg:text-lg font-bold pb-5 text-justify">
                But always, it means working with real people to solve real problems. 
                <Link href="/Contact" className="border-b border-[#3D9BE9] cursor-pointer text-[#3D9BE9] ml-2">
                    Let's Talk
                </Link>
            </p>
        </div>
    );
}