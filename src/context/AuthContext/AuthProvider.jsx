import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [isInitializing, setIsInitializing] = useState(true);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('auth_user'));
        if (storedUser) {
            setUser(storedUser);
        }
        setIsInitializing(false);
    },[]);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('auth_user', JSON.stringify(userData));
        navigate('/profile');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('auth_user');
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isInitializing
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}