'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Form() {
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        formData.append("access_key", "4e10f42b-1cb2-4f4b-aff8-6a8345f6d144");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });
            const result = await response.json();
            if (result.success) {
                console.log(result);
                // Redirect to the Thank You page
                router.push('../ThankYou');
            } else {
                // Handle error
                console.error("Form submission failed:", result);
                alert("Form submission failed. Please try again.");
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return(
        <form className="w-auto" onSubmit={handleSubmit} method='POST'>
            <label className="text-[#1E1E1E]">Name:</label>
            <input type="text" id="name" name="name" required className="bg-transparent border-b border-[#1E1E1E] mb-5 w-full text-white focus:outline-none p-1" autoComplete="off" />
            <br/>
            <label className="text-[#1E1E1E]">Email:</label>
            <input type="email" id="email" name="email"  required className="bg-transparent border-b border-[#1E1E1E] mb-5 w-full text-white focus:outline-none p-1" autoComplete="off" />
            <br/>
            <label className="text-[#1E1E1E]" >Choose a service:</label>
            <select id="services" name="services" required className="bg-transparent border-b border-[#1E1E1E] mb-5 w-full text-white focus:outline-none p-1">
                <option value="web-development" className="bg-[rgba(0,0,0,0.9)]">Web Development</option>
                <option value="zoho-implementation" className="bg-[rgba(0,0,0,0.9)]">Zoho Implementation</option>
                <option value="mobile-app-development" className="bg-[rgba(0,0,0,0.9)]">Mobile App Development</option>
            </select>
            <br/>
            <label className="text-[#1E1E1E]">Message:</label>
            <textarea id="message" name="message" required className="bg-transparent border-b border-[#1E1E1E] mb-5 w-full text-white focus:outline-none p-1" autoComplete="off"></textarea>
            <br/>
            <button type="submit" className="text-teal-50 border border-[#3D9BE9] px-3 py-2 rounded-full lg:w-40 w-[100%] hover:text-[#3D9BE9]"><strong>Submit</strong></button>
        </form>
    );
}