'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingBag, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function Sidebar() {
    const pathname = usePathname();
    const { user, logout } = useAuth();

    const links = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, roles: ['manager'] },
        { name: 'Products', href: '/products', icon: ShoppingBag, roles: ['manager', 'store_keeper'] },
    ];

    // Filter links based on user role
    const filteredLinks = links.filter(link => user && link.roles.includes(user.role));

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 shadow-xl" aria-label="Sidebar">
            <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
                <ul className="space-y-2 font-medium">
                    {filteredLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`flex items-center p-3 rounded-lg group transition-all duration-200 ${isActive
                                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                            : 'text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 transition duration-75 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`} />
                                    <span className="ml-3">{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                        onClick={logout}
                        className="flex items-center w-full p-3 text-gray-900 rounded-lg dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 group transition-all duration-200"
                    >
                        <LogOut className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition duration-75" />
                        <span className="ml-3">Sign Out</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
