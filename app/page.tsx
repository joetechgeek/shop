// app/page.tsx
"use client"; // Marking this component as a Client Component
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Welcome to Double Lee Electronics</h1>
            <p className="mt-4 text-lg">Your one-stop shop for Apple products!</p>
            <Link href="/products">
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    Shop Now
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
