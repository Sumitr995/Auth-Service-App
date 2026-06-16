import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from '@/components/ui/spinner';

const PublicRoute = ({ isLoggedin, isLoading }) => {

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
