import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (user) {
        return children;
    }
    if (loading) {
        return <progress className="progress progress-primary w-56" value="40" max="100"></progress>
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivetRoute;