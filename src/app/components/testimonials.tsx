import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className='font-raleway lg:w-[90%] pt-10'>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5">Epimaxkenya.com</h1>
      <section>
        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Challenge</h2>
        <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
          Epimax Kenya, a distributor of high-quality skincare products, was facing a significant hurdle. Despite offering a range of effective solutions for dry skin conditions like eczema and psoriasis, their sales were plummeting. Their online presence was outdated and ineffective, failing to showcase the true value of their products to potential customers.
        </p>
      </section>
      <section>
        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Solution</h2>
        <div className='lg:flex justify-between'>
          <ul className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            <li>
              <strong className='text-[#3D9BE9]'>1. Frictionless Checkout with PayStack Integration</strong>
              <ul>
                <li className='list-disc'>Integrated PayStack payment gateway for lightning-fast, secure transactions.</li>
                <li className='list-disc'>Reduced checkout time by 60%, slashing cart abandonment rates.</li>
              </ul>
            </li>
            <li>
              <strong className='text-[#3D9BE9]'>2. Seamless Delivery with ShipDay Integration</strong>
              <ul>
                <li className='list-disc'>Integrated ShipDay for real-time order tracking and efficient delivery management.</li>
                <li className='list-disc'>Customers can now track their skincare salvation from warehouse to doorstep.</li>
                <li className='list-disc'>Delivery time cut by 40%, because great skin shouldn&apos;t wait!</li>
              </ul>
            </li>
            <li>
              <strong className='text-[#3D9BE9]'>3. Inventory Mastery with Zoho Integration</strong>
              <ul>
                <li className='list-disc'>Seamlessly integrated Zoho Inventory for real-time stock management</li>
                <li className='list-disc'>Reduced overselling incidents to zero, keeping customers happy and inventory lean.</li>
              </ul>
            </li>
          </ul>
          <Image 
            className='object-contain lg:w-[40%] lg:m-[2%]' 
            src="/images/ecommerce-removebg.png" 
            alt="ecommerce doodle"
            width={400}
            height={400}
          />
        </div>
      </section>
      <section>
        <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Results</h2>
        <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
          We don&apos;t just build websites—we architect digital success stories. Epimax Kenya&apos;s transformation is just one example of how we turn online struggles into e-commerce triumphs. Ready to revolutionize your online presence? <Link href="../Contact" className="text-[#3D9BE9] cursor-pointer">Let&apos;s create some digital magic together!</Link>
        </p>
        <p className="text-sm md:text-lg lg:text-lg pb-5">Post launch, Epimax Kenya saw:</p>
        <ul className="text-sm md:text-lg lg:text-lg pb-5 list-disc list-inside">
          <li>A 200% increase in online traffic</li>
          <li>A 150% boost in online sales</li>
          <li>A 50% reduction in cart abandonment rates</li>
        </ul>
      </section>
    </div>
  );
}