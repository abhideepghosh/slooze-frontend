'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    description: string;
}

interface ProductContextType {
    products: Product[];
    addProduct: (product: Omit<Product, 'id'>) => void;
    updateProduct: (id: string, product: Partial<Product>) => void;
    deleteProduct: (id: string) => void;
    getProduct: (id: string) => Product | undefined;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const INITIAL_PRODUCTS: Product[] = [
    { id: '1', name: 'Premium Coffee Beans', category: 'Beverages', price: 15.99, stock: 100, description: 'High quality Arabica beans' },
    { id: '2', name: 'Organic Green Tea', category: 'Beverages', price: 12.50, stock: 50, description: 'Fresh organic green tea leaves' },
    { id: '3', name: 'Whole Wheat Flour', category: 'Grains', price: 5.99, stock: 200, description: 'Nutritious whole wheat flour' },
    { id: '4', name: 'Basmati Rice', category: 'Grains', price: 20.00, stock: 150, description: 'Long grain aromatic rice' },
    { id: '5', name: 'Almond Milk', category: 'Dairy Alternatives', price: 4.50, stock: 80, description: 'Unsweetened almond milk' },
];

export function ProductProvider({ children }: { children: React.ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Load from local storage or use initial data
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        } else {
            setProducts(INITIAL_PRODUCTS);
            localStorage.setItem('products', JSON.stringify(INITIAL_PRODUCTS));
        }
    }, []);

    const saveProducts = (newProducts: Product[]) => {
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(newProducts));
    };

    const addProduct = (product: Omit<Product, 'id'>) => {
        const newProduct = { ...product, id: Math.random().toString(36).substr(2, 9) };
        saveProducts([...products, newProduct]);
    };

    const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
        const newProducts = products.map(p => p.id === id ? { ...p, ...updatedProduct } : p);
        saveProducts(newProducts);
    };

    const deleteProduct = (id: string) => {
        const newProducts = products.filter(p => p.id !== id);
        saveProducts(newProducts);
    };

    const getProduct = (id: string) => {
        return products.find(p => p.id === id);
    };

    return (
        <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, getProduct }}>
            {children}
        </ProductContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
}
