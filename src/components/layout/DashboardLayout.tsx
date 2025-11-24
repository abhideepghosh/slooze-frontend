'use client';

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen">
            <Navbar />
            <Sidebar />
            <main className="p-4 sm:ml-64 pt-20 h-full">
                {children}
            </main>
        </div>
    );
}
