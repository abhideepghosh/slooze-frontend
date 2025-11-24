'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import RouteGuard from '@/components/auth/RouteGuard';
import SalesChart from '@/components/dashboard/SalesChart';
import { Package, DollarSign, AlertTriangle, ShoppingCart } from 'lucide-react';

export default function DashboardPage() {
    return (
        <RouteGuard allowedRoles={['manager']}>
            <DashboardLayout>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {/* Total Products Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold opacity-90">Total Products</h3>
                            <div className="p-2 bg-white/20 rounded-lg">
                                <Package className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold">1,234</p>
                        <p className="text-sm mt-2 opacity-80">+12% from last month</p>
                    </div>

                    {/* Total Value Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold opacity-90">Total Value</h3>
                            <div className="p-2 bg-white/20 rounded-lg">
                                <DollarSign className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold">$45k</p>
                        <p className="text-sm mt-2 opacity-80">+5% from last month</p>
                    </div>

                    {/* Low Stock Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold opacity-90">Low Stock</h3>
                            <div className="p-2 bg-white/20 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold">12</p>
                        <p className="text-sm mt-2 opacity-80">Items need restock</p>
                    </div>

                    {/* Pending Orders Card */}
                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg transform hover:scale-105 transition-transform duration-200">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold opacity-90">Pending Orders</h3>
                            <div className="p-2 bg-white/20 rounded-lg">
                                <ShoppingCart className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <p className="text-3xl font-bold">5</p>
                        <p className="text-sm mt-2 opacity-80">Awaiting shipment</p>
                    </div>
                </div>

                <div className="mb-8">
                    <SalesChart />
                </div>
            </DashboardLayout>
        </RouteGuard>
    );
}
