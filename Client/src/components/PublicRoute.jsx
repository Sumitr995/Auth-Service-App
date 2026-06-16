import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '@/Context/AuthContext';
import { Spinner } from '@/components/ui/spinner';

const PublicRoute = () => {
  const { isLoggedin, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-8 w-8 text-(--link-blue)" />
      </div>
    );
  }

  return !isLoggedin ? <Outlet /> : <Navigate to="/dashboard" replace />;
};

export default PublicRoute;
