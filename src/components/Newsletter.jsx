"use client";
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('api/subscriber', {
                method: "POST",
                body: JSON.stringify({ email }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            const data = await res.json();
            setEmail('');

            toast.success(data.message);
        } catch (error) {
            toast.error(error.message);
        }

    }

  return (
    <div>
        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
        <p className="text-gray-300 mb-4">
            Subscribe to our newsletter to receive updates on our services and industry insights.
        </p>
        <form onSubmit={handleSubmit}>
            <div className="flex">
            <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name='email'
                className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-tech-blue text-gray-800"
                required
            />
            <button
                type="submit"
                className="bg-tech-blue hover:bg-tech-lightBlue px-4 py-2 rounded-r-md transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter