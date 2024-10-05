// app/layout.tsx
import React from 'react';
import './globals.css'; // Import global styles
import { Metadata } from 'next'; // Import Metadata type if needed

export const metadata: Metadata = {
  title: 'Double Lee Electronics',
  description: 'Your one-stop shop for Apple products!',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <a href="/">Double Lee Electronics</a>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/products" className="text-blue-600 hover:underline">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/affiliate" className="text-blue-600 hover:underline">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="/cart" className="text-blue-600 hover:underline">
                    Cart
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="bg-white shadow-md mt-4">
          <div className="max-w-6xl mx-auto p-4 text-center">
            <p className="text-gray-600">© 2024 Double Lee Electronics. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
