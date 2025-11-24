'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export type UserRole = 'manager' | 'store_keeper';

interface User {
    username: string;
    role: UserRole;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, role: UserRole) => boolean;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USERS = [
    { username: 'manager', password: 'password', role: 'manager' as UserRole },
    { username: 'keeper', password: 'password', role: 'store_keeper' as UserRole },
    { username: 'store_keeper', password: 'password', role: 'store_keeper' as UserRole },
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check for existing session
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (username: string, role: UserRole) => {
        const validUser = MOCK_USERS.find(u => u.username === username && u.role === role);

        if (validUser) {
            const newUser = { username, role };
            setUser(newUser);
            localStorage.setItem('user', JSON.stringify(newUser));

            // Redirect based on role
            if (role === 'manager') {
                router.push('/dashboard');
            } else {
                router.push('/products');
            }
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
