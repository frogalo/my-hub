import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const login = () => {
        // Your login logic here
        // If login is successful, set isAuthenticated to true
        setAuthenticated(true);
    };

    const logout = () => {
        // Your logout logic here
        // If logout is successful, set isAuthenticated to false
        setAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
