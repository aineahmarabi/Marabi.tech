import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <div className='font-raleway lg:w-[90%] pt-10'>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5">Epimax Kenya</h1>
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
      <div className="w-full h-[2px] bg-black my-10"></div>
      <section className='font-raleway lg:w-[90%] pt-10'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5">Kenya Safaris</h1>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Challenge</h2>
          <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            Kenya Safaris, a premier safari tour operator, was struggling to showcase their breathtaking experiences effectively online. Their website was outdated, difficult to update, and failed to capture the essence of their extraordinary adventures. This resulted in missed opportunities and declining bookings.
          </p>
        </section>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Solution</h2>
          <div className='lg:flex justify-between'>
            <ul className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
              <li>
                <strong className='text-[#3D9BE9]'>1. Full-Stack Development with Next.js</strong>
                <ul>
                  <li className='list-disc'>Built a robust, responsive frontend and backend using Next.js.</li>
                  <li className='list-disc'>Improved page load times by 70%, enhancing user experience.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>2. Headless CMS Integration with Sanity</strong>
                <ul>
                  <li className='list-disc'>Implemented Sanity as a headless CMS for flexible content management.</li>
                  <li className='list-disc'>Empowered the client to easily update content without touching the codebase.</li>
                  <li className='list-disc'>Reduced content update time by 80%, keeping the site fresh and engaging.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>3. Image Optimization and Performance Boost</strong>
                <ul>
                  <li className='list-disc'>Optimized images for web, reducing load times while maintaining quality.</li>
                  <li className='list-disc'>Implemented lazy loading and responsive images for faster page renders.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>4. Captivating Landing Page Design</strong>
                <ul>
                  <li className='list-disc'>Designed an immersive landing page that showcases the beauty of Kenyan safaris.</li>
                  <li className='list-disc'>Incorporated stunning visuals and intuitive navigation to boost user engagement.</li>
                </ul>
              </li>
            </ul>
            <Image
              className='object-contain lg:w-[40%] lg:m-[2%]'
              src="/images/Safari.png"
              alt="safari adventure illustration"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Results</h2>
          <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            Our tailored solution for Kenya Safaris didn&apos;t just build a website—it crafted a digital gateway to adventure. This transformation exemplifies our ability to blend cutting-edge technology with captivating design, resulting in a significant boost to our client&apos;s online presence and bottom line.
          </p>
          <p className="text-sm md:text-lg lg:text-lg pb-5">After the new website launch, Kenya Safaris experienced:</p>
          <ul className="text-sm md:text-lg lg:text-lg pb-5 list-disc list-inside">
            <li>A 250% increase in organic website traffic</li>
            <li>A 180% boost in online booking inquiries</li>
            <li>A 40% improvement in user engagement metrics</li>
          </ul>
        </section>
      </section>
      <div className="w-full h-[2px] bg-black my-10"></div>
      <section className='font-raleway lg:w-[90%] pt-10'>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-5">Pledgedrive (Flagship Project)</h1>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Vision</h2>
          <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            Pledgedrive was conceived as a revolutionary platform to streamline and modernize the pledge management process. Whether for fundraising, weddings, or any event requiring financial commitments, Pledgedrive aims to provide a comprehensive, user-friendly solution for tracking and managing pledges.
          </p>
        </section>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">Key Features</h2>
          <div className='lg:flex justify-between'>
            <ul className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
              <li>
                <strong className='text-[#3D9BE9]'>1. Universal Pledge Tracking</strong>
                <ul>
                  <li className='list-disc'>Track pledges across various activities and events.</li>
                  <li className='list-disc'>Customizable categories for different types of pledges (fundraising, weddings, etc.).</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>2. Comprehensive Payment Overview</strong>
                <ul>
                  <li className='list-disc'>Real-time tracking of paid and unpaid pledges.</li>
                  <li className='list-disc'>Detailed breakdown of payment status for each pledger.</li>
                  <li className='list-disc'>Aggregate view of total amounts pledged and collected.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>3. M-Pesa Integration</strong>
                <ul>
                  <li className='list-disc'>Seamless integration with M-Pesa for easy mobile payments.</li>
                  <li className='list-disc'>Automatic reconciliation of M-Pesa transactions with pledges.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>4. Custom Dashboards</strong>
                <ul>
                  <li className='list-disc'>Beautifully designed, intuitive dashboards for pledge management.</li>
                  <li className='list-disc'>Customizable views to focus on key metrics for different events or campaigns.</li>
                </ul>
              </li>
              <li>
                <strong className='text-[#3D9BE9]'>5. Pledge Creation and Management</strong>
                <ul>
                  <li className='list-disc'>Easy-to-use interface for creating and managing pledges.</li>
                  <li className='list-disc'>Flexible options for setting pledge amounts, deadlines, and reminders.</li>
                </ul>
              </li>
            </ul>
            <Image
              className='object-contain lg:w-[40%] lg:m-[2%]'
              src="/images/Finance.png"
              alt="Pledgedrive dashboard illustration"
              width={400}
              height={400}
            />
          </div>
        </section>
        <section>
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold pb-5">The Impact</h2>
          <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            While still a work in progress, Pledgedrive is set to revolutionize how individuals and organizations manage financial commitments. By providing a centralized, easy-to-use platform, it promises to:
          </p>
          <ul className="text-sm md:text-lg lg:text-lg pb-5 list-disc list-inside">
            <li>Increase pledge fulfillment rates by an estimated 40%</li>
            <li>Reduce administrative time spent on pledge management by up to 70%</li>
            <li>Improve financial transparency and reporting for events and campaigns</li>
            <li>Enhance user experience for both pledge organizers and contributors</li>
          </ul>
          <p className="text-sm md:text-lg lg:text-lg pb-5 text-justify">
            Pledgedrive represents our commitment to innovative, user-centric solutions that address real-world challenges. As we continue to refine and expand its capabilities, we&apos;re excited about the potential it holds to transform pledge management across various sectors.
          </p>
        </section>
      </section>
      <div className="w-full h-[2px] bg-black my-10"></div>
    </div>
  );
}