import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute: React.FC = () => {
  const { user, token } = useContext(AuthContext);
  return token && user?.email ? <Outlet /> : <Navigate to="/login"/>
};

export default PrivateRoute;