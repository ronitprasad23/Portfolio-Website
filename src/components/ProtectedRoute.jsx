import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from '../lib/api';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const auth = api.isAuthenticated();
            setIsAuthenticated(auth);
            setLoading(false);
        };
        
        checkAuth();
        
        // Since we are using localStorage, we could potentially listen for storage events
        // but for a simple portfolio, re-checking on mount is usually enough.
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-light-base dark:bg-dark-base">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-light-primary dark:border-dark-primary"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
