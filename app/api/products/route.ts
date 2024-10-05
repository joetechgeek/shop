// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
    // Sample product data
    const products = [
        { id: 1, name: 'Laptop', price: 999.99 },
        { id: 2, name: 'Smartphone', price: 699.99 },
        { id: 3, name: 'Tablet', price: 399.99 },
        { id: 4, name: 'Smartwatch', price: 199.99 },
        { id: 5, name: 'Headphones', price: 149.99 },
        { id: 6, name: 'Camera', price: 599.99 },
        { id: 7, name: 'Bluetooth Speaker', price: 129.99 },
        { id: 8, name: 'Gaming Console', price: 499.99 },
        { id: 9, name: 'Monitor', price: 299.99 },
        { id: 10, name: 'External Hard Drive', price: 89.99 },
    ];

    return NextResponse.json(products);
}
