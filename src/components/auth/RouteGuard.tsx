'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth, UserRole } from '@/context/AuthContext';

interface RouteGuardProps {
    children: React.ReactNode;
    allowedRoles?: UserRole[];
}

export default function RouteGuard({ children, allowedRoles }: RouteGuardProps) {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Skip check for login page
        if (pathname === '/login') return;

        if (!isAuthenticated) {
            router.push('/login');
            return;
        }

        if (allowedRoles && user && !allowedRoles.includes(user.role)) {
            // Redirect to appropriate home page if role not allowed
            if (user.role === 'store_keeper') {
                router.push('/products');
            } else {
                router.push('/dashboard');
            }
        }
    }, [isAuthenticated, user, router, pathname, allowedRoles]);

    // Show nothing while checking auth (or a loading spinner)
    if (pathname !== '/login' && !isAuthenticated) {
        return null;
    }

    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return null;
    }

    return <>{children}</>;
}
