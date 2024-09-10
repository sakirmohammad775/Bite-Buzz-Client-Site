import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    const {user}=useContext(AuthContext)
    if(user){
        return children
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivateRoute;