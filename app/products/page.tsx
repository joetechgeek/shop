// app/products/page.tsx
"use client"; // Marking this component as a Client Component
import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

interface Product {
    id: number;
    name: string;
    price: number;
}

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            } else {
                console.error('Failed to fetch products');
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} clearCart={clearCart} />
        </div>
    );
};

export default ProductsPage;
