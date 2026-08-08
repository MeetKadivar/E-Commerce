import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData);
        navigate('/profile');
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}