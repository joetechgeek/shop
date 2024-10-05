// components/ProductList.tsx
"use client"; // Marking this component as a Client Component
import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

interface ProductListProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="border rounded p-4 shadow-lg">
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-gray-700">${product.price}</p>
                    <button
                        onClick={() => addToCart(product)}
                        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
